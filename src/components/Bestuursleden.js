import React, { useState, useEffect, useRef } from 'react';
import { TweenLite } from 'gsap/all';

function Bestuursleden({ title, image, functie, functie2 }) {
  const [showDelayedContent, setShowDelayedContent] = useState(false);
  const [showDelayedText, setShowDelayedText] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    let delayTimeout;
    if (showDelayedContent) {
      delayTimeout = setTimeout(() => {
        TweenLite.fromTo(
          textRef.current,
          { y: -1000, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
        );
        setShowDelayedText(true);
      }, 500);
    } else {
      TweenLite.fromTo(
        textRef.current,
        { y: 0, opacity: 1 },
        { y: -1000, opacity: 0, duration: 1, ease: 'power2.out' }
      );
      setShowDelayedText(false);
    }
    return () => {
      clearTimeout(delayTimeout);
    };
  }, [showDelayedContent]);

  const handleMouseEnter = () => {
    setShowDelayedContent(true);
  };

  const handleMouseLeave = () => {
    setShowDelayedContent(false);
  };

  return (
    <div>
      <div>
        <div
          className="group relative overflow-hidden rounded-xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`group-hover:bg-black/60 w-full h-full absolute z-10 transition-all duration-300 rounded-xl ${showDelayedContent ? 'delay-200' : ''
              }`}
          ></div>
          <div className="group-hover:scale-105 transition-all duration-200">
            <img className="grayscale" src={image} alt="Johan Hemelsoet" />
          </div>
          <div className="absolute -bottom-full group-hover:bottom-1/2 transition-all duration-300 z-20 text-2xl text-center font-bold text-sky-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-gradient">{title}</span>
            {showDelayedText && (
              <div

              >

              </div>
            )}

          </div>

          <div className="absolute -bottom-full group-hover:bottom-1/2 transition-all duration-500 z-20 text-2xl text-center font-bold text-sky-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              ref={textRef}
              className={`absolute transition-all duration-300 z-30 left-1/2 -translate-x-1/2 text-center 
                }`}
            >
              <div className={` w-full text-xl text-orange-500 font-bold whitespace-nowrap`}>{functie}</div>
              {functie2 && (
                <div className={` w-full text-xl text-orange-500 font-bold whitespace-nowrap`}>{functie2}</div>
              )}
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}

export default Bestuursleden;
