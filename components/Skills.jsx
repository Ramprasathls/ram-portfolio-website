
const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  Design: ["Figma", "Photoshop"],
  Tools: ["WordPress", "Git"]
};

export default function Skills() {
  return (
    <section id="skills" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {Object.entries(skills).map(([group, items]) => (
          <div className="card" key={group}>
            <h3 className="font-semibold">{group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
