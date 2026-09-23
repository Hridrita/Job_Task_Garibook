import bannerImage from "../assets/about_us_banner.jpg";

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-6 md:py-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col items-start">
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8 md:mb-30 text-left">
          Meaningful journeys for everyone
        </h1>

        {/* Banner Image Container */}
        <div className="w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
          <img
            src={bannerImage}
            alt="Meaningful journeys for everyone - Garibook"
            className="w-full h-auto max-h-[550px] object-cover object-center"
          />
        </div>

        {/* Story Section */}
        <div className="w-full mt-10 md:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8 text-left">
            The Story of Every Ride
          </h2>

          
          <div className="space-y-4 text-[#6d6d6d] text-[18px] md:text-[22px] font-medium leading-[28px] md:leading-[32px]">
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

      </div>
    </section>
  );
};

export default AboutUs;