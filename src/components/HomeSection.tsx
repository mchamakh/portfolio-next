import RevealOnce from "@/components/RevealOnce";
export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-zinc-950 bg-cover bg-center bg-no-repeat bg-scroll"
      style={{ backgroundImage: "url('/gradient.png')" }}
    >
      <div className="min-h-screen bg-black/40 flex items-center justify-center px-4">
        <div className="max-w-2xl text-center text-zinc-100">
          <RevealOnce>
            <p className="text-base sm:text-lg text-zinc-300">
              Développeuse web • Front-end orientée UI/UX
            </p>
            <h1 className="clash text-4xl sm:text-7xl font-semibold tracking-tight">
              Portfolio,
            </h1>
            <h2 className="rilen text-[#c0feff] text-6xl sm:text-9xl font-semibold tracking-tight">
              Myriam Chamakh
            </h2>
          </RevealOnce>
        </div>
      </div>
    </section>
  );
}
