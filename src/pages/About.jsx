/* eslint-disable no-unused-vars */
import React from 'react';
import './About.css';

const aboutContent = [
  "Welcome to our blogs and articles website! We are a passionate team of writers, researchers, and enthusiasts who love sharing knowledge and insights with our readers.",
  "Our mission is to provide high-quality content covering a wide range of topics, including technology, science, lifestyle, and more. We strive to deliver informative and engaging articles that cater to various interests and help our readers stay informed and inspired.",
  "Whether you are looking for the latest tech news, insightful analysis, practical tips, or thought-provoking discussions, our platform has you covered. We believe in the power of knowledge and its ability to positively impact lives.",
  "Thank you for being a part of our community. We appreciate your support and look forward to providing you with valuable content for years to come."
];

function About() {
  return (
    <div className="about-container">
      <h1 style={{ textDecoration: "underline" }}>About Us</h1>
      {aboutContent.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default About;
