export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      link: '#',
      image: '🛒',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      link: '#',
      image: '✓',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization and custom reporting.',
      technologies: ['Next.js', 'D3.js', 'PostgreSQL'],
      link: '#',
      image: '📊',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{project.image}</div>
              <h3 className="text-xl font-bold text-text mb-3">{project.title}</h3>
              <p className="text-text-light mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-accent text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-accent hover:text-blue-600 font-semibold transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
