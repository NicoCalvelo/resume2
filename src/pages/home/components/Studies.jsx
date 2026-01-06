import React from "react";
import { Row } from "../../../base/Layout/rows";
import { Column } from "../../../base/Layout/columns";

const studies = [
  {
    title: "Master Ingénierie du Web",
    school: "ESGI Toulouse",
    year: "2024 - 2026",
    period: "En cours",
    link: "https://www.esgi.fr/programmes/ingenierie-web.html",
    message:
      "Formation en alternance en développement web. Un cycle de deux ans pour devenir un expert en ingénierie informatique.",
    details: "Projet mémoire : Imagerie satellite, PostGIS, APIs Copernicus",
    achievements: ["Alternance chez CCO", "Spécialisation géospatiale"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Bac+3 Ingénierie du Web",
    school: "ESGI Paris",
    year: "2023 - 2024",
    period: "Terminé",
    link: "https://www.esgi.fr/programmes/ingenierie-web.html",
    message:
      "Formation en alternance en développement web. Une année très enrichissante en expériences et en connaissances.",
    details: "Classement: 1/18 • Moyenne: 14.85/20",
    achievements: ["1er de promotion", "Alternance chez CCO"],
    color: "from-purple-500 to-purple-600",
  },
];

export default function Studies({}) {
  return (
    <section className="my-20 lg:my-32 px-5">
      <Column className="space-y-10 max-w-6xl mx-auto">
        {/* Header */}
        <Column className="space-y-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-medium">Formation Académique</h2>
          <p className="text-base lg:text-lg text-gray-300 font-semibold max-w-2xl mx-auto">
            Parcours en ingénierie web avec spécialisation en développement full-stack
          </p>
        </Column>

        {/* Studies Timeline */}
        <div className="relative max-w-5xl w-full mx-auto">
          {/* Timeline line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-green-300" />

          <Column className="space-y-10 lg:space-y-16 w-full">
            {studies.map((study, index) => (
              <div
                key={study.title}
                className={`relative w-full ${index % 2 === 0 ? "lg:pr-10 lg:text-right" : "lg:pl-10"}`}
                style={{
                  animation: `fadeInSlide 0.6s ease-out ${index * 0.3}s both`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden lg:flex absolute top-8 ${
                    index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                  } w-16 h-16 bg-gradient-to-r ${
                    study.color
                  } rounded-full border-4 border-white shadow-xl z-10 items-center justify-center text-3xl`}
                >
                  {study.icon}
                </div>

                {/* Card */}
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block group ${index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"}`}
                >
                  <div className="bg-slate-800 w-full backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-900/50">
                    <Column className={`space-y-4 ${index % 2 === 0 ? "items-end" : "lg:items-start"}`}>
                      {/* Header */}
                      <Row
                        className={`items-start w-full justify-between gap-4 ${
                          index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <Column
                          className={`space-y-2 flex-1 w-full ${index % 2 === 0 ? "lg:items-end" : "lg:items-start"}`}
                        >
                          <div className="flex items-center gap-3 w-fit">
                            <span
                              className={`text-xs w-fit font-bold text-white bg-gradient-to-r ${study.color} px-3 py-1 rounded-full`}
                            >
                              {study.period}
                            </span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-medium text-slate-200 group-hover:text-slate-100 transition-colors">
                            {study.title}
                          </h3>
                          <p className="text-base lg:text-lg font-semibold text-slate-300">
                            {study.year} {study.school}
                          </p>
                        </Column>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </Row>

                      {/* Description */}
                      <p className="text-sm max-w-xl lg:text-base text-gray-300 leading-relaxed">{study.message}</p>

                      {/* Details badge */}
                      {study.details && (
                        <div>
                          <p className="text-sm lg:text-base font-bold">{study.details}</p>
                          <Row className={`mt-2 justify-center lg:justify-${index % 2 === 0 ? "end" : "start"}`}>
                            <div
                              className={`bg-gradient-to-r w-3/5 ${study.color} rounded-xl mx-1 py-0.5  ${
                                index % 2 === 0 ? "" : "lg:text-left"
                              }`}
                            ></div>
                            <div
                              className={`bg-gradient-to-r w-1/5 ${study.color} rounded-xl mx-1 py-0.5  ${
                                index % 2 === 0 ? "" : "lg:text-left"
                              }`}
                            ></div>
                          </Row>
                        </div>
                      )}

                      {/* Achievements */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "" : "lg:justify-start"}`}>
                        {study.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                          >
                            ✓ {achievement}
                          </span>
                        ))}
                      </div>
                    </Column>
                  </div>
                </a>
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
