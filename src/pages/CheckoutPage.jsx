import { useNavigate } from 'react-router-dom';
import styles from '../styles';

const CheckoutPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    // navigate('/thank-you');
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.grid}>
          {/* Form Section */}
          <div style={styles.formSection}>
            <div style={styles.formCard}>
              <h1 style={styles.heading}>Checkout</h1>
              
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email</label>
                  <input
                    type="email"
                    style={styles.input}
                    placeholder="your@email.com"
                  />
                </div>

                <div style={styles.nameGroup}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>First name</label>
                    <input
                      type="text"
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Last name</label>
                    <input
                      type="text"
                      style={styles.input}
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Address</label>
                  <input
                    type="text"
                    style={styles.input}
                  />
                </div>

                <div style={styles.cityGroup}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>City</label>
                    <input
                      type="text"
                      style={styles.input}
                    />
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>Postal Code</label>
                    <input
                      type="text"
                      style={styles.input}
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone</label>
                  <input
                    type="tel"
                    style={styles.input}
                  />
                </div>

                <button type="submit" style={styles.button}>
                  Place Order
                </button>

                <button 
  onClick={async () => {
    try {
      const response = await fetch("https://backend-test-t21m.onrender.com/set-cookie", {
        method: "GET",
        credentials: "include", // ✅ Required for cross-site cookies
      });

      const data = await response.json();
      console.log(data.message); // Log the response message
    } catch (error) {
      console.error("Error:", error);
    }
  }} 
  style={styles.button}
>
  Set Cookie test
</button>

<button 
  onClick={async () => {
    try {
      const response = await fetch("https://backend-test-t21m.onrender.com/check-cookie", {
        method: "GET",
        credentials: "include", // ✅ Required for cross-site cookies
      });

      const data = await response.json();
      console.log(data.message); // Log the response message
    } catch (error) {
      console.error("Error:", error);
    }
  }} 
  style={styles.button}
>
  check Cookie test
</button>

              </form>
            </div>
          </div>

          {/* Order Summary Section */}
          <div style={styles.summarySection}>
            <div style={styles.summaryCard}>
              <h2 style={styles.summaryHeading}>Order Summary</h2>
              
              <div style={styles.productItem}>
                <img src="/api/placeholder/64/64" alt="Product" style={styles.productImage} />
                <div style={styles.productDetails}>
                  <div style={styles.productHeader}>
                    <h3 style={styles.productTitle}>Sample Product</h3>
                    <p style={styles.productPrice}>$99.00</p>
                  </div>
                  <p style={styles.productQuantity}>Quantity: 1</p>
                </div>
              </div>

              <div style={styles.summaryDivider} />
              
              <div style={styles.summaryItems}>
                <div style={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>$99.00</span>
                </div>
                <div style={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div style={styles.totalRow}>
                  <span>Total</span>
                  <span>$99.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;