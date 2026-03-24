import Image from "next.js/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-ci-surface text-ci-white font-body selection:bg-ci-rose selection:text-ci-white">
      {/* Navbar Stub */}
      <header className="fixed w-full top-0 left-0 z-50 bg-ci-dark/90 backdrop-blur-md border-b border-ci-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-ci-blue flex items-center justify-center">
              <span className="font-headline text-ci-dark font-bold text-xl">O</span>
            </div>
            <span className="font-headline text-2xl tracking-wide">OUTLY</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#events" className="text-ci-muted hover:text-ci-white transition-colors">Events</a>
            <a href="#flea-markets" className="text-ci-muted hover:text-ci-white transition-colors">Flea Markets</a>
            <a href="#app" className="text-ci-muted hover:text-ci-white transition-colors">The App</a>
          </nav>
          <button className="bg-ci-blue hover:bg-ci-blueDM text-ci-dark font-headline px-6 py-2.5 rounded-full transition-colors uppercase tracking-wider text-sm">
            Get Beta
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 min-h-[90vh]">
        <div className="flex-1 flex flex-col gap-8 text-center lg:text-left z-10">
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-1.5 rounded-full bg-ci-rose/10 border border-ci-rose/20 text-ci-rose w-fit mx-auto lg:mx-0">
            <span className="w-2 h-2 rounded-full bg-ci-rose animate-pulse"></span>
            <span className="text-sm font-medium uppercase tracking-wider">More real experiences</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-headline uppercase leading-[1.1]">
            Less scrolling. <br />
            <span className="text-ci-blue">More living.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ci-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Die erste Anlaufstelle für spontane Erlebnisse in deiner Stadt. Finde Partys, Flohmärkte und lokale Kultur – so selbstverständlich wie Navigation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4">
            <button className="w-full sm:w-auto bg-ci-blue hover:bg-ci-blueDM text-ci-dark font-headline px-8 py-4 rounded-full transition-all hover:scale-105 uppercase tracking-wider text-lg">
              Ist das tuff?
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-ci-border hover:border-ci-rose hover:text-ci-rose text-ci-white font-headline px-8 py-4 rounded-full transition-colors uppercase tracking-wider text-lg">
              Explore Events
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full aspect-square max-w-[500px] lg:max-w-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-ci-blue/20 to-ci-rose/20 rounded-full blur-3xl"></div>
          {/* Placeholder for Mascot - we use a rounded box with text until the vector is ready */}
          <div className="relative w-full h-full bg-ci-dark border border-ci-border rounded-3xl shadow-2xl flex flex-col items-center justify-center overflow-hidden">
            <div className="text-9xl mb-4">🐾</div>
            <p className="font-headline text-ci-muted uppercase tracking-widest">[ MASCOT VECTOR GOES HERE ]</p>
          </div>
        </div>
      </section>
    </main>
  );
}
