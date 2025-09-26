import React from 'react';
import ConversationHistory from './ConversationHistory';
import InputField from './InputField';
import styles from './ConversationArea.module.css';
import type { ChatMessage } from '../services/api';

interface ConversationAreaProps {
  messages: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (message: string) => void;
}

const ConversationArea: React.FC<ConversationAreaProps> = ({ messages, isLoading, onSendMessage }) => {
  return (
    <div className={styles.conversationArea}>
      <ConversationHistory messages={messages} isLoading={isLoading} />
      <InputField 
        onSendMessage={onSendMessage}
        placeholder="Ask me about the weather in any city..."
        disabled={isLoading}
      />
    </div>
  );
};

export default ConversationArea;