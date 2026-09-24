"use client";

import { useRef } from "react";
import Container from "./Container";
import sheikhRahman from "../assets/1788687370_01.png";
import drArch from "../assets/1788687354_02.png";
import samia from "../assets/1788687336_03.png";
import rajib from "../assets/1788687305_04.png";
import ummaye from "../assets/1788687319_05.png";

const people = [
  {
    name: "Sheikh Raihan Ahmed",
    image: sheikhRahman,
    positions: [
      { role: "Managing Director", org: "NRB Solutions Limited" },
      { role: "Managing Director", org: "Link3 Technologies Limited" },
    ],
  },
  {
    name: "Dr. Arch. Nurur Rahman Khan",
    image: drArch,
    positions: [
      { role: "Chairman", org: "NRB Solutions Limited" },
      { role: "Partner", org: "Tanya Karim & N R Khan Associates" },
      {
        role: "Dean",
        org: "Faculty of Science, Engineering & Technology, Bangladesh University",
      },
    ],
  },
  {
    name: "Samia Ruman Ahmed",
    image: samia,
    positions: [{ role: "Vice Chairman", org: "NRB Solutions Limited" }],
  },
  {
    name: "Syed Rajib Hossain",
    image: rajib,
    positions: [{ role: "Founder & CEO", org: "NRB Solutions Limited" }],
  },
  {
    name: "Ummay Habiba Putul",
    image: ummaye,
    positions: [{ role: "Director", org: "NRB Solutions Limited" }],
  },
];

const CARD_WIDTH = 280;
const IMG_HEIGHT = 300;
const GAP = 15;

const ArrowIcon = ({ direction }) => (
  <svg
    width="26"
    height="26"
    className="h-5 w-5 lg:h-[26px] lg:w-[26px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {direction === "left" ? (
      <>
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </>
    ) : (
      <>
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </>
    )}
  </svg>
);

const Peoples = () => {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    // step = one card + gap, measured live so it works on every screen size
    const first = track.querySelector("[data-card]");
    const second = first?.nextElementSibling;
    const step =
      first && second ? second.offsetLeft - first.offsetLeft : CARD_WIDTH + GAP;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="py-10 [container-type:inline-size]">
      <Container>
        {/* Heading */}
        <h2 className="text-[26px] md:text-5xl font-bold text-gray-900">
          The People in the Driving Seat
        </h2>
        <p className="mt-4 text-[15px] md:text-[24px] font-medium text-[#6d6d6d]">
          Garibook is led by a team of dedicated leaders, shaping every journey
          with honesty and heart.
        </p>

        {/* Arrows + track */}
        <div className="mt-6 lg:mt-10 flex flex-col lg:flex-row gap-4 lg:gap-0">
          {/* Arrows: right side on mobile, left column on lg */}
          <div
            className="flex items-center justify-end gap-2 lg:min-w-0 lg:flex-1 lg:items-start lg:gap-4 lg:pr-6 lg:pt-[var(--arrow-top)]"
            style={{ "--arrow-top": `${IMG_HEIGHT - 100}px` }}
          >
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition hover:bg-black hover:text-white hover:border-black active:scale-95"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 transition hover:bg-black hover:text-white hover:border-black active:bg-black active:text-white active:border-black active:scale-95"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>

          {/* Track: no scrollbar, arrow-only scroll */}
          <div
            ref={trackRef}
            className="min-w-0 overflow-x-hidden lg:mr-[calc(50%-50cqw)] lg:w-[var(--track-w)]"
            style={{
              "--track-w": `${CARD_WIDTH * 4 + GAP * 3}px`,
              "--card-w": `${CARD_WIDTH}px`,
              "--img-h": `${IMG_HEIGHT}px`,
            }}
          >
            <div className="flex gap-2.5 lg:gap-[15px]">
              {people.map((p) => (
                <div
                  key={p.name}
                  data-card
                  className="group w-[calc((100%-10px)/2)] shrink-0 cursor-pointer lg:w-[var(--card-w)]"
                >
                  {/* Image slot: mobile = ratio, lg = fixed height. Hover → zoom */}
                  <div className="aspect-[9/10] w-full overflow-hidden rounded-2xl lg:aspect-auto lg:h-[var(--img-h)]">
                    <div className="h-full w-full bg-gray-200 transition-transform duration-500 ease-out group-hover:scale-110">
                      {p.image && (
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <h3 className="mt-3 text-[15px] font-bold text-gray-900 lg:mt-[15px] lg:text-[21px] lg:leading-[1.25]">
                    {p.name}
                  </h3>
                  <div className="mt-1 lg:mt-2">
                    {p.positions.map((pos) => (
                      <div key={pos.role + pos.org} className="mb-0.5 lg:mb-0">
                        <p className="text-[13px] font-bold leading-5 text-gray-950 lg:text-lg lg:leading-6">
                          {pos.role}
                        </p>
                        <p className="text-[15px] font-medium leading-5 text-[#9D9D9D] lg:text-lg lg:leading-6">
                          {pos.org}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Peoples;
