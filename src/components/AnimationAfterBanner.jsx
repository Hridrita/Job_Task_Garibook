import buildingFrame from "../assets/buildingFrame.png";
import carGIF from "../assets/Sedan_GiF.9efd9ae4.gif";
import Container from "./Container";

const AnimationAfterBanner = () => {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 bg-linear-to-l from-[#0e53ff] to-[#0038c4] overflow-hidden mt-12 md:mt-20">
      {/* Heading */}
      <Container className="pt-24 md:pt-36 pb-32 md:pb-48 ">
        <h1 className="text-white font-extrabold text-5xl md:text-6xl leading-tight max-w-3xl">
          Driven Countless Miles Earned Endless Trust
        </h1>
      </Container>

      {/* Bottom strip: marquee buildings (bg-repeat tile) + static car */}
      <div className="relative w-full h-16 md:h-20">
        <div
          className="absolute bottom-0 left-0 w-full h-full animate-marquee-bg"
          style={{
            backgroundImage: `url(${buildingFrame})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 70px", // <-- fixed choto height, zoom hobe na
            backgroundPosition: "0 bottom",
          }}
        />

        <div className="absolute -bottom-2 md:-bottom-3 left-4 md:left-10 z-10">
  <img
    src={carGIF}
    alt="Car"
    className="w-32 md:w-44 h-auto object-contain"
  />
</div>
      </div>
    </div>
  );
};

export default AnimationAfterBanner;