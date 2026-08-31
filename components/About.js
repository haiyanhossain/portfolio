export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for clean, intuitive design and robust backend architecture. With experience in modern web technologies, I love turning ideas into reality through code.
            </p>
            <p className="text-lg text-text-light mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing.
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-text mb-6">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-accent mb-2">Frontend</p>
                <ul className="text-text-light space-y-1 text-sm">
                  <li>React / Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript/TypeScript</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-accent mb-2">Backend</p>
                <ul className="text-text-light space-y-1 text-sm">
                  <li>Node.js</li>
                  <li>PostgreSQL</li>
                  <li>REST APIs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
