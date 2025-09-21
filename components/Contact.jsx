
export default function Contact() {
  return (
    <section id="contact" className="container py-12">
      <h2 className="text-2xl font-semibold mb-6">Contact</h2>
      <div className="card">
        <p className="text-gray-200">
          Email: <a className="underline" href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <div className="mt-3 flex gap-3 text-sm">
          <a className="underline" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="underline" href="#" target="_blank" rel="noreferrer">GitHub</a>
          <a className="underline" href="#" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
    </section>
  );
}
