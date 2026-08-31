export default function About() {
  return (
    <section id="about" className="py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-text mb-16 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg text-text-light mb-6 leading-relaxed">I'm a passionate full-stack developer with expertise in building modern, scalable web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless user experiences backed by robust server architecture.</p>
            <p className="text-lg text-text-light leading-relaxed">I thrive in collaborative environments and continuously learn new technologies.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-text mb-4">Frontend</h3>
              <ul className="text-text-light space-y-2">
                <li>React.js & React Hooks</li>
                <li>Next.js 14+</li>
                <li>Tailwind CSS</li>
                <li>JavaScript/TypeScript</li>
              </ul>
            </div>
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-text mb-4">Backend</h3>
              <ul className="text-text-light space-y-2">
                <li>Node.js & Express.js</li>
                <li>PostgreSQL & MongoDB</li>
                <li>RESTful APIs</li>
                <li>AWS & Firebase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
