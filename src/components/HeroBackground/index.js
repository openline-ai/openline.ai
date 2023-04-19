import React, { useEffect, useRef } from "react";
import Hero from '@site/static/img/hero.png';

const SPEED = 0.01;

const HeroBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");

      let time = 0;

      const loop = function () {
        for (let x = 0; x <= 32; x++) {
          for (let y = 0; y <= 32; y++) {
            color(ctx, {
              x,
              y,
              r: R(x, y, time),
              g: G(x, y, time),
              b: B(x, y, time),
            });
          }
        }

        time = time + SPEED;

        window.requestAnimationFrame(loop);
      };

      loop();
    }
  }, []);

  return (
    <>
      <div className="hero__overlay">
        <canvas ref={canvasRef} className="hero__background" width='32px' height='32px'>
        </canvas>
        <img src={Hero} alt="Hero" className="hero__image" />
      </div>
    </>
  );
};

export default HeroBackground;

const C1 = 191;
const C2 = 64;

export const color = function (context, { x, y, r, g, b }) {
  context.fillStyle = `rgb(${r}, ${g}, ${b})`;
  context.fillRect(x, y, 1, 1);
};

export const R = function (x, y, time) {
  return Math.floor(C1 + C2 * Math.cos((x * x - y * y) / 300 + time));
};

export const G = function (x, y, time) {
  return Math.floor(
    C1 +
    C2 *
    Math.sin(
      (x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300
    )
  );
};

export const B = function (x, y, time) {
  return Math.floor(
    C1 +
    C2 *
    Math.sin(
      5 * Math.sin(time / 9) +
      ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
    )
  );
};

/* 
CSS

.hero__overlay {
  position: relative;
  isolation: isolate;
  display: flex;
  justify-content: center;
  margin: 0;
}

.hero__background {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero__image {
  opacity: 1;
  width: 75%;
  height: 75%;
  margin: 10%;
  filter: drop-shadow(0 0 0.5rem);
}

canvas {
  width: 100%;
  height: 100%;
} 

*/