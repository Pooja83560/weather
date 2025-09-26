import React, { useState } from 'react';
import styles from './InputField.module.css';

interface InputFieldProps {
  onSendMessage: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ 
  onSendMessage, 
  placeholder = "Type your message...", 
  disabled = false 
}) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className={styles.messageInput} onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className={styles.input}
        autoFocus
      />
      <button 
        type="submit" 
        disabled={disabled || !message.trim()}
        className={styles.sendButton}
      >
        {disabled ? '...' : 'Send'}
      </button>
    </form>
  );
};

export default InputField;