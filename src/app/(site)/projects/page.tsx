import Reveal from "@/components/Reveal";
import RevealOnce from "@/components/RevealOnce";

export default function ProjectsPage() {
  return (
    <section
      id="projets"
      className="relative z-10 bg-black px-4 pt-16 pb-24
      before:absolute before:inset-x-0 before:-top-64 before:h-64
      before:bg-linear-to-b before:from-transparent before:to-black
      before:content-['']"
    >
      <div className="mx-auto max-w-7xl">
        <RevealOnce>
          <h2 className="clash text-5xl sm:text-6xl text-[#c0feff] font-semibold text-center pt-24">
            Projets
          </h2>
        </RevealOnce>

        {/* PROJET 1 */}
        <div className="mt-24 grid gap-10 items-center lg:grid-cols-2">
          <RevealOnce>
            <div className="w-full rounded-3xl">
              <video
                className="w-full rounded-2xl object-cover"
                src="/videos/MYG.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </RevealOnce>

          <RevealOnce>
            <div>
              <h3 className="clash text-3xl sm:text-4xl tracking-tight">
                Make Your Game
              </h3>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Projet réalisé en équipe — recréation de{" "}
                <span className="clash text-white font-semibold">
                  Super Mario Bros
                </span>{" "}
                en{" "}
                <span className="clash text-white font-semibold">
                  JavaScript pur
                </span>
                , sans canvas et sans framework. Le défi : construire un moteur
                de jeu from scratch capable de tourner à{" "}
                <span className="clash text-white font-semibold">
                  60 FPS stables
                </span>
                , sans le moindre frame drop. On a implémenté une game loop
                basée sur{" "}
                <span className="clash text-white font-semibold">
                  requestAnimationFrame
                </span>
                , un système de détection de{" "}
                <span className="clash text-white font-semibold">
                  collisions (hitboxes)
                </span>{" "}
                précis, et une gestion des inputs clavier fluide — maintien de
                touche, pas de spam nécessaire. Le rendu est optimisé via un
                minimum de{" "}
                <span className="clash text-white font-semibold">
                  DOM layers
                </span>{" "}
                pour éviter tout jank (saccades). Spritesheets animées, pause
                menu (continuer / relancer), scoreboard avec timer, score et
                vies.
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex flex-col gap-2">
                  <span className="clash text-[#c0feff]/50 font-semibold">
                    Front
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "requestAnimationFrame"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[#c0feff] border border-[#c0feff] hover:bg-[#c0feff] hover:text-black transition text-xs sm:text-sm"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="clash text-[#c0feff]/50 font-semibold">
                    Engine
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Game Loop",
                      "Hitbox System",
                      "Spritesheet Animation",
                      "DOM Rendering",
                      "60 FPS",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[#c0feff] border border-[#c0feff] hover:bg-[#c0feff] hover:text-black transition text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnce>
        </div>

        {/* PROJET 2 */}
        <div className="mt-24 grid gap-10 items-center lg:grid-cols-2 lg:[&>*:first-child]:order-2">
          <RevealOnce>
            <div className="w-full rounded-3xl">
              <video
                className="w-full rounded-2xl object-cover"
                src="/videos/GT.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </RevealOnce>

          <RevealOnce>
            <div>
              <h3 className="clash text-3xl sm:text-4xl tracking-tight">
                Groupie Tracker
              </h3>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Projet d'équipe{" "}
                <span className="clash text-white font-semibold">
                  full-stack
                </span>{" "}
                autour d'une API musicale composée de 4 endpoints liés :
                artistes, membres, dates de concerts et lieux. Contrainte
                principale : backend écrit exclusivement en{" "}
                <span className="clash text-white font-semibold">Go</span> avec
                les packages standard uniquement — zéro librairie externe,
                gestion complète des erreurs et serveur qui ne crashe jamais.
                Côté front : affichage en cards, recherche en temps réel et{" "}
                <span className="clash text-white font-semibold">
                  filtres multi-critères
                </span>{" "}
                (date de création, premier album, nombre de membres, lieux de
                concerts) avec deux types de filtres —{" "}
                <span className="clash text-white font-semibold">range</span> et{" "}
                <span className="clash text-white font-semibold">checkbox</span>
                . On a aussi intégré de la{" "}
                <span className="clash text-white font-semibold">
                  géolocalisation
                </span>{" "}
                : conversion des adresses de concerts en coordonnées
                géographiques pour placer des marqueurs sur une carte via une{" "}
                <span className="clash text-white font-semibold">Map API</span>.
                Architecture{" "}
                <span className="clash text-white font-semibold">
                  client-serveur
                </span>{" "}
                avec événements déclenchés côté client pour charger
                dynamiquement les données liées via des requêtes{" "}
                <span className="clash text-white font-semibold">HTTP</span>{" "}
                vers le backend Go.
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-start flex-wrap gap-y-2">
                  <span className="clash w-24 text-[#c0feff]/50 font-semibold shrink-0">
                    Front
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "Fetch API",
                      "Filters / Search",
                      "Geolocation",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[#c0feff] border border-[#c0feff] hover:bg-[#c0feff] hover:text-black transition text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start flex-wrap gap-y-2">
                  <span className="clash w-24 text-[#c0feff]/50 font-semibold shrink-0">
                    Back
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Go",
                      "net/http",
                      "REST API",
                      "JSON Parsing",
                      "Geocoding",
                      "Error Handling",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[#c0feff] border border-[#c0feff] hover:bg-[#c0feff] hover:text-black transition text-xs sm:text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnce>
        </div>
      </div>
    </section>
  );
}
