import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Ibraheem, a dedicated Full-Stack Web Developer focused on building fast, modern, and user-centered digital experiences. I specialize in creating clean front-end interfaces with React, Next.js, Tailwind, and TypeScript, along with powerful back-end systems using Node.js, Express, Firebase, and MongoDB.
              </p>
              <p className="text-white">
                My passion lies in crafting websites that feel smooth, look elegant, and perform flawlessly. I care about the details — structure, speed, and design — because every project deserves precision and perfection.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm continuously learning advanced backend technologies and real-time workflows to strengthen my skills as a complete full-stack developer. My goal is simple: to build seamless, scalable, and impactful web applications that make life easier for users and businesses.
                  </p>
                  <p className="text-white mt-4">
                    I believe in innovation, learning, and pushing boundaries with modern tools and frameworks. Whether it's a portfolio, landing page, dashboard, or full e-commerce store, I bring clarity, discipline, and creativity to every line of code.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Ibraheem — Full-Stack Developer. Crafting digital experiences with precision.
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}