import React, { useEffect } from "react";
import Header from "./components/Header";
import { ColRow, Column } from "../../base/Layout/columns";
import { Row, RowBetween, RowCenter } from "../../base/Layout/rows";
import Projects from "./components/Projects";

export default function Home() {
  useEffect(() => {
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
  }, []);
  return (
    <div className="mx-auto w-full max-w-lg lg:max-w-7xl">
      <Header />
      <ColRow className="h-fit lg:h-screen relative justify-center">
        <img
          src="/images/01_low.png"
          data-src="/images/01.jpg"
          loading="lazy"
          className="w-full lg:max-w-sm h-screen lg:h-auto lg:m-5 rounded-t-4xl lg:mb-48 lg:rounded-4xl object-cover mb-20"
        />
        <Column className="absolute lg:static lg:justify-center lg:my-24 lg:border lg:border-text-color w-full p-5 z-20 text-center rounded-4xl lg:rounded-4xl bg-background-color space-y-5">
          <h2 className="text-4xl">Se frayer un chemin en marchant</h2>
          <Column className="space-y-2 text-sm lg:text-base">
            <p>Fortement attiré par l’industrie tech, je sais apprécier les défis complexes, avec des enjeux divers.</p>
            <p>
              Originaire d'Argentine, je poursuis mon apprentissage et mon développement professionnel en France, 2023 /
              2024 Bac+3 Ingénierie Web à l'ESGI Paris
            </p>
            <p>
              Étant calme et simple dans la vie quotidienne, je garde un esprit ambitieux sur mon travail et mes
              objectifs.
            </p>
          </Column>
        </Column>
        <img
          src="/images/02_low.png"
          data-src="/images/02.jpg"
          loading="lazy"
          className="w-full lg:max-w-sm lg:mt-48 h-screen lg:h-auto lg:m-5  rounded-b-4xl lg:rounded-4xl object-cover"
        />
        <div className="bg-gradient-to-b lg:hidden from-black rounded-4xl via-transparent to-black opacity-50 absolute w-full h-full z-10" />
      </ColRow>
      <Projects />
      <Column className="h-fit lg:hidden relative justify-center">
        <img
          loading="lazy"
          src="/images/images_01_low.png"
          data-src="/images/images_01.jpg"
          className="w-full h-screen rounded-t-5xl object-cover mb-20"
        />
        <img
          loading="lazy"
          src="/images/images_02_low.png"
          data-src="/images/images_02.jpg"
          className="w-full h-screen rounded-b-5xl object-cover"
        />
        <Column className="absolute p-4 z-20 text-center rounded-5xl bg-background-color space-y-5">
          <h2 className="text-4xl">Et quelques photos que j'aime bien pour la fin</h2>
        </Column>
      </Column>
      <h2 className="text-5xl hidden lg:block mt-20 text-center mx-auto">
        Et quelques photos que j'aime bien pour la fin
      </h2>
      <Column className="p-2 my-5 space-y-5 lg:flex-row lg:space-x-5 lg:items-center">
        <Column className="space-y-5">
          <img loading="lazy" src="/images/04_low.png" data-src="/images/04.jpg" className="rounded-5xl object-cover" />
          <img loading="lazy" src="/images/08_low.png" data-src="/images/08.jpg" className="rounded-5xl object-cover" />
          <img loading="lazy" src="/images/06_low.png" data-src="/images/06.jpg" className="rounded-5xl object-cover" />
          <img loading="lazy" src="/images/07_low.png" data-src="/images/07.jpg" className="rounded-5xl object-cover" />
        </Column>
        <Column className="space-y-5">
          <img loading="lazy" src="/images/09_low.png" data-src="/images/09.jpg" className="rounded-5xl object-cover" />
          <img
            loading="lazy"
            src="/images/images_01_low.png"
            data-src="/images/images_01.jpg"
            className="hidden lg:block rounded-5xl object-cover"
          />
          <img loading="lazy" src="/images/10_low.png" data-src="/images/10.jpg" className="rounded-5xl object-cover" />
        </Column>
        <Column className="space-y-5">
          <img loading="lazy" src="/images/05_low.png" data-src="/images/05.jpg" className="rounded-5xl object-cover" />
          <img
            loading="lazy"
            src="/images/images_02_low.png"
            data-src="/images/images_02.jpg"
            className="hidden lg:block rounded-5xl object-cover"
          />
          <img loading="lazy" src="/images/11_low.png" data-src="/images/11.jpg" className="rounded-5xl object-cover" />
          <img loading="lazy" src="/images/03_low.png" data-src="/images/03.jpg" className="rounded-5xl object-cover" />
        </Column>
      </Column>
      <RowCenter className="my-10 text-xs">
        <p className="">Conçu et développé par Nico Calvelo</p>
      </RowCenter>
    </div>
  );
}
