import { useEffect, useRef } from 'react';
import styles from '../styles';

const ThankYouPage = () => {
    const hasShownPlacement = useRef(false);
  
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://storage.googleapis.com/global-assets-personapay/assets/files/js/sdk-index0.js';
      script.async = true;
      
      script.onload = () => {
        window.sdk = window.Pier39WebSDK.initialize({
          storeId: '0e806375-5944-413a-8490-59387d46b671',
          environment: 'development',
          isTestMode: true
        });
        
        // Only show placement if it hasn't been shown before
        if (!hasShownPlacement.current) {
          window.sdk?.showPlacement({ email: 'storecustomer@gmail.com' });
          hasShownPlacement.current = true;
        }
      };
  
      document.head.appendChild(script);
  
      return () => {
        document.head.removeChild(script);
      };
    }, []);
  
    return (
      <div style={styles.thankYouContainer}>
        <div style={styles.thankYouWrapper}>
          <div style={styles.thankYouCard}>
            <div style={styles.checkmarkContainer}>
              <svg style={styles.checkmark} viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            
            <h1 style={styles.thankYouHeading}>Thank you for your order!</h1>
            <p style={styles.orderNumber}>Order #1234</p>
            
            <div style={styles.orderDetails}>
              <h2 style={styles.detailsHeading}>Order Details</h2>
              <div style={styles.detailsGrid}>
                <div>
                  <h3 style={styles.detailsSubheading}>Shipping Address</h3>
                  <p style={styles.detailsText}>
                    John Doe<br />
                    123 Main St<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 style={styles.detailsSubheading}>Order Summary</h3>
                  <p style={styles.detailsText}>
                    Total: $99.00<br />
                    Payment Method: Credit Card<br />
                    Shipping Method: Standard
                  </p>
                </div>
              </div>
            </div>
  
            <div id="pier39-placeholder"></div>
            
            <div style={styles.supportInfo}>
              <p>
                We will send you shipping confirmation when your item(s) are on the way!<br />
                For any questions, please email{' '}
                <a href="mailto:support@example.com" style={styles.supportLink}>
                  support@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ThankYouPage;