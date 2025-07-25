import Lottie from "lottie-react";
import CatHead from "../assets/lottie/CatHead.json";

const MobileLottie = () => {
  return (
    <div className="block md:hidden w-[150px] h-[150px] mx-auto mb-4">
      <Lottie
        animationData={CatHead}
        loop
        autoplay
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
    </div>
  );
};

export default MobileLottie;