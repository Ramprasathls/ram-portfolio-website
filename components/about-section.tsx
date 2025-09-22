export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I’m a Technology Consultant and AI/Data Enthusiast with experience delivering enterprise-scale HR technology solutions
 		and now building expertise in data science and AI. I enjoy bridging business needs with innovative technical solutions.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When I’m not working on projects, I spend time sketching, exploring new ideas, or hiking outdoors for inspiration.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Problem Solver</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Team Player</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Continuous Learner</span>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Interests & Hobbies</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>AI & Data Science Projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Sketching & Creative Arts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Tech Meetups & Conferences</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Hiking & Outdoor Adventures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
