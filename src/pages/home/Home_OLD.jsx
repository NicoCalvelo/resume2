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
    <main className="mx-auto w-full max-w-lg lg:max-w-7xl">
      <Header />
      <section className="flex flex-col lg:flex-row h-fit lg:h-screen relative justify-center">
        <img
          src="/images/01_low.png"
          data-src="/images/01.jpg"
          loading="lazy"
          className="w-full lg:max-w-sm h-screen lg:h-auto lg:m-5 rounded-t-4xl lg:mb-48 lg:rounded-4xl object-cover mb-20"
        />
        <Column className="absolute lg:static lg:justify-center lg:my-24 lg:border lg:border-text-color w-full p-5 z-20 text-center rounded-4xl bg-background-color space-y-10">
          <h2 className="text-4xl">Se frayer un chemin en marchant</h2>
          <Column className="space-y-2 text-sm lg:text-base pb-5">
            <p>
              Fortement attiré par l’industrie tech, je suis passionné par la création de solutions innovantes et la
              résolution de problèmes.
            </p>
            <p>
              Originaire d'Argentine et accueilli par l'Aveyron, je poursuis mon apprentissage et mon développement
              professionnel en France.
            </p>
            <p>
              Je me considère comme une personne curieuse, qui apprend par la pratique et utilise son expérience pour
              relever de nouveaux défis, comme le dit un proverbe espagnol :{" "}
              <span className="italic">"Caminante, no hay camino, se hace camino al andar"</span>.
            </p>
          </Column>
        </Column>
        <img
          src="/images/02_low.png"
          data-src="/images/02.jpg"
          loading="lazy"
          className="w-full lg:max-w-sm lg:mt-48 h-screen lg:h-auto lg:m-5  rounded-b-4xl lg:rounded-4xl object-cover"
        />
        <div className="bg-gradient-to-b lg:hidden from-black rounded-4xl via-transparent to-black opacity-25 absolute w-full h-full z-10" />
      </section>
      <Studies />
      <Projects />
      <footer className="flex flex-row justify-center item-scenter my-10 text-xs">
        <p className="">Conçu et développé par Nico Calvelo</p>
      </footer>
    </main>
  );
}
