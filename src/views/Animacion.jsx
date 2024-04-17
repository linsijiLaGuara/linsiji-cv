import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const Animacion = () => {
  const [index, setIndex] = useState(0);
  const words = [
    "I'm a Developer 💻",
    "I'm a travel YouTuber 🎥",
    "I'm a fan of Shakira 🎶",
  ];

  const transitions = useTransition(words[index], {
    key: words[index],
    from: { opacity: 0, transform: "translateY(0px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 220, friction: 20, duration: 5000 },
    onRest: () => setIndex((index + 1) % words.length),
  });
  return (
    <div>
      {transitions((props, item) => (
        <animated.div style={props}>{item}</animated.div>
      ))}
    </div>
  );
};

export default Animacion;
