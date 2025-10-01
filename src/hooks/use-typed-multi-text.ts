import { useCallback, useEffect, useState } from "react";

function initNewText(length: number) {
  const newText = [];
  for (let i = 0; i < length; i++) {
    newText.push("");
  }
  return newText;
}

export default function useTypedMultiText(text: string[], delay: number = 10) {
  const [currentText, setCurrentText] = useState<string[]>(
    initNewText(text.length),
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const len = text.reduce((t, str) => t + str.length, 0);
    if (currentIndex <= len) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => {
          let lenSoFar = 0;
          const newText: string[] = [];
          for (let idx = 0; idx < text.length; idx++) {
            const str = prevText[idx];
            if (
              lenSoFar + str.length == currentIndex &&
              lenSoFar + text[idx].length > currentIndex
            ) {
              newText.push(str + text[idx][currentIndex - lenSoFar]);
            } else {
              newText.push(str);
            }
            lenSoFar += text[idx].length;
          }

          return newText;
        });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentText(initNewText(text.length));
  }, [text]);

  const showAll = useCallback(() => {
    setCurrentText(text);
    setCurrentIndex(text.reduce((t, str) => t + str.length, 0) + 1);
  }, [setCurrentText, setCurrentIndex, text]);

  return { currentText, currentIndex, showAll };
}
