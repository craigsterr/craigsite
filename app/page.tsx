"use client";

import React, { useEffect, useState, useRef } from "react";
import RotatingCube from "./components/Cube";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import "animate.css";

const projects = [
  {
    title: "Webbie Pet",
    description:
      "A tamagotchi style game created with JavaScript, HTML5 Canvas, SASS, Next.js, and Node.js.",
    image: "./webbie-sc.png",
    link: "https://craigsterr.github.io/webbie-pet",
  },
  {
    title: "Camellia",
    description:
      "A two-person web development startup focused creating stylish and responsive websites.",
    image: "./camellia.png",
    link: "https://craigsterr.github.io/camellia",
  },
  {
    title: "News Template Presets",
    description:
      "A preset Chrome extension to automate article items when I worked as a news reporter.",
    image: "./news.png",
    link: "https://github.com/craigsterr/wp-news-template",
  },
  {
    title: "Kitty Clicker",
    description: "A clicker game made entirely in React, HTML, and Javascript.",
    image: "./kitty.png",
    link: "https://craigsterr.github.io/kitty-clicker",
  },
];

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [lagged, setLagged] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const animate = () => {
      setLagged((prev) => {
        const speed = 0.7; // Lower = more lag
        return {
          x: prev.x + (mouse.x - prev.x) * speed,
          y: prev.y + (mouse.y - prev.y) * speed,
        };
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [mouse]);

  const linksEffect =
    "hover:scale-110 transition-transform duration-300 hover:text-orange-400 text-lg font-bold";

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(circle 1000px at ${lagged.x}px ${lagged.y}px, rgba(200,120,100,0.1), transparent 80%)`,
          transition: "background 0.1s",
        }}
        aria-hidden="true"
      />

      <main className="flex flex-col items-center space-y-10 text-white relative z-10">
        <div className="mx-auto fixed w-3/4 bg-white h-full opacity-2" />
        <div className="m-15"></div>
        <div>
          <Image
            src="./craig.jpg"
            alt="Picture of Craig"
            width={300}
            height={300}
            className="rounded-full drop-shadow-[0_8px_24px_rgba(0,0,0,1)] transition-transform duration-300 hover:scale-120 animate__animated animate__fadeInDown"
          />
        </div>
        <div className="flex flex-wrap gap-x-4 text-lg font-bold justify-center mx-5 animate__animated animate__fadeInDown">
          <a href="./resume.pdf" className={linksEffect}>
            Resume
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/craig-ondevilla-8106b4191"
            className={linksEffect}
          >
            LinkedIn
          </a>
          <span>•</span>
          <a href="https://github.com/craigsterr" className={linksEffect}>
            Github
          </a>
          <span>•</span>
          <p>craig.brdt505@gmail.com</p>
        </div>
        <Section
          id="about"
          title="Hey, I'm Craig!"
          className="max-w-xl text-center animate__animated animate__fadeInLeft"
        >
          <p>
            I&apos;m a passionate programmer with a{" "}
            <b>Bachelor of Science in Computer Science</b> from the
            <b> University of Illinois Urbana-Champaign (UIUC)</b>. I specialize
            in web development and design, and I love creating clean,
            user-friendly digital experiences. <br /> <br />
            Me and my friend are currently working on Camellia, a web
            development startup providing stylish and responsive websites for
            clients with small businesses.
          </p>
        </Section>
        <RotatingCube scrollY={scrollY} />
        <Section
          id="projects"
          title="Hey, I'm Craig!"
          className="max-w-4xl text-center animate__animated animate__fadeInLeft"
        >
          <p className="mb-6">
            Here&apos;s some stuff I&apos;ve been working on:
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project, idx) => (
              <div
                key={project.title}
                className="animate__animated animate__fadeInLeft"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </Section>
        <RotatingCube scrollY={scrollY} />
        <Section
          id="skills"
          title="Skills"
          className="max-w-md text-center animate__animated animate__fadeInLeft"
        >
          <p>Here&apos;s what I know:</p>
          <div className="grid grid-cols-2 gap-4 text-left mt-4">
            <div>
              <h4 className="font-bold mb-1">Languages</h4>
              <ul className="ml-4 list-disc">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Kotlin</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-1">Frameworks &amp; Libraries</h4>
              <ul className="ml-4 list-disc">
                <li>React (incl. React Native/Expo)</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>WebGL</li>
                <li>Tailwind CSS</li>
                <li>SASS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-1">Developer Tools</h4>
              <ul className="ml-4 list-disc">
                <li>GitHub Actions</li>
                <li>Docker</li>
                <li>VS Code</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-1">Design &amp; Media</h4>
              <ul className="ml-4 list-disc">
                <li>Adobe Photoshop</li>
                <li>Adobe Premiere Pro</li>
                <li>Adobe After Effects</li>
                <li>Adobe Illustrator</li>
                <li>Procreate</li>
                <li>Unity/Unreal Engine</li>
                <li>Blender</li>
                <li>Canva</li>
              </ul>
            </div>
          </div>
        </Section>
        <RotatingCube scrollY={scrollY} />
        <Section
          id="contact"
          title="Contact me"
          className="max-w-md text-center animate__animated animate__fadeInUp"
        >
          <p>Let&apos;s get in touch!</p>
        </Section>
        <NavBar />
      </main>
    </>
  );
}
