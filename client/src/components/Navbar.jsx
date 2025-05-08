import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">RealmRiches Escrow</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/dashboard" className="hover:text-gray-300">Dashboard</a>
        <a href="/admin" className="hover:text-gray-300">Admin</a>
      </div>
    </nav>
  );
}
