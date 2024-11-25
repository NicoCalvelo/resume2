import React from "react";
import moment from "moment";
import { Row } from "../../../base/Layout/rows";
import { Column } from "../../../base/Layout/columns";
import { Transition, TransitionChild } from "@headlessui/react";

export default function Header({}) {
  return (
    <header
      className="flex flex-col lg:flex-row h-screen lg:justify-center lg:space-x-10 lg:p-10 items-center"
      role="banner"
    >
      <Transition
        as="div"
        appear
        show={true}
        className="relative h-3/4 lg:h-4/5 p-10 lg:mx-10 lg:p-4"
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
            className="h-full w-full shadow-xl rounded-4xl"
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
            className="aspect-square object-cover shadow-xl rounded-4xl h-full w-full"
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
            className="shadow-xl rounded-4xl h-full w-full"
          />
        </TransitionChild>
      </Transition>
      <Column className="p-5 pt-2 w-fit space-y-2 lg:space-y-6">
        <h1 className="lg:text-7xl">Nicolas Calvelo</h1>
        <Column className="space-y-2">
          <Row className="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 lg:w-8 lg:h-8"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-bold lg:text-lg">Argentin en France</p>
          </Row>
          <Row className="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 lg:w-8 lg:h-8"
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
            </svg>
            <p className="font-bold lg:text-lg">Developpeur web</p>
          </Row>
          <Row className="space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 lg:w-8 lg:h-8"
            >
              <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z" />
            </svg>
            <p className="font-bold lg:text-lg">{moment().diff("2002-03-03", "years")} ans</p>
          </Row>
        </Column>
      </Column>
    </header>
  );
}
