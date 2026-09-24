import Container from "./Container";
import whyChooseImg from "../assets/why_choose_garibook_banner.jpg";
import quickEasyImg from "../assets/quick_easy_booking.svg";
import trustedDriverImg from "../assets/verified_trusted.svg";
import supportImg from "../assets/24_support.svg";

const WhyChooseGaribook = () => {
  const features = [
    {
      id: 1,
      icon: <img src={quickEasyImg} alt="" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      title: "Quick & Easy\nBooking",
      description: "Book a ride in seconds using our simple app.",
    },
    {
      id: 2,
      icon: <img src={trustedDriverImg} alt="" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      title: "Verified & Trusted Drivers",
      description: "All drivers are checked and verified for your safety.",
    },
    {
      id: 3,
      icon: <img src={supportImg} alt="" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />,
      title: "24/7 Support",
      description: "Our dedicated support team is always available.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-14 sm:py-16 md:py-20">
      <Container>
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12 md:mb-14">
          Why Choose Garibook
        </h2>

        {/* Banner Image Area */}
        <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl">
          {/* Replace this div with your image */}
          <div className="w-full aspect-[16/6] bg-gray-800">
            <img
              src={whyChooseImg}
              alt="Why Choose Garibook"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-[1.1fr_1.45fr_1fr] gap-x-4 gap-y-8 md:gap-x-10 mt-10 md:mt-12 md:pl-[17%]">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col items-start ${
                index === 2 ? "col-span-2 md:col-span-1 mt-2 md:mt-0" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full bg-[#0e53ff] flex items-center justify-center text-white text-xl sm:text-2xl mb-3 md:mb-4">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-base md:text-3xl font-bold leading-tight mb-1 whitespace-pre-line">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#a7a7a7] text-[10px] sm:text-sm md:text-xl font-medium leading-tight md:leading-7 max-w-[160px] sm:max-w-xs md:max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseGaribook;