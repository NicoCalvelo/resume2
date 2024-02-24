import React from "react";
import { Column } from "../../../base/Layout/columns";
import { Row, RowBetween, RowCenter } from "../../../base/Layout/rows";
import OutlinedIconButton from "../../../base/Buttons/OutlinedIconButton";
import { addCopyToClipboardToast, addToastSucces } from "../../../base/Components/Toasts";

const projects = [
  {
    title: "Philosophique",
    year: "2023",
    link: "https://philosophique.app/",
    message: "Une plataforme de contenu philosophique.",
  },
  {
    title: "CCO",
    year: "2023",
    link: "https://cco-info.fr/",
    message: "Un site vitrine pour une societe en informatique.",
  },
  {
    title: "Nico's resume v1",
    year: "2021",
    link: "https://nicocalvelo.vercel.app/",
    message: "Mon premier site de présentation professionnel.",
  },
  {
    title: "Te busco",
    year: "2020",
    link: "https://velogroup.itch.io/tebusco",
    message: "Un jeu de plateforme 2D basé dans ma ville natale.",
  },
];

export default function Projects({}) {
  return (
    <Column className="h-fit py-32 max-w-4xl mx-auto px-4 space-y-20">
      <Column className="space-y-10">
        <h2 className="text-4xl lg:text-5xl text-center">Un projet en dit plus que mille mots</h2>
        <Column className="space-y-2">
          {projects.map((project) => (
            <a
              className="flex flex-col cursor-pointer group space-y-2 p-5 border border-text-color rounded-xl"
              href={project.link}
              target={"_blank"}
            >
              <RowBetween>
                <Row className="space-x-2 items-end">
                  <p className="text-xl truncate font-semibold group-hover:underline">{project.title}</p>
                  <p className="text-sm">({project.year})</p>
                </Row>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </RowBetween>
              <p>{project.message}</p>
            </a>
          ))}
        </Column>
      </Column>
      <Column className="space-y-10">
        <h2 className="text-4xl lg:text-5xl text-center">Contactez-moi pour le prochain...</h2>
        <Column className="space-y-2">
          <RowCenter className="space-x-2 relative w-full p-8 group hover:shadow-lg transition-all border border-text-color rounded-xl">
            <OutlinedIconButton
              className="absolute transition-all -bottom-10 opacity-0 group-hover:opacity-100 group-hover:-bottom-5"
              onClick={() => {
                navigator.clipboard.writeText("dia.calvelo.nicolas@gmail.com");
                addCopyToClipboardToast("Copié dans le presse-papier !");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                />
              </svg>
            </OutlinedIconButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 transition-all pointer-events-none group-hover:opacity-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <p>dia.calvelo.nicolas@gmail.com</p>
          </RowCenter>
        </Column>
      </Column>
    </Column>
  );
}
