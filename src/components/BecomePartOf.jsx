"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./Container";

import phoneHand from "../assets/app-with-logo.0f885eea.png";
import driver from "../assets/no_commission_app_screen.495bd35a.png";
// import phoneHand2 from "../assets/phone-hand-2.png";

const BLUE = "#0f57ff";
const YELLOW = "#efc40c";
const BTN_YELLOW = "#ffd500";
const INK = "#121212";

// image: put your imported img here (empty → nothing shows)
const slides = [
  {
    title: (
      <>
        Download
        <br />
        Garibook Mobile App
      </>
    ),
    desc: "Download our Customer, Smart Driver and Enterprise App",
    button: "Download App",
    href: "#",
    image: phoneHand,
    bg: BLUE,
    titleColor: "#ffffff",
    descColor: "#ffffff",
    btnBg: BTN_YELLOW,
    btnText: INK,
    descMax: "max-w-[600px]",
  },
  {
    title: "Want to Drive?",
    desc: "Partner with us to earn flexibly on your own schedule. We provide the support you need to...",
    button: "Drive with us",
    href: "#",
    image: driver,
    bg: YELLOW,
    titleColor: BLUE,
    descColor: INK,
    btnBg: BLUE,
    btnText: "#ffffff",
    descMax: "max-w-[600px]",
  },
  {
    title: "Join Our Team",
    desc: "Help us build the future of mobility. Explore our open roles and find your place at DriveForward.",
    button: "See Open Positions",
    href: "#",
    image: phoneHand,
    bg: BLUE,
    titleColor: "#ffffff",
    descColor: "#ffffff",
    btnBg: BTN_YELLOW,
    btnText: INK,
    descMax: "max-w-[740px]",
  },
];

const COUNT = slides.length;
// after a slide change, ignore wheel for this long (ms). Stops trackpad inertia skipping slides
const LOCK_MS = 900;

const ArrowRight = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

