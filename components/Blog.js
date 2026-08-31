export default function Blog() {
  const posts = [
    { id: 1, title: 'Getting Started with Next.js 14', date: 'August 15, 2024', category: 'Next.js' },
    { id: 2, title: 'React Performance Optimization', date: 'August 8, 2024', category: 'React' },
    { id: 3, title: 'Database Design Patterns', date: 'July 28, 2024', category: 'Backend' },
  ];
  return (
    <section id="blog" className="py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-text mb-16 text-center">Latest Articles</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.id} className="border border-border rounded-lg p-6 hover:shadow-lg bg-white">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-accent text-xs px-3 py-1 rounded-full font-semibold">{post.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-text mb-2">{post.title}</h3>
              <p className="text-text-light">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
