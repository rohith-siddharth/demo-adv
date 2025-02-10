import { useEffect } from 'react';

function App() {
 useEffect(() => {
   const script = document.createElement('script');
   script.src = 'https://storage.googleapis.com/global-assets-personapay/assets/files/js/sdk-index4.js';
   script.async = true;
   script.onload = () => {
     // @ts-ignore
     window.sdk = window.Pier39WebSDK.initialize({
       storeId: '0e806375-5944-413a-8490-59387d46b671',
       environment: 'development',
       isTestMode: true
     });
   };
   document.head.appendChild(script);

   return () => {
     document.head.removeChild(script);
   };
 }, []);

 const handleShowOffers = () => {
   // @ts-ignore
   window.sdk?.showPlacement({ email: 'storecustomer@gmail.com' });
 };

 return (
   <div style={styles.container}>
     <div style={styles.formWrapper}>
       <h1 style={styles.heading}>Pier39 SDK Demo</h1>
       <div id="pier39-placeholder"></div>
       <button onClick={handleShowOffers} style={styles.button}>
         Show Offers
       </button>
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
   backgroundColor: "#f4f4f4",
 },
 formWrapper: {
   backgroundColor: "white",
   padding: "30px",
   borderRadius: "10px",
   boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
   textAlign: "center",
 },
 heading: {
   fontSize: "2rem",
   marginBottom: "20px",
 },
 button: {
   padding: "10px 20px",
   fontSize: "1.2rem",
   backgroundColor: "#007BFF",
   color: "white",
   border: "none",
   borderRadius: "5px",
   cursor: "pointer",
 }
};

export default App;