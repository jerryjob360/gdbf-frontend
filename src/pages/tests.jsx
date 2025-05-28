import React, { useEffect, useState } from 'react';
import '../styles/Tests.css'

function Tests() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const parentDiv = document.querySelector('.parent-div');
      if (parentDiv) {
        const scrollTop = parentDiv.scrollTop || document.documentElement.scrollTop;
        const maxScroll = parentDiv.scrollHeight - parentDiv.clientHeight;
        const progress = (scrollTop / maxScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="parent-div">
      <p className="fading-text" style={{ background: `linear-gradient(to bottom, transparent 0%, white ${scrollProgress}%)` }}>
        Your text here
      </p>
    </div>
  );
}

export default Tests;
