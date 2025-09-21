
export default function About() {
  return (
    <section id="about" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">About Me</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <p className="text-gray-200">
            I'm a developer who enjoys building sleek, accessible web experiences.
            I love solving problems, learning new tools, and collaborating with
            teams to ship delightful products.
          </p>
          <p className="mt-3 text-gray-300">
            Outside of work: coffee ☕, photography 📸, travel ✈, and coding 💻.
          </p>
        </div>
        <div className="card">
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Coffee ☕</li>
            <li>Photography 📸</li>
            <li>Travel ✈</li>
            <li>Coding 💻</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
