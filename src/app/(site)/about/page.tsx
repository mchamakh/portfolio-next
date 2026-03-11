import Skills from "@/components/Skills";
import RevealOnce2 from "@/components/RevealOnce2";

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="clash font-semibold text-white">{children}</strong>
);
export default function AboutPage() {
  return (
    <section id="apropos" className="px-4 pb-24 pt-24 scroll-mt-28">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="clash text-5xl sm:text-6xl text-[#c0feff] font-semibold text-center">
          À propos
        </h2>

        {/* Text block */}
        <div className="mt-10 rounded-3xl  p-8 sm:p-10">
          <div className="mx-auto max-w-3xl text-center space-y-6 text-zinc-300 text-lg leading-relaxed">
            <div className="mx-auto max-w-3xl text-center space-y-6 text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed">
              <RevealOnce2>
                <p>
                  Hello, je m&apos;appelle <Strong>Myriam Chamakh</Strong>.{" "}
                  <br />
                  Développeuse web en formation à Zone01, avec un profil{" "}
                  <Strong>full-stack</Strong> construit à travers des projets
                  concrets (API, bases de données, logique serveur, intégration
                  front-end).
                </p>
              </RevealOnce2>

              <RevealOnce2>
                <p>
                  Ma spécialisation et ma passion se situent clairement côté{" "}
                  <Strong>front-end</Strong> et <Strong>UI/UX</Strong>. J’aime
                  transformer une maquette en interface{" "}
                  <Strong>responsive</Strong>, travailler la{" "}
                  <Strong>typographie</Strong>, les{" "}
                  <Strong>micro-interactions</Strong> et les détails qui rendent
                  l’expérience fluide et cohérente.
                </p>
              </RevealOnce2>

              <RevealOnce2>
                <p>
                  Cette double compétence me permet de concevoir des interfaces
                  en tenant compte des <Strong>contraintes techniques</Strong>{" "}
                  et de la <Strong>vision globale du produit</Strong>.
                </p>
              </RevealOnce2>

              <RevealOnce2>
                <p>
                  Mon objectif : évoluer dans un rôle orienté{" "}
                  <Strong>front-end / UI-UX</Strong>, tout en conservant cette
                  approche <Strong>full-stack</Strong>.
                </p>
              </RevealOnce2>
            </div>
          </div>

          {/* subtle divider */}
        </div>
        {/* Skills */}
        <Skills />
      </div>
    </section>
  );
}
