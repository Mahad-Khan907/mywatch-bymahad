import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form action="/submit-form" method="POST" className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
