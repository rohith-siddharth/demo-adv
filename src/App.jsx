import { useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("customer from store");
  const [email, setEmail] = useState("storecustomer@gmail.com");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [queryParams, setQueryParams] = useState({ offerId: "", sessionId: "" });

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const offerId = searchParams.get("offerId");
    const sessionId = searchParams.get("sessionId");

    if (!offerId || !sessionId) {
      setError("Invalid link, missing offerId or sessionId.");
    } else {
      setQueryParams({ offerId, sessionId });
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setLoading(true); // Start loading

    if (!name || !email) {
      setError("Please fill in both name and email.");
      setLoading(false); // Stop loading on validation error
      return;
    }

    try {
      const response = await axios.post(
        "https://dev.personapay.tech/advertisers/campaign/conversion/webhook",
        {
          offerId: queryParams.offerId,
          sessionId: queryParams.sessionId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      console.log("API Response:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit the form. Please try again.");
    } finally {
      setLoading(false); // Stop loading after API call
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h1 style={styles.heading}>Advertiser Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <p style={styles.label}>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={styles.input}
          />
          <p style={styles.label}>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
          />
          <br />
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#f4f4f4",
  },
  formWrapper: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "400px",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  label: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    fontSize: "1.2rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
    fontSize: "1.1rem",
  },
};

export default App;
