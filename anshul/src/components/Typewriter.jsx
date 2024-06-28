import React, { useEffect, useState } from 'react';

const Typewriter = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const fullWord = words[wordIndex];
      if (isDeleting) {
        setCurrentWord(fullWord.substring(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
      } else {
        setCurrentWord(fullWord.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
      }

      if (!isDeleting && letterIndex === fullWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && letterIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 200;
    const timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, wordIndex, words]);

  return <span className="typewriter">{currentWord}</span>;
};

export default Typewriter;
