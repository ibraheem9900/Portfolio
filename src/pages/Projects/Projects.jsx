import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Smartphone } from "lucide-react";
import SkillBuddyWebImg from "@/assets/images/skillbuddy-web.png";
import AiSearchImg from "@/assets/images/ai-search-assistant.png";
import UmrahImg from "@/assets/images/umrah.png";
import CozyPawsImg from "@/assets/images/ecommerce.png";
import HealthImg from "@/assets/images/health.png";
import CarRentalImg from "@/assets/images/car-rental.png";
import clothingBrandImg from "@/assets/images/clothing-brand.png";
import babyfittersImg from "@/assets/images/baby-fitters.png";

const projects = [
  {
    title: "SkillBuddy - Service Marketplace Platform",
    description:
      "A full-scale, TaskRabbit-style service marketplace built for the Baltic region (Estonia, Latvia, Lithuania). Features real-time job posting & bidding, in-app chat, secure payments, provider profiles, and 5-language support (English, Estonian, Russian, Latvian, Lithuanian). Built with React 19, TanStack Router/Start, Tailwind v4, and shadcn/ui, backed by a FastAPI + Supabase backend.",
    link: SkillBuddyWebImg,
    color: "#10b981",
    type: "web",
    liveLink: "https://skill-buddy-nine.vercel.app/",
  },
  {
    title: "SkillBuddy - Mobile App (iOS & Android)",
    description:
      "React Native + Expo companion app for SkillBuddy. Covers the full user journey: job browsing & bidding, real-time chat, in-app booking, secure payments, ratings & reviews, push notifications, and a support ticketing system. Currently in EAS build & internal testing.",
    link: SkillBuddyWebImg,
    color: "#8b5cf6",
    type: "mobile",
    demoLink: "",
  },
  {
    title: "Real-time AI Search Assistant",
    description:
      "A real-time, AI-powered search and chat assistant that delivers conversational, source-aware answers instantly. Includes secure authentication (email + Google sign-in), multilingual responses, and a live web-search pipeline powered by Groq, Llama 3.1, and SerpAPI.",
    link: AiSearchImg,
    color: "#38bdf8",
    type: "web",
    liveLink: "https://ai-system-new.vercel.app/",
  },
  {
    title: "Book Umrah Cab - Taxi Booking Platform",
    description:
      "A premium taxi & transport booking platform for Umrah pilgrims and tourists in Saudi Arabia, covering airport-to-hotel transfers across Makkah, Madina, and Jeddah. Features a live vehicle fleet, tour packages, and one-click WhatsApp booking. Built with Next.js, TypeScript, and Tailwind CSS.",
    link: UmrahImg,
    color: "#eab308",
    type: "web",
    liveLink: "https://book-umrah-cap.vercel.app/",
  },
  {
    title: "CozyPawsCare - E-commerce Store",
    description:
      "A full-featured e-commerce platform for pet care products. Built with React, Node.js, and integrated payment systems. Features product management, shopping cart, user authentication, and order tracking.",
    link: CozyPawsImg,
    color: "#f59e0b",
    type: "web",
    liveLink: "https://cozypawscare.com",
  },
  {
    title: "MyHealth Enrollment - Healthcare Portal",
    description:
      "A licensed US health insurance enrollment platform helping individuals, families, and seniors compare and enroll in ACA, Medicare, and Life Insurance plans across 23 states. Features a fast quote-request form and real-time data validation. Built with React and Next.js.",
    link: HealthImg,
    color: "#3b82f6",
    type: "web",
    liveLink: "https://myhealthenrollment.net",
  },
  {
    title: "Car Rental Website",
    description:
      "A modern car rental platform built with React, Next.js, and Tailwind CSS. Features real-time availability checking, secure booking, and responsive design for a seamless user experience.",
    link: CarRentalImg,
    color: "#2c0000",
    type: "web",
    liveLink: "https://car-rentals-200.vercel.app/",
  },
  {
    title: "Clothing Brand Website",
    description:
      "An e-commerce storefront for a modern clothing brand, featuring a curated product showcase, shopping cart, user authentication, and responsive design for a seamless shopping experience. Built with React, Next.js, and Tailwind CSS.",
    link: clothingBrandImg,
    color: "#fff8ae",
    type: "web",
    liveLink: "https://clothing-brand-200.vercel.app/",
  },
  {
    title: "Baby Fitters - Baby Clothing Brand",
    description:
      "An e-commerce storefront for a baby clothing and essentials brand, offering garments, footwear, and accessories with soft, pastel-themed branding, a product catalog, and a responsive shopping cart experience.",
    link: babyfittersImg,
    color: "#fbcfe8",
    type: "web",
    liveLink: "https://www.babyfitters.online/",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                liveLink={project.liveLink}
                demoLink={project.demoLink}
                type={project.type}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  liveLink,
  demoLink,
  type,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const actionHref = type === "mobile" ? demoLink : liveLink;
  const actionLabel = type === "mobile" ? "Watch Demo" : "Visit Live Site";
  const hasAction = Boolean(actionHref);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>

            {/* Mobile app badge */}
            {type === "mobile" && (
              <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                Mobile App
              </div>
            )}
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {hasAction ? (
                  <motion.a
                    href={actionHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2"
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={color}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <span
                      className="text-xs md:text-sm font-medium"
                      style={{ color }}
                    >
                      {actionLabel}
                    </span>
                  </motion.a>
                ) : (
                  <span className="text-xs md:text-sm font-medium text-gray-500 italic">
                    {type === "mobile"
                      ? "Demo video coming soon"
                      : "Live link coming soon"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  liveLink: PropTypes.string,
  demoLink: PropTypes.string,
  type: PropTypes.string,
};
