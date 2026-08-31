import '@/styles/globals.css';
import Head from 'next/head';

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">AH</div>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium">About</a>
          <a href="#projects" className="text-gray-800 hover:text-blue-600 font-medium">Projects</a>
          <a href="#blog" className="text-gray-800 hover:text-blue-600 font-medium">Blog</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gray-50 py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">Haiyan Hossain</h1>
        <p className="text-2xl text-gray-600 mb-4 font-medium">Full Stack Developer</p>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Crafting modern, scalable web applications with React, Next.js, and Node.js</p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">View My Work</a>
          <a href="#contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">I am a passionate full-stack developer with expertise in building modern, scalable web applications. With a strong foundation in both frontend and backend technologies, I specialize in creating seamless user experiences backed by robust server architecture.</p>
            <p className="text-lg text-gray-600 leading-relaxed">I thrive in collaborative environments and continuously learn new technologies to stay at the forefront of web development.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Skills</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• React.js & React Hooks</li>
                <li>• Next.js 14+</li>
                <li>• Tailwind CSS</li>
                <li>• JavaScript/TypeScript</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Skills</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Node.js & Express.js</li>
                <li>• PostgreSQL & MongoDB</li>
                <li>• RESTful APIs</li>
                <li>• AWS & Firebase</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { title: 'E-Commerce Platform', desc: 'Full-stack e-commerce with payment integration', tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'] },
    { title: 'Task Management App', desc: 'Collaborative tool with real-time updates', tech: ['React', 'Firebase', 'Tailwind CSS'] },
    { title: 'Analytics Dashboard', desc: 'Real-time analytics with data visualization', tech: ['Next.js', 'D3.js', 'PostgreSQL'] },
  ];
  return (
    <section id="projects" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => <span key={t} className="bg-gray-100 text-blue-600 text-xs px-3 py-1 rounded-full">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const posts = [
    { title: 'Getting Started with Next.js 14', date: 'August 15, 2024', cat: 'Next.js' },
    { title: 'React Performance Optimization', date: 'August 8, 2024', cat: 'React' },
    { title: 'Database Design Patterns', date: 'July 28, 2024', cat: 'Backend' },
  ];
  return (
    <section id="blog" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">Latest Articles</h2>
        <div className="space-y-6">
          {posts.map((post, i) => (
            <article key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg bg-gray-50">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-semibold">{post.cat}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-2">Haiyan Hossain</h3>
            <p className="text-gray-400">Full Stack Developer crafting modern web experiences</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">GitHub</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="mailto:hello@example.com" className="hover:text-white">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Haiyan Hossain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Haiyan Hossain - Full Stack Developer</title>
        <meta name="description" content="Full-stack developer specializing in modern web applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
}
