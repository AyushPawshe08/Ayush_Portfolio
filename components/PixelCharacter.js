"use client";

import { useEffect } from "react";

// Sprite positions for pixel-character-sprite.png
// Based on the numbered sections: Idle(1), Alert(2), Walk N(3), NE(4), E(5), SE(6), S(7), SW(8), W(9), NW(10), Sleep(11), Scratch(12), Sit(13), Surprised(14)
const spriteSets = {
  idle: [[0, 0], [1, 0]],
  alert: [[2, 0]],
  N: [[0, 1], [1, 1]],
  NE: [[2, 1], [3, 1]],
  E: [[0, 2], [1, 2]],
  SE: [[2, 2], [3, 2]],
  S: [[0, 3], [1, 3]],
  SW: [[2, 3], [3, 3]],
  W: [[0, 4], [1, 4]],
  NW: [[2, 4], [3, 4]],
  sleeping: [[0, 5], [1, 5], [2, 5], [3, 5]],
  scratchSelf: [[0, 6], [1, 6], [2, 6], [3, 6]],
  sit: [[0, 7], [1, 7]],
  surprised: [[2, 7]],
};

export default function PixelCharacter() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (reducedMotion || touchDevice) return;

    if (window.__pixelCharacterMounted) return;
    window.__pixelCharacterMounted = true;

    const charEl = document.createElement("div");
    let persistPosition = true;
    let persistHandler = null;

    let charPosX = 32;
    let charPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation = null;
    let idleAnimationFrame = 0;

    const charSpeed = 10;

    // Adjust sprite size based on your sprite sheet (e.g., 32x32 pixels)
    const spriteSize = 32;

    function setSprite(name, frame) {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      charEl.style.backgroundPosition = `-${sprite[0] * spriteSize}px -${sprite[1] * spriteSize}px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;

      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation == null) {
        let availableIdleAnimations = ["sleeping", "scratchSelf", "sit", "surprised"];
        idleAnimation = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
      }

      switch (idleAnimation) {
        case "sleeping":
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 15) resetIdleAnimation();
          break;
        case "scratchSelf":
          setSprite("scratchSelf", idleAnimationFrame);
          if (idleAnimationFrame > 15) resetIdleAnimation();
          break;
        case "sit":
          setSprite("sit", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 7) resetIdleAnimation();
          break;
        case "surprised":
          setSprite("surprised", 0);
          if (idleAnimationFrame > 4) resetIdleAnimation();
          break;
        default:
          setSprite("idle", Math.floor(idleAnimationFrame / 10));
          return;
      }

      idleAnimationFrame += 1;
    }

    function frame() {
      frameCount += 1;

      const diffX = charPosX - mousePosX;
      const diffY = charPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < charSpeed || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = "";
      direction += diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";

      const spriteKey = direction || "idle";
      setSprite(spriteKey, frameCount);

      charPosX -= (diffX / distance) * charSpeed;
      charPosY -= (diffY / distance) * charSpeed;

      charPosX = Math.min(Math.max(spriteSize / 2, charPosX), window.innerWidth - spriteSize / 2);
      charPosY = Math.min(Math.max(spriteSize / 2, charPosY), window.innerHeight - spriteSize / 2);

      charEl.style.left = `${charPosX - spriteSize / 2}px`;
      charEl.style.top = `${charPosY - spriteSize / 2}px`;
    }

    function init() {
      if (persistPosition) {
        try {
          const storedChar = JSON.parse(window.localStorage.getItem("pixelCharacterSprite") || "null");
          if (storedChar !== null) {
            charPosX = storedChar.charPosX;
            charPosY = storedChar.charPosY;
            mousePosX = storedChar.mousePosX;
            mousePosY = storedChar.mousePosY;
            frameCount = storedChar.frameCount;
            idleTime = storedChar.idleTime;
            idleAnimation = storedChar.idleAnimation;
            idleAnimationFrame = storedChar.idleAnimationFrame;
            charEl.style.backgroundPosition = storedChar.bgPos;
          }
        } catch {
          // Ignore localStorage restore failures.
        }
      }

      charEl.id = "pixelCharacter";
      charEl.setAttribute("aria-hidden", "true");
      charEl.style.width = `${spriteSize}px`;
      charEl.style.height = `${spriteSize}px`;
      charEl.style.position = "fixed";
      charEl.style.pointerEvents = "none";
      charEl.style.imageRendering = "pixelated";
      charEl.style.left = `${charPosX - spriteSize / 2}px`;
      charEl.style.top = `${charPosY - spriteSize / 2}px`;
      charEl.style.zIndex = "2147483647";
      charEl.style.backgroundImage = "url(/pixel-character-sprite.png)";
      charEl.style.backgroundRepeat = "no-repeat";
      charEl.style.backgroundPosition = "0px 0px";
      charEl.style.backgroundSize = "128px 256px";

      document.body.appendChild(charEl);

      document.addEventListener("mousemove", (event) => {
        mousePosX = event.clientX;
        mousePosY = event.clientY;
      });

      if (persistPosition) {
        persistHandler = () => {
          try {
            window.localStorage.setItem(
              "pixelCharacterSprite",
              JSON.stringify({
                charPosX,
                charPosY,
                mousePosX,
                mousePosY,
                frameCount,
                idleTime,
                idleAnimation,
                idleAnimationFrame,
                bgPos: charEl.style.backgroundPosition,
              })
            );
          } catch {
            // Ignore storage write failures.
          }
        };

        window.addEventListener("beforeunload", persistHandler);
      }

      window.requestAnimationFrame(onAnimationFrame);
    }

    let lastFrameTimestamp = null;
    let animationFrameId = null;

    function onAnimationFrame(timestamp) {
      if (!charEl.isConnected) return;

      if (!lastFrameTimestamp) {
        lastFrameTimestamp = timestamp;
      }

      if (timestamp - lastFrameTimestamp > 100) {
        lastFrameTimestamp = timestamp;
        frame();
      }

      animationFrameId = window.requestAnimationFrame(onAnimationFrame);
    }

    init();

    return () => {
      window.__pixelCharacterMounted = false;
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      if (persistHandler) {
        window.removeEventListener("beforeunload", persistHandler);
      }
      if (charEl.isConnected) {
        charEl.remove();
      }
    };
  }, []);

  return null;
}
