import React, { useState } from "react";
import { Column } from "../../../base/Layout/columns";
import { Row } from "../../../base/Layout/rows";

const experiences = [
  {
    id: 1,
    title: "Analyste Développeur",
    company: "CCO - Services Informatiques",
    period: "Depuis Juillet 2022",
    location: "Villefranche de Rouergue, France",
    type: "Alternance",
    description: "Maîtrise de l'ensemble de la chaîne technique et fonctionnelle",
    missions: [
      "Analyse des besoins et rédaction du cahier des charges",
      "Conception logiciel et maquettes avec Figma",
      "Modélisation de bases de données",
      "Développement Frontend et Backend",
      "Mise en place des tests unitaires",
      "Veille technique",
      "Mise en production, maintenance et relation client",
    ],
    technologies: ["React", "TypeScript", "PHP", "Symfony", "SQL", "Docker", "Figma"],
    color: "from-blue-800 to-blue-900",
  },
  {
    id: 2,
    title: "Auto-entrepreneur",
    company: "Pigüé empanadas",
    period: "Depuis 2024",
    location: "Rodez, Aveyron",
    type: "Indépendant",
    description: "Cuisine et vente de produits argentins faits maison pour le marché hebdomadaire de Rodez",
    missions: [
      "Fabrication, gestion et vente de produits argentins pour le marché hebdomadaire de Rodez",
      "Gestion complète de l'activité d'auto-entrepreneur (comptabilité, communication, vente)",
      "Création d'un site web pour les marchands de la région d'Occitanie",
    ],
    technologies: ["Four", "Machine à pâte", "Next.js", "Firebase", "Stripe", "Tailwind CSS"],
    color: "from-purple-800 to-purple-900",
  },
  {
    id: 3,
    title: "Développeur Full-Stack",
    company: "Startup Argentine",
    period: "2022 - 2020",
    location: "Argentine (Remote)",
    type: "CDD",
    description: "Développement web et mobile pour clients internationaux",
    missions: [
      "Développement d'applications web et mobile",
      "Collaboration avec des clients aux États-Unis",
      "Création de blogs et sites vitrines",
      "Gestion de projets en autonomie",
    ],
    technologies: ["React", "Node.js", "Flutter", "Firebase", "Stripe", "BigQuery"],
    color: "from-green-800 to-green-900",
  },
  {
    id: 4,
    title: "Développeur Jeux Mobile",
    company: "Projet Personnel",
    period: "2019",
    location: "Argentine",
    type: "Projet",
    description: "Premiers pas dans le développement",
    missions: [
      "Création et publication d'un jeu mobile avec Unity3D",
      "Apprentissage de la programmation C# et orientation objet",
      "Publication sur les stores",
    ],
    technologies: ["Unity3D", "C#", "Game Design"],
    color: "from-orange-800 to-orange-900",
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="my-20 lg:my-32 px-5">
      <Column className="space-y-10">
        {/* Header */}
        <Column className="space-y-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-medium">Expérience Professionnelle</h2>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl font-semibold mx-auto">
            Un parcours diversifié entre PME, startup internationale et entrepreneuriat
          </p>
        </Column>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-orange-200" />

          {/* Experiences */}
          <Column className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative ${index % 2 === 0 ? "lg:pr-1/2" : "lg:pl-1/2"}`}
                style={{
                  animation: `fadeInSlide 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                {/* Card */}
                <div
                  className={`group cursor-pointer ${index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"}`}
                  onClick={() => toggleExpand(exp.id)}
                >
                  <div
                    className={`
                    bg-slate-800 backdrop-blur-md rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-2xl 
                    transition-all duration-300 transform hover:-translate-y-1
                    border border-purple-900/50
                  `}
                  >
                    {/* Header */}
                    <Row className="justify-between items-start mb-4 flex-wrap gap-2">
                      <Column className={`space-y-1`}>
                        <h3 className="text-xl lg:text-2xl font-medium text-slate-100 group-hover:text-purple-100 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-base lg:text-lg font-semibold text-slate-300">{exp.company}</p>
                        <p className="text-xs lg:text-sm text-slate-400 font-medium">{exp.location}</p>
                      </Column>
                      <Column className={`space-y-1 lg:items-end`}>
                        <span className="text-xs lg:text-sm font-medium w-fit text-slate-300 bg-slate-700/50 px-3 py-1 rounded-full border border-purple-500/20">
                          {exp.period}
                        </span>
                        <span
                          className={`text-xs ${
                            expandedId === exp.id ? "opacity-100" : "opacity-75 group-hover:opacity-100"
                          } uppercase w-fit tracking-widest text-white bg-gradient-to-br ${
                            exp.color
                          } px-3 py-1 rounded-full transition-opacity`}
                        >
                          {exp.type}
                        </span>
                      </Column>
                    </Row>

                    {/* Description */}
                    <p className="text-sm lg:text-base text-slate-400 mb-4 italic">{exp.description}</p>

                    {/* Expand/Collapse indicator */}
                    <button
                      className="text-xs lg:text-sm text-blue-600 group-hover:text-blue-500 font-medium flex items-center gap-2 mb-3 hover:!text-blue-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(exp.id);
                      }}
                    >
                      {expandedId === exp.id ? "Voir moins" : "Voir plus"}
                      <span
                        className={`transform transition-transform duration-300 ${
                          expandedId === exp.id ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Expanded content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedId === exp.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <Column className="space-y-4 pt-4 border-t border-gray-400">
                        {/* Missions */}
                        <Column className="space-y-2">
                          <h4 className="text-sm lg:text-base">Missions :</h4>
                          <ul
                            className={`space-y-1 text-xs lg:text-sm text-gray-400 ${
                              index % 2 === 0 ? "" : "lg:text-right"
                            }`}
                          >
                            {exp.missions.map((mission, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>{mission}</span>
                              </li>
                            ))}
                          </ul>
                        </Column>

                        {/* Technologies */}
                        <Column className="space-y-2">
                          <h4 className="text-sm lg:text-base">Technologies :</h4>
                          <div className={`flex flex-wrap gap-2`}>
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-3 py-1 bg-gray-300 text-gray-700 rounded-full font-semibold"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </Column>
                      </Column>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Column>
        </div>
      </Column>

      <style jsx>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
