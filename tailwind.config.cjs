/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {

    fontFamily:{
      'inter':['inter', 'sans-serif']
    },
    
    extend: {
      colors: {
        "product-purple":"#8284FA",
        "product-purple-dark":"#5E60CE",
        "product-blue":"#4EA8DE",
        "product-blue-dark":"#1E6F9F",

        "base-gray-100":"#F2F2F2",
        "base-gray-200":"#D9D9D9",
        "base-gray-300":"#808080",
        "base-gray-400":"#333333",
        "base-gray-500":"#262626",
        "base-gray-600":"#1A1A1A",
        "base-gray-700":"#0D0D0D",

        "base-danger":"#E25858",
      }
    },
  },
  plugins: [],
}
