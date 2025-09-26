import React, { useState } from 'react';
import styles from './ChatBubble.module.css';

interface ChatBubbleProps {
  message: string;
  sender: 'user' | 'bot';
  timestamp?: Date;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, sender, timestamp }) => {
  const [showReactions, setShowReactions] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);

  // Extract weather conditions and add appropriate icons
  const getWeatherIcon = (text: string): string => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('sunny') || lowerText.includes('clear')) return '☀️';
    if (lowerText.includes('cloudy') || lowerText.includes('overcast')) return '☁️';
    if (lowerText.includes('rain') || lowerText.includes('drizzle')) return '🌧️';
    if (lowerText.includes('snow') || lowerText.includes('blizzard')) return '❄️';
    if (lowerText.includes('storm') || lowerText.includes('thunder')) return '⛈️';
    if (lowerText.includes('fog') || lowerText.includes('mist')) return '🌫️';
    if (lowerText.includes('wind')) return '💨';
    if (lowerText.includes('hot') || lowerText.includes('warm')) return '🌡️';
    if (lowerText.includes('cold') || lowerText.includes('freeze')) return '🧊';
    return '';
  };

  const formatRelativeTime = (date: Date): string => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  const weatherIcon = sender === 'bot' ? getWeatherIcon(message) : '';
  const reactions = ['👍', '❤️', '😊', '🌟', '🎉'];

  const handleReaction = (reaction: string) => {
    setSelectedReaction(reaction);
    setShowReactions(false);
  };

  return (
    <div className={`${styles.messageBubble} ${styles[sender]}`}>
      {sender === 'bot' && (
        <div className={styles.botAvatar}>
          🤖
        </div>
      )}
      <div className={styles.messageContainer}>
        <div className={styles.messageContent}>
          {weatherIcon && <span className={styles.weatherIcon}>{weatherIcon}</span>}
          {message}
        </div>
        <div className={styles.messageFooter}>
          {timestamp && (
            <div className={styles.timestamp}>
              {formatRelativeTime(timestamp)}
            </div>
          )}
          {sender === 'bot' && (
            <div className={styles.reactionContainer}>
              {selectedReaction && (
                <span className={styles.selectedReaction}>{selectedReaction}</span>
              )}
              <button
                className={styles.reactionButton}
                onClick={() => setShowReactions(!showReactions)}
                aria-label="React to message"
              >
                😊
              </button>
              {showReactions && (
                <div className={styles.reactionMenu}>
                  {reactions.map(reaction => (
                    <button
                      key={reaction}
                      className={styles.reactionOption}
                      onClick={() => handleReaction(reaction)}
                    >
                      {reaction}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {sender === 'user' && (
        <div className={styles.userAvatar}>
          👤
        </div>
      )}
    </div>
  );
};

export default ChatBubble;