const BecomePartOf = () => {
  const bannerRef = useRef(null);
  const indexRef = useRef(0);
  const lockRef = useRef(false);
  const [index, setIndex] = useState(0);

  // Cursor anywhere on the banner (left blue area, text, image, pop-out) +
  // wheel/swipe → change slide. Listener is on window (capture) and checks the
  // pointer position, so it never depends on which element is under the cursor.
  // At first/last slide the page scrolls normally, so user is never stuck.
  useEffect(() => {
    const POP = 90; // pop-out image room above the card (px)

    const inside = (x, y) => {
      const el = bannerRef.current;
      if (!el) return false;
      const r = el.getBoundingClientRect();
      return x >= r.left && x <= r.right && y >= r.top - POP && y <= r.bottom;
    };

    const canMove = (dir) => {
      const next = indexRef.current + dir;
      return next >= 0 && next < COUNT;
    };

    const step = (dir) => {
      const next = indexRef.current + dir;
      indexRef.current = next;
      setIndex(next);
      lockRef.current = true;
      setTimeout(() => {
        lockRef.current = false;
      }, LOCK_MS);
    };

    const onWheel = (e) => {
      if (e.ctrlKey) return; // browser zoom
      if (!inside(e.clientX, e.clientY)) return;
      if (Math.abs(e.deltaY) < 4 || Math.abs(e.deltaX) > Math.abs(e.deltaY))
        return;

      // Always prevent default when cursor is over banner to stop page jank
      e.preventDefault();
      e.stopPropagation();

      const dir = e.deltaY > 0 ? 1 : -1;
      if (lockRef.current) {
        return; // eat inertia while slide is moving
      }
      if (canMove(dir)) {
        step(dir);
      }
    };

    // touch (mobile): swipe up = next, swipe down = previous
    let startY = 0;
    let startInside = false;
    const onTouchStart = (e) => {
      const t = e.touches[0];
      startY = t.clientY;
      startInside = inside(t.clientX, t.clientY);
    };
    const onTouchMove = (e) => {
      if (!startInside) return;
      const dy = startY - e.touches[0].clientY;
      if (Math.abs(dy) < 30) return;
      const dir = dy > 0 ? 1 : -1;
      if (lockRef.current) {
        if (e.cancelable) e.preventDefault();
        return;
      }
      if (canMove(dir)) {
        if (e.cancelable) e.preventDefault();
        step(dir);
        startY = e.touches[0].clientY;
      }
    };

    const wheelOpts = { passive: false, capture: true };
    window.addEventListener("wheel", onWheel, wheelOpts);
    window.addEventListener("touchstart", onTouchStart, {
      passive: true,
      capture: true,
    });
    window.addEventListener("touchmove", onTouchMove, wheelOpts);
    return () => {
      window.removeEventListener("wheel", onWheel, wheelOpts);
      window.removeEventListener("touchstart", onTouchStart, { capture: true });
      window.removeEventListener("touchmove", onTouchMove, wheelOpts);
    };
  }, []);

  return (
    <section className="bg-[#f1f6ff] py-12 md:py-16">
      <Container>
        {/* Heading */}
        <h2 className="text-[26px] md:text-5xl font-bold text-gray-900">
          Become Part of Our Journey
        </h2>
        

        {/* Banner: room on top so the image can pop out above the card */}
        <div ref={bannerRef} className="relative mt-16 md:mt-24">
          {/* Window = exactly one slide tall. Clip bottom + sides,
              top stays a little open for the pop-out image */}
          <div className="h-[470px] md:h-[400px] [clip-path:inset(-90px_-100px_0_-100px)]">
            {/* Vertical track: all slides in a column, moves up/down by index */}
            <div
              className="flex flex-col transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateY(-${index * (100 / COUNT)}%)`,
              }}
            >
              {slides.map((s, i) => {
                const isActive = i === index;
                return (
                  <div
                    key={i}
                    aria-hidden={!isActive}
                    className={`relative h-[470px] shrink-0 transition-opacity duration-500 md:h-[400px] ${
                      isActive ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    {/* Colored card */}
                    <div
                      className="absolute inset-0 rounded-3xl"
                      style={{ backgroundColor: s.bg }}
                    />

                    {/* Image slot: bottom-right, pops above the card on md+.
                        Only active slide shows its image */}
                    {s.image && (
                      <img
                        src={s.image}
                        alt=""
                        className={`absolute bottom-0 right-4 h-[42%] w-auto object-contain object-bottom transition-opacity duration-500 md:right-[8%] md:h-[122%] ${
                          isActive ? "opacity-100 delay-300" : "opacity-0"
                        }`}
                      />
                    )}

                    {/* Text */}
                    <div className="relative flex h-full flex-col justify-start px-6 pt-10 md:justify-center md:px-[92px] md:pt-0">
                      <h3
                        className="text-3xl font-bold leading-[1.15] md:text-[46px]"
                        style={{ color: s.titleColor }}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={`mt-3 text-base font-medium leading-snug md:mt-4 md:text-2xl md:leading-[1.5] ${s.descMax}`}
                        style={{ color: s.descColor }}
                      >
                        {s.desc}
                      </p>
                      <a
                        href={s.href}
                        tabIndex={isActive ? 0 : -1}
                        className="group mt-6 flex h-14 w-[240px] items-center justify-between rounded-xl px-6 text-base font-semibold md:mt-8 md:h-[75px] md:w-[304px] md:px-[30px] md:text-xl"
                        style={{ backgroundColor: s.btnBg, color: s.btnText }}
                      >
                        {s.button}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight />
                        </span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots: right side, vertical, indicator only. Active = yellow */}
          <div className="pointer-events-none absolute right-3 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3 md:right-6 md:gap-[15px]">
            {slides.map((_, i) => (
              <span
                key={i}
                className="h-3 w-3 rounded-full transition-colors duration-300 md:h-3.5 md:w-3.5"
                style={{
                  backgroundColor: i === index ? BTN_YELLOW : "#ffffff",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BecomePartOf;
