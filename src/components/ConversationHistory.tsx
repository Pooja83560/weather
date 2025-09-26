import React, { useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import LoadingAnimation from './LoadingAnimation';
import styles from './ConversationHistory.module.css';
import type { ChatMessage } from '../services/api';

interface ConversationHistoryProps {
  messages: ChatMessage[];
  isLoading?: boolean;
}

const ConversationHistory: React.FC<ConversationHistoryProps> = ({ messages, isLoading = false }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className={styles.messageList}>
      {messages.length === 0 && (
        <div className={styles.welcomeMessage}>
          <div className={styles.welcomeIcon}>🌤️</div>
          <h3>Welcome to Weather Agent Chat!</h3>
          <p>Ask me about the weather in any city around the world.</p>
          <div className={styles.suggestions}>
            <span>Try asking:</span>
            <div className={styles.suggestionTags}>
              <button className={styles.suggestionTag}>"Weather in London"</button>
              <button className={styles.suggestionTag}>"Will it rain tomorrow?"</button>
              <button className={styles.suggestionTag}>"Temperature in Tokyo"</button>
            </div>
          </div>
        </div>
      )}
      
      {messages.map((message) => (
        <ChatBubble
          key={message.id}
          message={message.text}
          sender={message.sender}
          timestamp={message.timestamp}
        />
      ))}
      
      <LoadingAnimation isVisible={isLoading} />
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ConversationHistory;