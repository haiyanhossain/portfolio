export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn the fundamentals of Next.js 14 and how it can improve your web development workflow.',
      date: 'August 2024',
      readTime: '5 min read',
      link: '#',
    },
    {
      id: 2,
      title: 'Best Practices for React Performance',
      excerpt: 'Optimize your React applications with these proven performance optimization techniques.',
      date: 'July 2024',
      readTime: '8 min read',
      link: '#',
    },
    {
      id: 3,
      title: 'Database Design Patterns',
      excerpt: 'Explore common database design patterns and when to use them in your projects.',
      date: 'June 2024',
      readTime: '10 min read',
      link: '#',
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-12 text-center">
          Latest Articles
        </h2>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border-b border-border pb-8 last:border-b-0 hover:bg-secondary p-6 rounded-lg transition-colors"
            >
              <h3 className="text-2xl font-bold text-text mb-3 hover:text-accent transition-colors">
                <a href={post.link}>{post.title}</a>
              </h3>
              <p className="text-text-light mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-text-light">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <a
                href={post.link}
                className="text-accent hover:text-blue-600 font-semibold transition-colors inline-block mt-4"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
