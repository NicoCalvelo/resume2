import React, { useEffect } from "react";
import Header from "./components/Header";
import Studies from "./components/Studies";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Column } from "../../base/Layout/columns";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll("img").forEach((img) => {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const src = img.getAttribute("data-src");

              if (!src) return;
              img.setAttribute("src", src);
              img.onload = () => img.removeAttribute("data-src");

              observer.disconnect();
            }
          });
        });

        observer.observe(img);
      });
    }, 10);
  }, []);

  return (
    <main className="mx-auto w-full max-w-7xl relative">
      {/* Spatial background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header Hero Section */}
        <Header />

        {/* About Section */}
        <section className="relative my-10 lg:my-20">
          <div className="flex flex-col lg:flex-row h-fit relative justify-center items-center gap-10 lg:gap-5 px-5">
            <img
              src="/images/01_low.png"
              data-src="/images/01.jpg"
              loading="lazy"
              className="w-full lg:max-w-sm h-96 lg:h-auto rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            <Column className="lg:max-w-2xl text-center lg:text-left rounded-3xl bg-slate-800/60 backdrop-blur-md border border-purple-500/20 p-8 lg:p-10 space-y-6 shadow-xl">
              <h2 className="text-3xl lg:text-4xl pl-2 font-medium bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
                Se frayer un chemin en marchant
              </h2>
              <Column className="space-y-4 text-sm lg:text-base text-slate-300 leading-relaxed">
                <p>
                  Riche de <span className="font-bold text-purple-400">5 ans d'expérience professionnelle</span> au sein
                  de PME dynamiques, j'offre une expertise solide en développement Web & Mobile. Mon parcours
                  international et mon goût pour le travail d'équipe sont des atouts clés pour m'intégrer rapidement.
                </p>
                <p>
                  Originaire d'<span className="font-semibold text-blue-400">Argentine</span> et accueilli par
                  l'Aveyron, je poursuis mon apprentissage et mon développement professionnel en France, actuellement
                  basé à <span className="font-semibold text-blue-400">Toulouse</span>.
                </p>
                <p>
                  Je me considère comme une personne <span className="font-semibold text-purple-400">curieuse</span>,
                  qui apprend par la pratique et utilise son expérience pour relever de nouveaux défis. Comme le dit un
                  proverbe espagnol :{" "}
                  <span className="italic font-medium text-slate-200">
                    "Caminante, no hay camino, se hace camino al andar"
                  </span>
                  .
                </p>
              </Column>
            </Column>
            <img
              src="/images/02_low.png"
              data-src="/images/02.jpg"
              loading="lazy"
              className="w-full lg:max-w-sm h-96 lg:h-auto rounded-3xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Studies Section */}
        <Studies />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <footer className="bg-slate-900/80 backdrop-blur-sm text-white py-10 px-5 mt-20 border-t border-purple-500/20">
          <Column className="space-y-6 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <Column className="space-y-2 text-center lg:text-left">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Nicolas Calvelo
                </h3>
                <p className="text-slate-300">Développeur Full-Stack Web & Mobile</p>
              </Column>
              <Column className="space-y-2 text-center lg:text-right text-slate-300">
                <p className="text-sm">Toulouse, France</p>
                <p className="text-sm">dia.calvelo.nicolas@gmail.com</p>
              </Column>
            </div>
            <div className="border-t border-slate-700 pt-6 text-center">
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} - Conçu et développé par Nicolas Calvelo
              </p>
            </div>
          </Column>
        </footer>
      </div>
    </main>
  );
}
