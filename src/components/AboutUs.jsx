import bannerImage from "../assets/about_us_banner.jpg";
import freedom from "../assets/stronger_together.svg";
import noCommission from "../assets/reliability_you.svg";
import safety from "../assets/safety_first.svg";
import AnimationAfterBanner from "./AnimationAfterBanner";
import Container from "./Container";
import WhyChooseGaribook from "./WhyChooseGaribook";
import Peoples from "./Peoples";

const AboutUs = () => {
  const cardsData = [
    {
      id: 1,
      title: "Safe Travel",
      description: "Safety comes first with trip insurance.",
      icon: (
        <img
          src={safety}
          alt="Travel Safe"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 group-hover:brightness-0 group-hover:invert transition-all duration-500"
        />
      ),
    },
    {
      id: 2,
      title: "No Commission",
      description: "Drivers keep full earnings, passengers pay no extras.",
      icon: (
        <img
          src={noCommission}
          alt="No Commission"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 group-hover:brightness-0 group-hover:invert transition-all duration-500"
        />
      ),
    },
    {
      id: 3,
      title: "Freedom",
      description: "Choose your fare, vehicle and driver.",
      icon: (
        <img
          src={freedom}
          alt="Freedom"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 group-hover:brightness-0 group-hover:invert transition-all duration-500"
        />
      ),
    },
  ];

  return (
    <section className="w-full bg-white pt-6 md:pt-20 overflow-x-hidden">
      <Container className="flex flex-col items-start">
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8 md:mb-30 text-left">
          Meaningful journeys for everyone
        </h1>

        {/* Banner Image Container */}
        <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
          <img
            src={bannerImage}
            alt="Meaningful journeys for everyone - Garibook"
            className="w-full h-auto max-h-137.5 object-cover object-center"
          />
        </div>

        {/* Story Section */}
        <div className="w-full mt-10 md:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 text-left">
            The Story of Every Ride
          </h2>

          <div className="space-y-4 text-[#6d6d6d] text-[18px] md:text-[22px] font-medium leading-7 md:leading-8">
            <p>
              Every journey begins with a reason, a visit home, a new opportunity, a long awaited break or a simple need to be somewhere on time. Garibook was created to honor those reasons and make every journey feel easier, safer and more meaningful.
            </p>

            <p>
              What started as a small team with big ideas, now has grown into a platform designed around people. With our innovative app, booking a ride is no longer complicated. It is simple, transparent and built on choice. Our unique bidding system puts you in control, allowing you to select a ride that fits your needs, comfort and budget without compromising on safety or reliability.
            </p>

            <p>
              Garibook is more than technology. It is a growing community of passengers and drivers connected by trust. We believe drivers are not just service providers, they are the heart of every journey. That is why drivers do not have to pay any commission here. Their well being, dignity and growth matter deeply to us. Because when drivers feel valued, journeys become better for everyone.
            </p>

            <p>
              Garibook is more than just a platform, it's a community of passengers and drivers. We focus on making travel better for everyone. Our drivers are at the heart of what we do, they're not just driving cars; they're driving our mission forward.
            </p>
          </div>
        </div>
      </Container>

      <AnimationAfterBanner />

      {/* What Sets Garibook Apart Section */}
      <Container className="py-12 sm:py-16 md:py-15">
        <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-14 text-left">
          What Sets Garibook Apart
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-5 w-full">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="group relative h-full w-full inline-flex flex-col items-start justify-center gap-4 sm:gap-5 min-h-48 sm:min-h-60 md:min-h-84 p-5 sm:p-7 md:p-8 cursor-pointer rounded-2xl sm:rounded-3xl bg-[#f1f6ff] hover:bg-[#0e53ff] transition-all duration-500 shadow-sm hover:shadow-xl"

            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                {card.icon}
              </div>

              {/* Text Area */}
              <div>
                <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 text-gray-900 group-hover:text-white transition-colors duration-500">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-lg text-[#9d9d9d] font-medium group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <WhyChooseGaribook></WhyChooseGaribook>
      <Peoples></Peoples>
    </section>
  );
};

export default AboutUs;