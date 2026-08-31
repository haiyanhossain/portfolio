export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-16 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building modern, scalable web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless user experiences backed by robust server architecture.
            </p>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              I thrive in collaborative environments where I can contribute to challenging projects, mentor team members, and continuously learn new technologies. My approach combines technical excellence with a deep understanding of user needs and business requirements.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              When I'm not coding, I'm exploring emerging technologies, contributing to open-source projects, writing technical articles, and staying updated with industry best practices.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                <span className="text-2xl">💻</span> Frontend
              </h3>
              <ul className="text-text-light space-y-3 text-base">
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> React.js & React Hooks</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> Next.js 14+</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> Tailwind CSS & Responsive Design</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> JavaScript/TypeScript</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> State Management (Redux, Context API)</li>
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                <span className="text-2xl">⚙️</span> Backend
              </h3>
              <ul className="text-text-light space-y-3 text-base">
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> Node.js & Express.js</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> PostgreSQL & MongoDB</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> RESTful APIs & GraphQL</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> Authentication & Authorization</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> Cloud Services (AWS, Firebase)</li>
              </ul>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                <span className="text-2xl">🛠️</span> Tools & DevOps
              </h3>
              <ul className="text-text-light space-y-3 text-base">
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> Git & GitHub</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> Docker & Docker Compose</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> CI/CD Pipelines</li>
                <li className="flex items-center gap-2"><span className="text-accent">▸</span> Testing (Jest, Cypress)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
