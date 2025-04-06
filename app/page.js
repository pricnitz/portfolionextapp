import Hero from "./Components/Hero";
import About from "./Components/About.jsx";
import Aboutoverview from "./Components/Aboutoverview";
import Experince from "./Components/Experince";
import Expertiest from "./Components/Expertiest";
import Projects from "./Components/Projects";
import Contactsection from "./Components/Contactsection";
import Sociallinks from "./Components/Sociallinks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section id="home" className="flex flex-col items-center justify-center min-h-screen relative w-full">
        <video autoPlay loop muted  playsInline  className="absolute top-0 left-0 w-full h-full object-cover z-[-1] blur-sm " >
          <source src="/banners/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-1]"></div>
        <Hero />
      </section>
      <section id="about me" className="flex flex-col min-h-screen w-full">
        <About />
      </section>
      <section id="about" className="flex flex-col items-center justify-center min-h-screen relative w-full">
        <Aboutoverview />
      </section>
      <section id="experience" className="flex flex-col items-center justify-center min-h-screen relative w-full bg-fixed bg-no-repeat bg-center bg-attachment ">
        <Experince />
      </section>
      <section id="project" className="flex flex-col items-center justify-center min-h-screen relative w-full">
        <Projects />
      </section>
      <section id="expertiest" className="flex flex-col items-center justify-center min-h-screen relative w-full">
        <Expertiest />
      </section>
      <section id="contact" className="flex flex-col items-center justify-center min-h-screen relative w-full">
        <Contactsection/>
      </section>
      <div className="fixed z-50 bottom-25 md:hidden left-5 w-fit ">
        <Sociallinks  />
      </div>
    </main>
  );
}
