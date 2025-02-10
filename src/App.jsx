import { Routes, Route } from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;