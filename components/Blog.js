export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14: A Comprehensive Guide',
      excerpt: 'Learn the fundamentals of Next.js 14 including App Router, Server Components, API Routes, and deployment strategies for production-ready applications.',
      date: 'August 15, 2024',
      readTime: '8 min read',
      category: 'Next.js',
      link: '#',
    },
    {
      id: 2,
      title: 'React Performance Optimization: Best Practices and Patterns',
      excerpt: 'Discover proven techniques to optimize React applications including code splitting, memoization, lazy loading, and profiling tools for better performance.',
      date: 'August 8, 2024',
      readTime: '10 min read',
      category: 'React',
      link: '#',
    },
    {
      id: 3,
      title: 'Database Design Patterns: From Concept to Implementation',
      excerpt: 'Explore essential database design patterns, normalization strategies, indexing techniques, and architectural decisions for scalable data storage solutions.',
      date: 'July 28, 2024',
      readTime: '12 min read',
      category: 'Backend',
      link: '#',
    },
    {
      id: 4,
      title: 'Building RESTful APIs with Express.js and Best Practices',
      excerpt: 'Master the creation of robust RESTful APIs using Express.js, including validation, authentication, error handling, and documentation strategies.',
      date: 'July 18, 2024',
      readTime: '9 min read',
      category: 'Backend',
      link: '#',
    },
    {
      id: 5,
      title: 'Docker for Developers: Containerization Made Simple',
      excerpt: 'Learn how to containerize your applications with Docker, manage multi-container setups with Docker Compose, and deploy with confidence.',
      date: 'July 5, 2024',
      readTime: '11 min read',
      category: 'DevOps',
      link: '#',
    },
    {
      id: 6,
      title: 'Tailwind CSS: Building Beautiful UIs with Utility-First CSS',
      excerpt: 'Explore the power of utility-first CSS with Tailwind, creating responsive, maintainable, and beautiful user interfaces with minimal custom CSS.',
      date: 'June 22, 2024',
      readTime: '7 min read',
      category: 'Frontend',
      link: '#',
    },
  ];

  const categories = ['All', 'Next.js', 'React', 'Backend', 'Frontend', 'DevOps'];

  return (
    <section id="blog" className="py-20 md:py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-4 text-center">
          Latest Articles
        </h2>
        <p className="text-text-light text-center mb-12 max-w-2xl mx-auto text-lg">
          Technical insights, tutorials, and best practices on web development, programming, and software architecture.
        </p>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full font-medium transition-colors ${
                cat === 'All'
                  ? 'bg-accent text-white'
                  : 'border border-border text-text hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border border-border rounded-lg p-8 hover:shadow-lg hover:-translate-y-1 transition-all bg-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-accent text-xs px-3 py-1 rounded-full font-semibold">
                  {post.category}
                </span>
                <span className="text-xs text-text-light font-medium">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-text mb-3 hover:text-accent transition-colors leading-tight">
                <a href={post.link}>{post.title}</a>
              </h3>
              <p className="text-text-light mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-border">
                <span className="text-sm text-text-light">{post.date}</span>
                <a
                  href={post.link}
                  className="text-accent hover:text-blue-700 font-semibold transition-colors inline-flex items-center gap-2 group"
                >
                  Read More
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="text-accent font-semibold hover:text-blue-700 transition-colors text-lg"
          >
            View All Articles →
          </a>
        </div>
      </div>
    </section>
  );
}
