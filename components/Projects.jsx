
const data = [
  {
    title: "E-commerce Store",
    desc: "A modern storefront with product browsing and checkout.",
  },
  {
    title: "Restaurant Website",
    desc: "A responsive site with menu, reservation, and gallery.",
  },
  {
    title: "Portfolio Blog",
    desc: "A content-focused blog with markdown and tagging.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">My Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p, i) => (
          <div className="card hover:shadow-xl transition" key={i}>
            <div className="h-36 rounded-xl bg-white/5 border border-white/10 mb-4" />
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-gray-300 mt-1">{p.desc}</p>
            <button className="mt-4 px-3 py-2 rounded-lg border border-white/20 hover:bg-white/10">
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
