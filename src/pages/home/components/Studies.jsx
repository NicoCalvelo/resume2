import React from "react";
import { Column } from "../../../base/Layout/columns";
import { Row, RowBetween, RowCenter } from "../../../base/Layout/rows";
import OutlinedIconButton from "../../../base/Buttons/OutlinedIconButton";
import { addCopyToClipboardToast, addToastSucces } from "../../../base/Components/Toasts";

const studies = [
  {
    title: "Cycle Master à l'ESGI Toulouse",
    year: " 2024 / 2026 ",
    link: "https://www.esgi.fr/programmes/ingenierie-web.html",
    message:
      "Actuellement en formation en alternance en développement web. Un cycle de deux ans pour devenir un expert en ingénierie informatique.",
  },
  {
    title: "Bac +3 Ingénierie du Web à l'ESGI Paris",
    year: " 2023 / 2024 ",
    link: "https://www.esgi.fr/programmes/ingenierie-web.html",
    message:
      "Formation en alternance en développement web. Un année très enrichissante en experiences et en connaissances.",
  },
];

export default function Studies({}) {
  return (
    <section className="flex flex-col h-fit pt-32 max-w-4xl mx-auto px-4 space-y-20">
      <Column className="space-y-10">
        <h1 className="text-4xl lg:text-5xl text-center">Mon parcours académique</h1>
        <Column className="space-y-2">
          {studies.map((study) => (
            <a
              className="relative flex flex-col cursor-pointer group space-y-2 p-5 border border-text-color rounded-xl"
              href={study.link}
              target={"_blank"}
            >
              <Row className="space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
                <Column className="flex-grow">
                  <p className="text-sm">({study.year})</p>
                  <p className="text-xl font-semibold group-hover:underline">{study.title}</p>
                </Column>
              </Row>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute top-2 right-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              <p className="text-sm sm:text-base sm:px-4">{study.message}</p>
            </a>
          ))}
        </Column>
      </Column>
    </section>
  );
}
