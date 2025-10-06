import React, { useEffect, useState } from "react";
import { Column } from "../../base/Layout/columns";
import { Row, RowBetween, RowCenter } from "../../base/Layout/rows";
import OutlinedIconButton from "../../base/Buttons/OutlinedIconButton";
import { addCopyToClipboardToast } from "../../base/Components/Toasts";
import { sendMessageToDiscord } from "../../helpers/DiscordHelper";

export default function SalonSpace() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    if (window.location.origin.includes("localhost")) return;
    const visitNumber = localStorage.getItem("visitNumber");
    localStorage.setItem("visitNumber", visitNumber ? parseInt(visitNumber) + 1 : 1);

    sendMessageToDiscord(
      visitNumber ? "Visit number " + visitNumber + " page salon-space !" : "New visitor page salon-space!"
    ).then((response) => {
      if (response.ok) {
        console.log("Message sent to Discord");
      } else {
        console.error("Error sending message to Discord");
      }
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section, header");
      const scrollY = window.scrollY;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 transition-transform duration-1000"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/flagged/photo-1571681384412-caacf825033d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundSize: "cover",
            backgroundPosition: `center ${currentSection * -20}px`,
            backgroundRepeat: "no-repeat",
            transform: `scale(${1 + currentSection * 0.02})`,
          }}
        />
        {/* Dynamic Gradient Overlay */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `linear-gradient(${135 + currentSection * 30}deg, 
              rgba(59, 130, 246, 0.8) 0%, 
              rgba(147, 51, 234, 0.8) 30%,
              rgba(236, 72, 153, 0.7) 60%,
              rgba(0, 0, 0, 0.9) 100%)`,
          }}
        />

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {[0, 1, 2, 3, 4, 5, 6].map((index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 cursor-pointer
              ${currentSection === index ? "bg-white scale-125" : "bg-transparent hover:bg-white/50"}`}
            onClick={() => {
              const sections = document.querySelectorAll("section, header");
              sections[index]?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen">
        {/* Hero Section */}
        <header className="flex flex-col lg:flex-row min-h-screen justify-center items-center px-4 lg:px-10 relative">
          {/* Floating Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "6s" }}
            />
            <div
              className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-bounce"
              style={{ animationDelay: "2s", animationDuration: "8s" }}
            />
            <div
              className="absolute bottom-20 left-1/4 w-20 h-20 bg-pink-500/10 rounded-full blur-xl animate-bounce"
              style={{ animationDelay: "4s", animationDuration: "7s" }}
            />
          </div>

          <div
            className={`flex-1 max-w-3xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Column className="space-y-8 text-center lg:text-left  px-5">
              {/* Main Title with Glitch Effect */}
              <div className="relative">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tight relative">
                  <span className="relative inline-block">
                    <span className="px-4 absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
                      Nicolas Calvelo
                    </span>
                    <span className="px-4 relative bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                      Nicolas Calvelo
                    </span>
                  </span>
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-25 animate-pulse" />
              </div>

              {/* Animated Subtitle */}
              <div className="relative overflow-hidden pl-4">
                <p className="text-2xl lg:text-4xl font-light bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Développeur Web{" "}
                  <span className="relative">
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-ping">
                      Fullstack
                    </span>
                    <span className="relative bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-bold">
                      Fullstack
                    </span>
                  </span>
                </p>
              </div>

              {/* Info Cards with Hover Effects */}
              <div className="space-y-6 pt-8">
                {[
                  { icon: "🗺️", text: "Rodez, Aveyron → Toulouse", color: "from-blue-500 to-cyan-500" },
                  {
                    icon: "🎓",
                    text: "Master 2 Ingenierié du web - ESGI Toulouse",
                    color: "from-purple-500 to-violet-500",
                  },
                  { icon: "⏰", text: "Disponible été 2026", color: "from-green-500 to-emerald-500" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group relative p-4 rounded-2xl border border-white/20 backdrop-blur-sm 
                      hover:scale-105 transition-all duration-300 cursor-pointer
                      bg-gradient-to-r ${item.color} bg-opacity-10 hover:bg-opacity-20`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Row className="justify-center lg:justify-start items-center space-x-4">
                      <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <p className="text-xl font-medium text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {item.text}
                      </p>
                    </Row>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="pt-8 space-y-6">
                <div className="relative p-6 rounded-3xl backdrop-blur-md border border-white/30 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    🚀 Salon de l'Espace - 8 Août 2025
                  </h2>
                  <p className="text-xl text-white/90 leading-relaxed">Créons ensemble le futur tech de Toulouse !</p>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/10 to-orange-400/10 animate-pulse" />
                </div>
              </div>
            </Column>
          </div>

          {/* Enhanced Photo Section */}
          <div
            className={`flex-1 max-w-lg transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Glowing Background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Photo Container */}
              <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden border-2 border-white/30 shadow-2xl backdrop-blur-sm">
                <img
                  src="/images/moi.jpg"
                  alt="Nicolas Calvelo - Développeur Web Fullstack"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating Tech Icons */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {["⚛️", "🔗", "🐘", "🚀"].map((icon, index) => (
                    <div
                      key={index}
                      className="absolute text-2xl animate-bounce"
                      style={{
                        left: `${20 + index * 20}%`,
                        top: `${30 + index * 15}%`,
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Skills & Journey Section */}
        <section className="py-32 px-4 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl font-black mb-6">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Mon
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Parcours
                </span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 mx-auto rounded-full" />
            </div>

            {/* Interactive Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

              {/* Timeline Items */}
              <div className="space-y-32">
                {[
                  {
                    year: "2022",
                    src: "/images/2022.jpg",
                    title: "🇦🇷 Le Grand Saut",
                    subtitle: "D'Argentine vers la France",
                    content:
                      "Une aventure qui a commencé par un rêve : développer mes compétences tech en Europe. De Buenos Aires à Paris, puis Rodez, chaque étape m'a forgé.",
                    color: "from-blue-500 to-cyan-500",
                    side: "left",
                  },
                  {
                    year: "2023",
                    src: "/images/2023.jpg",
                    title: "🎓 ESGI Paris",
                    subtitle: "Bac+3 en Ingénierie Web",
                    content:
                      "Formation intensive en développement web. Maîtrise de React, Symfony, et découverte de l'écosystème tech français. Une année transformatrice !",
                    color: "from-purple-500 to-violet-500",
                    side: "right",
                  },
                  {
                    year: "2024-2026",
                    src: "/images/2024.jpg",
                    title: "🚀 Master ESGI Toulouse",
                    subtitle: "Vers l'expertise technique",
                    content:
                      "Approfondissement en architecture logicielle, DevOps, et innovation. En alternance pour allier théorie et pratique dans des projets concrets.",
                    color: "from-green-500 to-emerald-500",
                    side: "left",
                  },
                  {
                    year: "2026",
                    src: "/images/toulouse.jpg",
                    title: "🎯 Objectif Toulouse",
                    subtitle: "Prêt pour de nouveaux défis",
                    content:
                      "Diplômé, expérimenté et passionné ! Prêt à rejoindre une équipe ambitieuse pour créer des solutions tech qui marquent.",
                    color: "from-yellow-500 to-orange-500",
                    side: "right",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${item.side === "left" ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`w-5/12 ${item.side === "left" ? "pr-16" : "pl-16"}`}>
                      <div
                        className={`group relative p-8 rounded-3xl backdrop-blur-md border border-white/20 
                        bg-gradient-to-br ${item.color} bg-opacity-10 hover:bg-opacity-20
                        hover:scale-105 transition-all duration-500 cursor-pointer`}
                      >
                        {/* Year Badge */}
                        <div
                          className={`absolute -top-4 ${item.side === "left" ? "-right-4" : "-left-4"} 
                          bg-gradient-to-r ${item.color} px-4 py-2 rounded-full text-black font-bold text-sm`}
                        >
                          {item.year}
                        </div>
                        {/* Photo Space */}
                        <div className="mb-6 rounded-2xl overflow-hidden border-2 border-white/20">
                          <img
                            src={item.src} // À remplir plus tard
                            alt={`Photo ${item.title}`}
                            className="w-full h-64 object-cover bg-gradient-to-br from-gray-700 to-gray-800 hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />
                          {/* Placeholder when no image */}
                          <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 items-center justify-center text-6xl opacity-50 hidden">
                            📸
                          </div>
                        </div>{" "}
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <h4 className="text-lg font-medium mb-4 text-gray-300">{item.subtitle}</h4>
                        <p className="text-gray-200 leading-relaxed">{item.content}</p>
                        {/* Hover Effect */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white 
                      bg-gradient-to-r ${item.color} animate-pulse`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Showcase */}
        <section className="py-32 px-4 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-black mb-16">
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>

            {/* Floating Tech Icons */}
            <div className="relative h-96 mb-16">
              {[
                { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400", delay: "0s" },
                { name: "Symfony", icon: "🎼", color: "from-purple-400 to-violet-400", delay: "0.5s" },
                { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-400", delay: "1s" },
                { name: "NextJS", icon: "▲", color: "from-gray-400 to-slate-400", delay: "1.5s" },
                { name: "MySQL", icon: "🗄️", color: "from-orange-400 to-red-400", delay: "2.5s" },
                { name: "Flutter", icon: "🦋", color: "from-blue-400 to-cyan-400", delay: "2s" },
                { name: "Git", icon: "🔀", color: "from-gray-400 to-gray-600", delay: "3s" },
                { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500", delay: "3.5s" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${15 + (index % 4) * 20}%`,
                    top: `${20 + Math.floor(index / 4) * 40}%`,
                    animationDelay: tech.delay,
                  }}
                >
                  <div
                    className={`relative p-6 rounded-2xl backdrop-blur-md border border-white/30 
                    bg-gradient-to-br ${tech.color} bg-opacity-20 hover:bg-opacity-40
                    hover:scale-125 hover:rotate-12 transition-all duration-500
                    animate-bounce hover:animate-none`}
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <p className="text-sm font-semibold text-white">{tech.name}</p>

                    {/* Glow Effect */}
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${tech.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="relative p-8 rounded-3xl backdrop-blur-md border border-white/30 bg-gradient-to-br from-gray-900/50 to-black/50">
              <p className="text-xl text-gray-300 mb-6">
                De la création de jeux vidéo au développement blockchain, j'explore constamment de nouvelles frontières
                technologiques.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Blockchain", "GameDev", "Machine Learning", "DevOps", "Mobile"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-full text-sm font-medium border border-white/20 hover:scale-110 transition-transform duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Passions Section */}
        <section className="py-32 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Mes
                </span>{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Passions
                </span>
              </h2>
              <p className="text-xl text-gray-300">Au-delà du code, ce qui me fait vibrer</p>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-yellow-400 mx-auto rounded-full mt-4" />
            </div>

            {/* Passion Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "🥟 Cuisine Argentine",
                  src: "/images/empanadas.jpg",
                  subtitle: "Empanadas sur le marché",
                  description:
                    "Depuis 1 an, je partage ma culture culinaire en vendant des empanadas traditionnelles sur le marché local de Rodez. Une passion qui connecte mes origines à ma nouvelle vie française.",
                  color: "from-yellow-500 to-orange-500",
                  icon: "👨‍🍳",
                },
                {
                  title: "🏀 Basketball",
                  src: "/images/basket.jpg",
                  description:
                    "Pratiqué toute ma vie jusqu'à une blessure qui m'a éloigné des terrains. Le basket m'a enseigné l'esprit d'équipe, la persévérance et la stratégie - des valeurs que j'applique au quotidien.",
                  color: "from-orange-500 to-red-500",
                  icon: "⛹️‍♂️",
                },
                {
                  title: "✈️ Voyages & Cultures",
                  src: "/images/travel.jpg",
                  subtitle: "Explorateur de diversité",
                  description:
                    "Passionné par les échanges interculturels et les voyages. Chaque rencontre enrichit ma vision du monde et nourrit ma créativité. L'Argentine, la France, et bien d'autres horizons...",
                  color: "from-blue-500 to-purple-500",
                  icon: "🌍",
                },
              ].map((passion, index) => (
                <div
                  key={index}
                  className={`group relative p-8 rounded-3xl backdrop-blur-md border border-white/30 
                    bg-gradient-to-br ${passion.color} bg-opacity-10 hover:bg-opacity-20
                    hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${passion.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  <div className="relative space-y-6">
                    {/* Photo Space */}
                    <div className="rounded-2xl overflow-hidden border-2 border-white/20 mb-6">
                      <img
                        src={passion.src}
                        alt={`Photo ${passion.title}`}
                        className="w-full h-64 object-cover bg-gradient-to-br from-gray-700 to-gray-800 hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    </div>

                    <div className="text-center">
                      <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">
                        {passion.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {passion.title}
                      </h3>
                      <h4 className="text-lg font-medium mb-4 text-gray-300">{passion.subtitle}</h4>
                    </div>

                    <p className="text-gray-200 leading-relaxed text-center">{passion.description}</p>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${passion.color} animate-ping`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Personal Touch */}
            <div className="mt-16 text-center">
              <div className="relative p-8 rounded-3xl backdrop-blur-md border border-white/30 bg-gradient-to-br from-gray-900/50 to-black/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-3xl blur opacity-20 animate-pulse" />

                <div className="relative">
                  <h3 className="text-3xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      🤝 Plus qu'un développeur
                    </span>
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Je crois que les meilleures équipes sont construites sur la diversité, la passion partagée et
                    l'authenticité. Mes expériences de vie nourrissent ma créativité technique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-32 px-4 bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-black mb-16">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Langues
              </span>
            </h2>

            {/* Language Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  language: "Español",
                  level: "Langue Maternelle",
                  flag: "🇦🇷",
                  description: "Natif d'Argentine",
                  color: "from-blue-700 to-cyan-700",
                  percentage: "100%",
                },
                {
                  language: "Français",
                  level: "Courant",
                  flag: "🇫🇷",
                  description: "3 ans d'immersion",
                  color: "from-purple-700 to-violet-700",
                  percentage: "85%",
                },
                {
                  language: "English",
                  level: "B1 Certifié",
                  flag: "🇬🇧",
                  description: "Cambridge First & TOEIC",
                  color: "from-green-700 to-emerald-700",
                  percentage: "70%",
                },
              ].map((lang, index) => (
                <div
                  key={index}
                  className={`group relative p-8 rounded-3xl backdrop-blur-md border border-white/30 
                    bg-gradient-to-br ${lang.color} bg-opacity-10 hover:bg-opacity-20
                    hover:scale-105 transition-all duration-500 cursor-pointer`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${lang.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  <div className="relative text-center space-y-4">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">
                      {lang.flag}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {lang.language}
                      </h3>
                      <p className="text-lg font-medium mb-2 text-gray-100">{lang.level}</p>
                      <p className="text-sm text-gray-200 mb-4">{lang.description}</p>

                      {/* Progress Bar */}
                      <div className="w-full bg-white/50 rounded-full h-3 p-0.5 mb-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${lang.color} transition-all duration-1000`}
                          style={{ width: lang.percentage }}
                        />
                      </div>
                      <p className="text-xs text-gray-200">{lang.percentage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Communication Message */}
            <div className="relative p-8 rounded-3xl backdrop-blur-md border border-white/30 bg-gradient-to-br from-gray-900/50 to-black/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl blur opacity-20 animate-pulse" />

              <div className="relative">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    🌍 Communication Internationale
                  </span>
                </h3>
                <p className="text-lg text-gray-300">
                  Capable d'évoluer dans des équipes multiculturelles et de communiquer efficacement avec des clients
                  internationaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Toulouse 2026 Vision */}
        <section className="py-32 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Main CTA */}
            <div className="relative mb-16">
              <h2 className="text-6xl lg:text-8xl font-black mb-8">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                  TOULOUSE
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  2026
                </span>
              </h2>

              {/* Animated Line */}
              <div className="w-64 h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 mx-auto rounded-full animate-pulse" />
            </div>

            {/* Impact Statement */}
            <div className="relative p-12 rounded-3xl backdrop-blur-md border border-white/30 bg-gradient-to-br from-gray-900/50 to-black/50 mb-16">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl blur opacity-20 animate-pulse" />

              <div className="relative space-y-8">
                <div className="text-8xl mb-6">🎯</div>

                <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Prêt à conquérir l'écosystème tech toulousain !
                  </span>
                </h3>

                <div className="grid md:grid-cols-3 gap-8 text-left">
                  {[
                    {
                      icon: "🚀",
                      title: "Innovation",
                      desc: "Apporter des solutions créatives aux défis technologiques de demain",
                    },
                    {
                      icon: "🤝",
                      title: "Collaboration",
                      desc: "Intégrer une équipe passionnée pour créer ensemble des projets ambitieux",
                    },
                    {
                      icon: "📈",
                      title: "Croissance",
                      desc: "Continuer à apprendre et évoluer dans un environnement stimulant",
                    },
                  ].map((item, index) => (
                    <div key={index} className="group text-center hover:scale-105 transition-transform duration-300">
                      <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-yellow-400">{item.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Countdown */}
                <div className="pt-8 border-t border-white/20">
                  <p className="text-2xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                      Fin d'alternance dans moins de 1 an !
                    </span>
                  </p>
                  <p className="text-lg text-gray-300">
                    Construisons dès maintenant les fondations de notre future collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-4 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Restons Connectés !
                </span>
              </h2>
              <p className="text-xl text-gray-300">Créons ensemble l'avenir tech de Toulouse</p>
            </div>

            {/* Enhanced Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Email Card */}
              <div
                onClick={() => {
                  navigator.clipboard.writeText("dia.calvelo.nicolas@gmail.com");
                  addCopyToClipboardToast("Email copié ! Contactez-moi 🚀");
                }}
                className="group relative p-8 rounded-3xl backdrop-blur-md border border-white/30 
                  bg-gradient-to-br from-blue-900/30 to-purple-900/30 cursor-pointer
                  hover:scale-105 hover:border-blue-400/50 transition-all duration-500"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative text-center space-y-6">
                  <div className="relative">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">📧</div>
                    <div className="absolute inset-0 animate-ping opacity-75">
                      <div className="text-6xl">📧</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      Email Direct
                    </h3>
                    <p className="text-blue-200 text-lg mb-4">dia.calvelo.nicolas@gmail.com</p>
                    <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                      Cliquer pour copier • Réponse garantie en 24h !
                    </p>
                  </div>

                  {/* Copy Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">COPY</div>
                  </div>
                </div>
              </div>

              {/* Portfolio Card */}
              <div
                onClick={() => window.open("https://nicocalvelo.com", "_blank")}
                className="group relative p-8 rounded-3xl backdrop-blur-md border border-white/30 
                  bg-gradient-to-br from-purple-900/30 to-pink-900/30 cursor-pointer
                  hover:scale-105 hover:border-purple-400/50 transition-all duration-500"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative text-center space-y-6">
                  <div className="relative">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">🌐</div>
                    <div className="absolute inset-0 animate-spin opacity-50" style={{ animationDuration: "8s" }}>
                      <div className="text-6xl">⭐</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      Portfolio & Projets
                    </h3>
                    <p className="text-purple-200 text-lg mb-4">nicocalvelo.com</p>
                    <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                      Découvrez mes réalisations • Projets en live !
                    </p>
                  </div>

                  {/* External Link Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-purple-400 text-white px-2 py-1 rounded-full text-xs font-bold">VISIT</div>
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div
                onClick={() => window.open("https://www.linkedin.com/in/nico-calvelo-1089181b6/", "_blank")}
                className="group relative p-8 rounded-3xl backdrop-blur-md border border-white/30 
                  bg-gradient-to-br from-green-900/30 to-blue-900/30 cursor-pointer
                  hover:scale-105 hover:border-green-400/50 transition-all duration-500"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

                <div className="relative text-center space-y-6">
                  <div className="relative">
                    <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-500">💼</div>
                    <div className="absolute inset-0 animate-bounce opacity-50" style={{ animationDuration: "3s" }}>
                      <div className="text-6xl">✨</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      LinkedIn
                    </h3>
                    <p className="text-green-200 text-lg mb-4">Profil Professionnel</p>
                    <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                      Connectons-nous • Réseau pro
                    </p>
                  </div>

                  {/* LinkedIn Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-green-400 text-white px-2 py-1 rounded-full text-xs font-bold">CONNECT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-16 text-center">
              <div className="inline-block p-6 rounded-2xl backdrop-blur-md border border-white/20 bg-gradient-to-r from-gray-900/50 to-black/50">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">3+</div>
                    <div className="text-sm text-gray-400">Années en France</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">10+</div>
                    <div className="text-sm text-gray-400">Projets réalisés</div>
                  </div>
                  <div className="w-px h-12 bg-white/20" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">100%</div>
                    <div className="text-sm text-gray-400">Passion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="py-16 px-4 border-t border-white/20 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Event Reminder */}
            <div className="relative p-8 rounded-3xl backdrop-blur-md border-2 border-yellow-400/50 bg-gradient-to-br from-yellow-900/20 to-orange-900/20">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl blur opacity-20 animate-pulse" />

              <div className="relative">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Salon de l'Espace - Toulouse
                  </span>
                </h3>
                <p className="text-xl text-white mb-4">Mercredi 8 Août 2025</p>
                <p className="text-lg">
                  <span className="text-yellow-300 font-semibold">Venez me dire bonjour !</span>
                  <span className="text-gray-300"> On parlera tech, projets et... mate ! 🧉</span>
                </p>
              </div>
            </div>

            {/* Final Message */}
            <div className="text-center space-y-4">
              <p className="text-gray-400 text-sm">Fait avec ❤️ et beaucoup de 🧉 par Nicolas Calvelo</p>
              <div className="flex justify-center space-x-4 text-xs text-gray-500">
                <span>React</span>
                <span>•</span>
                <span>Tailwind</span>
                <span>•</span>
                <span>Firebase</span>
                <span>•</span>
                <span>Passion</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
