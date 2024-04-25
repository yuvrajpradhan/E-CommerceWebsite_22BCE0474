import React, { useEffect } from 'react';
import './orderPlaced.css'; // Import CSS files
import './header.css';
import './footer.css';

const Header = () => {
  useEffect(() => {
    const loadHeader = async () => {
      const response = await fetch("header.html");
      const html = await response.text();
      document.getElementById('header').innerHTML = html;
    }
    loadHeader();
  }, []);

  return <div id="header"></div>;
}

const Footer = () => {
  useEffect(() => {
    const loadFooter = async () => {
      const response = await fetch("footer.html");
      const html = await response.text();
      document.getElementById('footer').innerHTML = html;
    }
    loadFooter();
  }, []);

  return <div id="footer"></div>;
}

const OrderPlaced = () => {
  return (
    <div>
      <Header />
      <div id="orderContainer">
        <div id="check"><i className="fas fa-check-circle"></i></div>
        <div id="aboutCheck">
          <h1>Order Placed Successfully!</h1>
          <p>We've sent you an email with the Order details.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OrderPlaced;
