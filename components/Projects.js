export default function Projects() {
  const projects = [
    { id: 1, title: 'E-Commerce Platform', description: 'Full-stack e-commerce with payment integration and admin dashboard', tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'] },
    { id: 2, title: 'Task Management App', description: 'Collaborative tool with real-time updates and team features', tech: ['React', 'Firebase', 'Tailwind CSS'] },
    { id: 3, title: 'Analytics Dashboard', description: 'Real-time analytics with data visualization and reporting', tech: ['Next.js', 'D3.js', 'PostgreSQL'] },
  ];
  return (
    <section id="projects" className="py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-text mb-16 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.id} className="bg-primary rounded-lg border border-border p-6 hover:shadow-lg">
              <h3 className="text-xl font-bold text-text mb-3">{p.title}</h3>
              <p className="text-text-light mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => <span key={t} className="bg-secondary text-accent text-xs px-3 py-1 rounded-full">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
