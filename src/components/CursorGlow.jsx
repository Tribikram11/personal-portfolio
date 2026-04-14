import { useState, useEffect } from 'react';

function CursorGlow({ isDarkMode }) {
    const [pos, setPos] = useState({ x: -500, y: -500 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!isDarkMode) return null;

    return (
        <div
            className="cursor-glow"
            style={{ left: pos.x, top: pos.y }}
        />
    );
}

export default CursorGlow;
