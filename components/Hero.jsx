
export default function Hero() {
  return (
    <section className="container py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-indigo-300">Sarah Johnson</span>
          </h1>
          <p className="mt-3 text-lg text-gray-200">Web Developer & Designer</p>
          <p className="mt-4 text-gray-300 max-w-prose">
            I create beautiful, functional websites that help businesses grow.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white">View My Work</a>
            <a href="#contact" className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10">Get In Touch</a>
          </div>
        </div>
        <div className="h-64 sm:h-80 w-full rounded-2xl bg-gradient-to-br from-indigo-800/40 to-indigo-400/20 border border-white/10 flex items-center justify-center">
          <div className="w-48 h-48 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="text-sm text-gray-300">Photo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
