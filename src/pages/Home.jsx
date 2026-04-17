import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to Our Platform</h1>
      <p className="text-xl text-gray-600 mb-8">Building the future, one component at a time.</p>
      <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg">
        Get Started
      </button>
    </div>
  );
};

export default Home;
