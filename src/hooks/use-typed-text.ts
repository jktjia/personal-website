import { useCallback, useEffect, useState } from "react";

export default function useTypedText(text: string, delay: number = 10) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) =>
          prevText.length == text.length
            ? prevText
            : prevText + text[currentIndex],
        );
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentText("");
  }, [text]);

  const showAll = useCallback(() => {
    setCurrentText(text);
    setCurrentIndex(text.length + 1);
  }, [setCurrentText, setCurrentIndex, text]);

  return { currentText, currentIndex, showAll };
}
