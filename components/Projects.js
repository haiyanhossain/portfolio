export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard for inventory management.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      link: 'https://github.com',
      image: '🛒',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Task Management Application',
      description: 'Collaborative task management tool with real-time updates, team workspaces, task assignments, progress tracking, and notifications.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      link: 'https://github.com',
      image: '✓',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive data visualization, custom reporting, user analytics, and performance metrics.',
      technologies: ['Next.js', 'D3.js', 'PostgreSQL', 'Node.js'],
      link: 'https://github.com',
      image: '📊',
      status: 'Live'
    },
    {
      id: 4,
      title: 'Social Media Feed',
      description: 'Social networking platform with user profiles, post creation, likes, comments, real-time notifications, and user connections.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      link: 'https://github.com',
      image: '👥',
      status: 'In Progress'
    },
    {
      id: 5,
      title: 'Weather Application',
      description: 'Real-time weather application with current conditions, forecasts, location search, and weather alerts with beautiful UI.',
      technologies: ['Next.js', 'OpenWeather API', 'Tailwind CSS'],
      link: 'https://github.com',
      image: '🌤️',
      status: 'Live'
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Full-featured blogging platform with markdown editor, category filtering, search functionality, comments, and user authentication.',
      technologies: ['Next.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
      link: 'https://github.com',
      image: '📝',
      status: 'Live'
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-text-light text-center mb-16 max-w-2xl mx-auto text-lg">
          Explore a selection of projects I've built, showcasing my skills in full-stack development and modern web technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-primary rounded-lg border border-border p-6 hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-5xl">{project.image}</div>
                <span className="bg-blue-100 text-accent text-xs px-3 py-1 rounded-full font-semibold">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{project.title}</h3>
              <p className="text-text-light mb-6 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-accent text-xs px-3 py-1 rounded-full font-medium border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-accent hover:text-blue-700 font-semibold transition-colors inline-flex items-center gap-2 group"
              >
                View Project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
