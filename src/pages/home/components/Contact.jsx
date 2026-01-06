import React, { useState } from "react";
import { Column } from "../../../base/Layout/columns";
import { Row } from "../../../base/Layout/rows";

export default function Contact() {
  const [showReference, setShowReference] = useState(false);
  const [copied, setCopied] = useState("");

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
      ),
      label: "Email",
      value: "dia.calvelo.nicolas@gmail.com",
      link: null,
      color: "from-red-500 to-pink-500",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
          <path
            fillRule="evenodd"
            d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: "Localisation",
      value: "Toulouse, France",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
          <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
        </svg>
      ),
      label: "Linkedin",
      value: "Nico Calvelo",
      link: "https://www.linkedin.com/in/nico-calvelo-1089181b6/",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
          <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
        </svg>
      ),
      label: "GitHub",
      value: "github.com/nicocalvelo",
      link: "https://github.com/nicocalvelo",
      color: "from-gray-800 to-gray-900",
    },
  ];

  const languages = [
    { name: "Anglais", level: "B2 - TOEIC Certifié", percentage: 85 },
    { name: "Français", level: "Courant", percentage: 95 },
    { name: "Espagnol", level: "Maternel", percentage: 100 },
  ];

  return (
    <section className="my-20 lg:my-32 px-5">
      <Column className="space-y-10 max-w-6xl mx-auto">
        {/* Header */}
        <Column className="space-y-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-medium">Contactez-moi</h2>
          <p className="text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
            Disponible pour discuter de votre projet ou d'opportunités professionnelles
          </p>
        </Column>

        {/* Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={info.label}
              className="group cursor-pointer"
              onClick={() => {
                if (info.link) window.open(info.link, "_blank");
                else copyToClipboard(info.value, info.label);
              }}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-purple-500/20">
                <Column className="space-y-3 items-center text-center h-full justify-between">
                  <div
                    className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-3xl lg:text-4xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {info.icon}
                  </div>
                  <Column className="space-y-1">
                    <p className="text-xs lg:text-sm font-semibold text-slate-400 uppercase tracking-wide">
                      {info.label}
                    </p>
                    <p className="text-sm lg:text-base font-medium text-slate-100 break-words">{info.value}</p>
                  </Column>
                  {copied === info.label && (
                    <span className="text-xs text-purple-400 font-medium animate-pulse">✓ Copié!</span>
                  )}
                </Column>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-purple-500/20">
          <Column className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-medium text-center text-slate-100">Langues</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {languages.map((lang) => (
                <Column
                  key={lang.name}
                  className="space-y-3 bg-slate-700/50 rounded-xl p-4 lg:p-5 border border-purple-500/10"
                >
                  <Column className="space-y-1">
                    <p className="font-bold text-base lg:text-lg text-slate-100">{lang.name}</p>
                    <p className="text-xs lg:text-sm text-slate-400">{lang.level}</p>
                  </Column>
                  <div className="h-2 bg-slate-600/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </Column>
              ))}
            </div>
          </Column>
        </div>

        {/* CTA Button - Download CV */}
        <div className="flex justify-center pt-10">
          <a
            href="https://drive.google.com/file/d/1ef-xuTASFqBKIuuMIM6uQ3oe2nnEeC1J/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <div className="relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white font-bold text-lg flex items-center gap-3 shadow-xl">
              <span>Télécharger mon CV</span>
              <span className="text-xl transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>
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
