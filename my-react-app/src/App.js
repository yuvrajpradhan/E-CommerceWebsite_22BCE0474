import React, { useEffect } from 'react';
import './orderPlaced.css'; // Import CSS file for OrderPlaced component
import greenTick from './logo1.svg'; // Import SVG file

const OrderPlaced = () => {
  useEffect(() => {
    const loadHeader = async () => {
      const response = await fetch("header.html");
      const html = await response.text();
      document.getElementById('header').innerHTML = html;
    }

    const loadFooter = async () => {
      const response = await fetch("footer.html");
      const html = await response.text();
      document.getElementById('footer').innerHTML = html;
    }

    loadHeader();
    loadFooter();
  }, []);

  return (
    <div>
      {/* Header HTML */}
      <header id="header"></header>

      {/* Green tick SVG */}
      <img src={greenTick} alt="Green Tick" />

      {/* Main content */}
      <div id="orderContainer">
        <div id="check"><i className="fas fa-check-circle"></i></div>
        <div id="aboutCheck">
          <h1>Order Placed Successfully!</h1>
          <p>We've sent you an email with the Order details.</p>
        </div>
      </div>

      {/* Footer HTML */}
      <footer id="footer"></footer>
    </div>
  );
}

export default OrderPlaced;
