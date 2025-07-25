import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import Cat from "../assets/lottie/Cat.json";
import Welcome from "../assets/lottie/Welcome.json";
import CatHead from "../assets/lottie/CatHead.json";

const animations = [
  {
    data: Cat,
    duration: 650,
    speed: 0.4,
    position: "items-end", 
  },
  {
    data: Welcome,
    duration: 3300,
    speed: 0.7,
    position: "items-center",
  },
  {
    data: CatHead,
    duration: 2500,
    speed: 1,
    position: "items-end",
  },
];

const HeroLottie = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const lottieRef = useRef();

  useEffect(() => {
    const fadeOutDuration = 500;

    const timeout = setTimeout(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev < animations.length - 1 ? prev + 1 : prev));
        setFade(true);
      }, fadeOutDuration);
    }, animations[index].duration);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="w-[350px] h-[350px] relative flex overflow-hidden bg-white ">
      <div
        className={`absolute inset-0 w-full overflow-hidden flex transition-opacity duration-500
          ${fade ? "opacity-100" : "opacity-0"}
          ${animations[index].position}`}
      >
        <div className="relative -mb-[2px]" >
        <Lottie
          lottieRef={lottieRef}
          animationData={animations[index].data}
          loop={true}
          autoplay={true}
          speed={animations[index].speed}
          key={index} // force re-render on index change
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
            clearCanvas: true,
          }}
          className="w-full h-auto"
        />
        </div>
      </div>
    </div>
  );
};

export default HeroLottie;
