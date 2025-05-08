import React from 'react';

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Secure Escrow Services</h2>
      <p className="mb-4">Protect your transactions with RealmRiches. We act as a trusted middleman for safe deals.</p>
      <div className="flex justify-center space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </div>
  );
}
