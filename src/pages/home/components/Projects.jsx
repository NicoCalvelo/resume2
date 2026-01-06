import { useState } from "react";
import { Row } from "../../../base/Layout/rows";
import { Column } from "../../../base/Layout/columns";

const projects = [
  {
    title: "Projet Mémoire Master",
    year: "2026-2025",
    link: "https://github.com/NicoCalvelo/geosafe-alert",
    message: "Imagerie satellite et analyse géospatiale.",
    description:
      "Système d'analyse d'images satellites utilisant PostGIS et les APIs Copernicus pour le traitement de données géospatiales.",

    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Bons marchés de France",
    year: "2025",
    link: "https://bons-marches-de-france.fr/",
    message: "Site informatif sur les bons marchés de la région.",
    description:
      "Une plateforme qui reconnecte les consommateurs avec les marchés traditionnels et les producteurs locaux de France.",

    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Ana Mariela Albarracin",
    year: "2024",
    link: "https://ana-mariela-albarracin.com/",
    message: "Un site de gestion et de présentation des blogs.",
    description:
      "Plateforme complète de gestion de contenu avec back-office administrateur, système de catégories et optimisation SEO.",

    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Philosophique",
    year: "2023",
    link: "https://filosophique-83d32.web.app/",
    message: "Une plateforme de contenu philosophique.",
    description:
      "Application web interactive pour découvrir et explorer la philosophie de manière moderne et accessible.",

    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "CCO Info",
    year: "2023",
    link: "https://cco-info.fr/",
    message: "Un site vitrine pour une société en informatique.",
    description:
      "Site corporate professionnel avec présentation des services, portfolio client et formulaire de contact.",

    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Nico's Resume v1",
    year: "2021",
    link: "https://nicocalvelo.vercel.app/",
    message: "Mon premier site de présentation professionnel.",
    description: "Portfolio minimaliste et élégant, première version de mon site professionnel.",

    color: "from-gray-600 to-gray-800",
  },
  {
    title: "Te Busco",
    year: "2020",
    link: "https://velogroup.itch.io/tebusco",
    message: "Un jeu de plateforme 2D basé dans ma ville natale.",
    description: "Jeu de plateforme créé avec Unity3D, inspiré de l'architecture et culture de ma ville en Argentine.",

    color: "from-orange-500 to-red-600",
  },
];

export default function Projects({}) {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="my-20 lg:my-32 px-5">
      <Column className="space-y-10 max-w-6xl mx-auto">
        {/* Header */}
        <Column className="space-y-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-medium">Projets Réalisés</h2>
          <p className="text-base lg:text-lg font-semibold text-gray-300 max-w-2xl mx-auto">
            Une sélection de projets web, mobile et expérimentaux
          </p>
        </Column>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
              className="group"
            >
              <div
                className={`
                  h-full bg-slate-800 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl
                  transition-all duration-300 transform hover:-translate-y-2
                  border border-purple-900/50
                  ${project.link ? "cursor-pointer" : ""}
                `}
                onClick={() => {
                  if (project.link) window.open(project.link, "_blank");
                }}
              >
                <Column className="space-y-4 h-full justify-between">
                  {/* Header */}
                  <div>
                    <Row className="items-start justify-between mb-3">
                      <Column>
                        <h3 className="text-xl lg:text-2xl font-medium text-slate-200 group-hover:text-purple-100 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs lg:text-sm text-slate-300 font-medium">{project.year}</span>
                      </Column>
                      {project.link && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      )}
                    </Row>

                    {/* Description */}
                    <Column className="space-y-2">
                      <p className="text-sm lg:text-base text-gray-300 font-medium">{project.message}</p>
                      <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">{project.description}</p>
                    </Column>
                  </div>
                </Column>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-10">
          <Column className="space-y-6 items-center">
            <h3 className="text-2xl lg:text-3xl text-gray-200">Intéressé par une collaboration ?</h3>
            <p className="text-base lg:text-lg text-gray-300 font-semibold max-w-3xl">
              Je suis toujours ouvert à de nouveaux projets et opportunités professionnelles
            </p>
            <a
              href="mailto:dia.calvelo.nicolas@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span>Me contacter</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </Column>
        </div>
      </Column>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
