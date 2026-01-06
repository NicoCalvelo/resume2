import React, { useState } from "react";
import { Column } from "../../../base/Layout/columns";
import { Row } from "../../../base/Layout/rows";

const skillsData = {
  frontend: [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
    { name: "Next.js", level: 90, color: "bg-yellow-500" },
    { name: "TypeScript", level: 85, color: "bg-blue-600" },
  ],
  backend: [
    { name: "Symfony", level: 90, color: "bg-gray-700" },
    { name: "PHP", level: 80, color: "bg-indigo-500" },
    { name: "Laravel", level: 70, color: "bg-red-500" },
    { name: "AdonisJS", level: 65, color: "bg-purple-500" },
    { name: "Java / JEE", level: 25, color: "bg-orange-600" },
  ],
  mobile: [
    { name: "Flutter", level: 75, color: "bg-blue-400" },
    { name: "React Native", level: 50, color: "bg-blue-500" },
  ],
  devops: [
    { name: "Firebase", level: 85, color: "bg-yellow-600" },
    { name: "Docker", level: 75, color: "bg-blue-600" },
    { name: "Kubernetes", level: 50, color: "bg-blue-700" },
    { name: "AWS", level: 25, color: "bg-orange-500" },
  ],
  database: [
    { name: "MySQL", level: 90, color: "bg-blue-800" },
    { name: "Firestore", level: 85, color: "bg-yellow-600" },
    { name: "PostgreSQL", level: 75, color: "bg-blue-800" },
    { name: "PostGIS", level: 35, color: "bg-green-600" },
  ],
  tools: [
    { name: "Git", level: 90, color: "bg-orange-600" },
    { name: "Figma", level: 85, color: "bg-pink-500" },
    { name: "Testing", level: 50, color: "bg-green-500" },
  ],
};

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "mobile", label: "Mobile" },
  { id: "devops", label: "DevOps & Cloud" },
  { id: "database", label: "Bases de données" },
  { id: "tools", label: "Outils" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section className="my-20 lg:my-32 px-5">
      <Column className="space-y-10">
        {/* Header */}
        <Column className="space-y-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold">Compétences Techniques</h2>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl font-medium mx-auto">
            Plus de 5 ans d'expérience avec les technologies modernes du développement web et mobile
          </p>
        </Column>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`
                px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium
                transition-all duration-300 transform hover:scale-105
                ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg border border-purple-400/50"
                    : "bg-slate-800/60 backdrop-blur-md text-slate-300 hover:bg-slate-700/60 border border-purple-500/20"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
          {skillsData[activeCategory]?.map((skill, index) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <Column className="space-y-2">
                <Row className="justify-between items-center">
                  <span className="font-medium text-sm lg:text-base">{skill.name}</span>
                  <span
                    className={`text-xs lg:text-sm font-semibold transition-opacity duration-300 ${
                      hoveredSkill === skill.name ? "opacity-100" : "opacity-60"
                    }`}
                  >
                    {skill.level}%
                  </span>
                </Row>
                <div className="h-2 lg:h-3 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out transform origin-left`}
                    style={{
                      width: `${skill.level}%`,
                      transform: hoveredSkill === skill.name ? "scaleY(1.2)" : "scaleY(1)",
                    }}
                  />
                </div>
              </Column>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-10 max-w-4xl mx-auto">
          <Column className="text-center space-y-2 p-4 lg:p-6 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-purple-500/20">
            <div className="text-3xl lg:text-4xl font-bold text-purple-400">5+</div>
            <div className="text-xs lg:text-sm text-slate-300">Années d'expérience</div>
          </Column>
          <Column className="text-center space-y-2 p-4 lg:p-6 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-purple-500/20">
            <div className="text-3xl lg:text-4xl font-bold text-blue-400">10+</div>
            <div className="text-xs lg:text-sm text-slate-300">Projets livrés</div>
          </Column>
          <Column className="text-center space-y-2 p-4 lg:p-6 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-purple-500/20">
            <div className="text-3xl lg:text-4xl font-bold text-indigo-400">5+</div>
            <div className="text-xs lg:text-sm text-slate-300">Technologies</div>
          </Column>
          <Column className="text-center space-y-2 p-4 lg:p-6 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-purple-500/20">
            <div className="text-3xl lg:text-4xl font-bold text-violet-400">3</div>
            <div className="text-xs lg:text-sm text-slate-300">Langues</div>
          </Column>
        </div>
      </Column>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
