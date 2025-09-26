import React from 'react';
import styles from './LoadingAnimation.module.css';

interface LoadingAnimationProps {
  isVisible: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.typingIndicator}>
      <div className={styles.avatar}>
        <span className={styles.weatherIcon}>🤖</span>
      </div>
      <div className={styles.typingBubble}>
        <div className={styles.typingText}>
          <span>Weather Agent is thinking</span>
          <div className={styles.dots}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;