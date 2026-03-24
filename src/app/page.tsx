import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-zinc-900 text-white font-sans">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-800 bg-gradient-to-b from-zinc-900 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-zinc-800/30 lg:p-4">
          Outly – Dein Erlebnisguide für spontane Events in Echtzeit
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-zinc-900 via-zinc-900 lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://outly.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <span className="font-bold text-orange-500 text-2xl tracking-tighter">OUTLY</span>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center flex-col gap-8 my-16">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
          src="/assets/logo_dark_draft.png"
          alt="Outly Logo"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 text-center leading-tight">
          More real experiences. <br/> Less scrolling.
        </h1>
        <p className="text-xl text-zinc-400 text-center max-w-2xl mt-4 leading-relaxed">
          Die erste Anlaufstelle für spontane Erlebnisse — so selbstverständlich wie Google Maps für Navigation. 
          Egal, ob du den versteckten Flohmarkt um die Ecke suchst, neue Leute bei einem Workshop kennenlernen willst, 
          oder die beste Party der Nacht planst. Outly macht’s möglich.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105">
            App Downloaden
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-full font-bold transition-all border border-zinc-700">
            Event eintragen
          </button>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-8 mt-16">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-800 hover:bg-zinc-800/30">
          <h2 className="mb-3 text-2xl font-semibold text-orange-400">
            Entdecken 🔍
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-70">
            Authentische Erlebnisse finden. Kein Algorithmus, der dich in einer Bubble hält.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-800 hover:bg-zinc-800/30">
          <h2 className="mb-3 text-2xl font-semibold text-orange-400">
            Spontan ⚡
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-70">
            Jetzt entdecken, nicht planen. Was geht genau in diesem Moment ab?
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-800 hover:bg-zinc-800/30">
          <h2 className="mb-3 text-2xl font-semibold text-orange-400">
            Lokal 📍
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-70">
            Deine Stadt, dein Viertel. Von Flohmarkt bis Rave. Warm wie ein Sommerabend mit Freunden.
          </p>
        </div>
      </div>
    </main>
  );
}
