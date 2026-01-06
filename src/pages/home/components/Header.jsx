import React from "react";
import moment from "moment";
import { Row } from "../../../base/Layout/rows";
import { Column } from "../../../base/Layout/columns";
import { Transition, TransitionChild } from "@headlessui/react";

const techBadges = [
  { name: "React", color: "from-blue-400 to-blue-500" },
  { name: "TypeScript", color: "from-indigo-400 to-indigo-500" },
  { name: "Next.js", color: "from-purple-400 to-purple-500" },
  { name: "Symfony", color: "from-violet-400 to-violet-500" },
  { name: "Flutter", color: "from-blue-300 to-blue-400" },
];

export default function Header({}) {
  return (
    <header
      className="flex flex-col lg:flex-row h-screen lg:justify-center lg:space-x-10 p-6 lg:p-10 items-center"
      role="banner"
    >
      <Transition
        as="div"
        appear
        show={true}
        className="relative h-3/4 flex-shrink-0 max-w-sm lg:h-4/5 p-5 lg:mx-10 lg:p-4"
      >
        <TransitionChild
          as="div"
          className="h-full mx-auto"
          enter="transition-all duration-500 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <img
            src="/images/header_01_low.png"
            data-src="/images/header_01.jpg"
            className="h-full object-cover shadow-xl rounded-5xl"
          />
        </TransitionChild>
        <TransitionChild
          as="div"
          className="h-1/3 absolute bottom-2 -right-4 lg:-right-16"
          enter="transition-all transform duration-1000 ease-out delay-300"
          enterFrom="opacity-0 translate-x-10"
          enterTo="opacity-100 translate-x-0"
        >
          <img
            src="/images/header_02_low.png"
            data-src="/images/header_02.jpg"
            className="h-full object-cover shadow-xl rounded-4xl"
          />
        </TransitionChild>
        <TransitionChild
          as="div"
          className="h-1/4 absolute top-2 right-2 lg:-top-4 lg:-right-10"
          enter="transition-all transform duration-1000 ease-out delay-700"
          enterFrom="opacity-0 -translate-y-10"
          enterTo="opacity-100 translate-y-0"
        >
          <img
            src="/images/header_04_low.png"
            data-src="/images/header_04.jpg"
            className="aspect-square object-cover shadow-xl rounded-4xl h-full"
          />
        </TransitionChild>
        <TransitionChild
          as="div"
          className="h-1/3 absolute bottom-16 -left-4 lg:-left-14 "
          enter="transition-all transform duration-1000 ease-out delay-1000"
          enterFrom="opacity-0 -translate-x-20"
          enterTo="opacity-100 translate-x-0"
        >
          <img
            src="/images/header_03_low.png"
            data-src="/images/header_03.jpg"
            className="shadow-xl object-cover rounded-4xl h-full"
          />
        </TransitionChild>
      </Transition>

      <Column className="p-5 pt-10 lg:pt-2 w-full lg:w-fit space-y-4 lg:space-y-6 max-w-2xl">
        {/* Name & Title */}
        <Column className="space-y-3">
          <h1 className="text-5xl pl-1 lg:text-7xl font-medium bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
            Nicolas Calvelo
          </h1>
          <div className="space-y-1">
            <h2 className="text-xl lg:text-3xl font-medium bg-gradient-to-r to-purple-400 from-blue-600 bg-clip-text text-transparent">
              Développeur Web & Mobile
            </h2>
            <p className="text-base lg:text-xl text-gray-300 font-medium">
              5 ans d'expérience et d'apprentissage en continue
            </p>
          </div>
        </Column>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1 lg:gap-2">
          {techBadges.map((tech, index) => (
            <span
              key={tech.name}
              className={`px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-bold bg-gradient-to-r ${tech.color} rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1 + 1.5}s both`,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Info Cards */}
        <Column className="space-y-3 lg:space-y-4">
          <div className="bg-slate-800/60 backdrop-blur-md p-3 lg:p-4 rounded-xl border border-purple-500/20">
            <Column className="space-y-1">
              <p className="font-bold text-sm lg:text-base text-slate-100">Basé à Toulouse, France</p>
              <p className="text-xs lg:text-sm text-slate-400">Originaire d'Argentine</p>
            </Column>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md p-3 lg:p-4 rounded-xl border border-purple-500/20">
            <Column className="space-y-1">
              <p className="font-bold text-sm lg:text-base text-slate-100">Analyste Développeur chez CCO</p>
              <p className="text-xs lg:text-sm text-slate-400">Depuis juillet 2022</p>
            </Column>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md p-3 lg:p-4 rounded-xl border border-purple-500/20">
            <Column className="space-y-1">
              <p className="font-bold text-sm lg:text-base text-slate-100">Master Ingénierie du Web</p>
              <p className="text-xs lg:text-sm text-slate-400">ESGI Toulouse • 2026-2024</p>
            </Column>
          </div>
        </Column>

        {/* CTA Button */}
        <a
          href="https://drive.google.com/file/d/1ef-xuTASFqBKIuuMIM6uQ3oe2nnEeC1J/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-block mt-4"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300" />
          <div className="relative px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white font-bold text-base lg:text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span>Télécharger mon CV</span>
            <span className="text-lg lg:text-xl transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </a>
      </Column>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
