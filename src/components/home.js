import React from 'react';
import './pages.css';

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <h1>NTRADX</h1>
        <nav>
          <ul className="ul">
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id='intro'>
          <h2>Introduction</h2>
          <p>Welcome to our website! We are glad to have you here.</p>
        </section>
        <section>
          <h2>Features</h2>
          <p>Explore the various features we offer to enhance your experience.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
