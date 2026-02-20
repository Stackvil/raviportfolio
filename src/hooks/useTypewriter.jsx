import { useState, useEffect } from 'react';

export const useTypewriter = (texts, speed = 100, pause = 2000) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (index >= texts.length) {
            setIndex(0);
            return;
        }

        const currentText = texts[index];

        if (subIndex === currentText.length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), pause);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
            setDisplayedText(currentText.substring(0, subIndex));
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, texts, speed, pause]);

    return displayedText;
};
