import { useState, useEffect } from 'react';
import ConversationArea from './components/ConversationArea';
import './App.css';
import type { ChatMessage } from './services/api';
import { generateMessageId, sendMessageToWeatherAgent } from './services/api';

function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize with empty messages to show welcome screen
  useEffect(() => {
    // Empty - welcome screen will be shown by MessageList when messages array is empty
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K to clear chat
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        handleClearChat();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSendMessage = async (messageText: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: generateMessageId(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Prepare bot message for streaming
    const botMessageId = generateMessageId();
    const botMessage: ChatMessage = {
      id: botMessageId,
      text: '',
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);

    // Get all messages for context
    const allMessages = [...messages, userMessage];

    try {
      await sendMessageToWeatherAgent(
        allMessages,
        (chunk: string) => {
          // Update bot message with streaming content
          setMessages(prev => prev.map(msg => 
            msg.id === botMessageId 
              ? { ...msg, text: msg.text + chunk }
              : msg
          ));
        },
        (error: string) => {
          // Handle error
          setMessages(prev => prev.map(msg => 
            msg.id === botMessageId 
              ? { ...msg, text: `Sorry, I encountered an error: ${error} Please try again! 😔` }
              : msg
          ));
        }
      );
    } catch (error) {
      setMessages(prev => prev.map(msg => 
        msg.id === botMessageId 
          ? { ...msg, text: "Sorry, I'm having trouble connecting to the weather service. Please try again later! 🌩️" }
          : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([{
      id: generateMessageId(),
      text: "Chat cleared! Ask me about the weather in any city. 🌤️",
      sender: 'bot',
      timestamp: new Date()
    }]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <h1>🌤️ Weather Agent Chat</h1>
          <div className="status-indicator">
            <span className={`status-dot ${isLoading ? 'loading' : 'ready'}`}></span>
            <span className="status-text">
              {isLoading ? 'Thinking...' : 'Ready'}
            </span>
          </div>
        </div>
        <div className="header-controls">
          <button 
            className="control-button clear-button" 
            onClick={handleClearChat}
            title="Clear chat (Ctrl+K)"
          >
            🗑️
          </button>
        </div>
      </header>
      <main className="app-main">
        <ConversationArea
          messages={messages}
          isLoading={isLoading}
          onSendMessage={handleSendMessage}
        />
      </main>
      <footer className="app-footer">
        <div className="keyboard-shortcuts">
          <span>💡 Tips: </span>
          <span><kbd>Ctrl+K</kbd> Clear chat</span>
          <span><kbd>Ctrl+M</kbd> Toggle sound</span>
          <span><kbd>Enter</kbd> Send message</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
