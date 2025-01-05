import React, { useState, useEffect } from 'react';
import './PayoutCalculatorNew.css';

const PayoutCalculator = () => {
  // Initialize state with error handling
  const [articles, setArticles] = useState([{ id: 1, count: 0, rate: 0 }]);
  const [totalPayout, setTotalPayout] = useState(0);
  const [error, setError] = useState('');

  // Load saved articles with error handling
  useEffect(() => {
    try {
      const storedArticles = JSON.parse(localStorage.getItem('articles'));
      if (storedArticles) {
        setArticles(storedArticles);
      }
    } catch (err) {
      setError('Failed to load saved data');
      console.error(err);
    }
  }, []);

  // Update count with validation
  const handleCountChange = (id, value) => {
    const count = Math.max(0, parseInt(value) || 0);
    const updatedArticles = articles.map(article => 
      article.id === id ? { ...article, count } : article
    );
    setArticles(updatedArticles);
    updateStorage(updatedArticles);
    calculateTotal(updatedArticles);
  };

  // Update rate with validation
  const handleRateChange = (id, value) => {
    const rate = Math.max(0, parseFloat(value) || 0);
    const updatedArticles = articles.map(article => 
      article.id === id ? { ...article, rate } : article
    );
    setArticles(updatedArticles);
    updateStorage(updatedArticles);
    calculateTotal(updatedArticles);
  };

  // Calculate total payout
  const calculateTotal = (articles) => {
    const total = articles.reduce((acc, article) => {
      return acc + (article.count * article.rate);
    }, 0);
    setTotalPayout(total);
  };

  // Update localStorage with error handling
  const updateStorage = (articles) => {
    try {
      localStorage.setItem('articles', JSON.stringify(articles));
    } catch (err) {
      setError('Failed to save data');
      console.error(err);
    }
  };

  // Show total payout
  const handlePopup = () => {
    alert(`Total Payout: $${totalPayout.toFixed(2)}`);
  };

  return (
    <div className="payout-calculator">
      {error && <div className="error-message">{error}</div>}
      <h1>Payout Calculator</h1>
      {articles.map(article => (
        <div key={article.id} className="input-group">
          <input
            type="number"
            placeholder="Number of Articles"
            value={article.count}
            onChange={(e) => handleCountChange(article.id, e.target.value)}
          />
          <input
            type="number"
            placeholder="Payout Rate"
            value={article.rate}
            onChange={(e) => handleRateChange(article.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={() => calculateTotal(articles)}>Calculate Total Payout</button>
      <button onClick={handlePopup}>Show Total Payout</button>
    </div>
  );
};

export default PayoutCalculator;
