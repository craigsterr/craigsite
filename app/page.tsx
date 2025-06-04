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
    image: "/placeholder1.png",
  },
  {
    title: "Project Two",
    description: "A short description of project two.",
    image: "/placeholder2.png",
  },
  {
    title: "Project Three",
    description: "A short description of project three.",
    image: "/placeholder3.png",
  },
  {
    title: "Project Four",
    description: "A short description of project four.",
    image: "/placeholder3.png",
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
        <div className="m-20"></div>

        <div>
          <Image
            src="./craig.jpg"
            alt="Picture of Craig"
            width={300}
            height={300}
            className="rounded-full drop-shadow-[0_8px_24px_rgba(0,0,0,1)] transition-transform duration-300 hover:scale-120 animate__animated animate__fadeInDown"
          />
        </div>

        <Section
          id="about"
          title="This website is a WORK IN PROGRESS"
          className="max-w-xl text-center animate__animated animate__fadeInLeft"
        >
          <p>
            My portfolio website is under construction and will be completed
            soon! Feel free to look around!{" "}
          </p>
        </Section>

        <Section
          id="about"
          title="Hey, I'm Craig!"
          className="max-w-xl text-center animate__animated animate__fadeInLeft"
        >
          <p>
            I&apos;m a programmer with a{" "}
            <b>Bachelor of Science for Computer Science</b> from the
            <b> University of Illinois Urbana-Champaign (UIUC)</b> with a
            passion for web development and design!
          </p>
        </Section>

        <RotatingCube scrollY={scrollY} />

        <Section
          id="projects"
          title="Projects"
          className="max-w-3xl w-full text-center animate__animated animate__fadeInRight"
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
                />
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          title="Skills"
          className="max-w-md text-center animate__animated animate__fadeInLeft"
        >
          <p>Here&apos;s what I know:</p>
          <ul className="grid grid-cols-2 gap-2 justify-items-center mt-4">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Kotlin</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>HTML/CSS</li>
          </ul>{" "}
        </Section>

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
