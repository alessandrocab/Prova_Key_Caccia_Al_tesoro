'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SecretReveal() {
  const [input, setInput] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCheck = () => {
    if (input.trim() === 'segreto123') {
      setRevealed(true);
    } else {
      alert('Combinazione errata. Riprova.');
    }
  };

  return (
    <div
      className="relative min-h-screen w-full bg-center bg-no-repeat bg-cover flex items-center justify-center p-4"
      style={{
        backgroundImage: revealed
          ? "url('/images/revealed.jpg')"
          : "url('/images/background.jpg')",
        backgroundSize: 'cover',
      }}
    >
      <AnimatePresence>
        {!revealed && (
          <motion.div
            key="input-form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white bg-opacity-80 rounded-2xl p-6 shadow-xl w-full max-w-md text-center flex flex-col items-center justify-center"
          >
            <h1 className="text-xl sm:text-2xl font-bold mb-4 font-magic">
              Inserisci la combinazione segreta per rivelare il luogo magico
            </h1>
            <div className="relative mb-4 w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Combinazione"
                className="pr-10 text-base w-full border rounded px-3 py-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"
                aria-label="Mostra password"
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>
            <button
              onClick={handleCheck}
              className="w-full text-base py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Svela il segreto
            </button>
          </motion.div>
        )}

        {revealed && (
          <motion.div
            key="revealed-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center p-4"
          >
            <p className="text-2xl sm:text-3xl font-semibold mb-6 font-magic">
              Hai svelato il luogo nascosto! 🧙‍♂️
            </p>
            <button
              onClick={() => {
                setRevealed(false);
                setInput('');
              }}
              className="text-base px-4 py-2 bg-white text-black rounded-lg"
            >
              ⬅ Torna indietro
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
