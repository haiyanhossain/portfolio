export default function Hero() {
  return (
    <section className="bg-secondary py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-bold text-text mb-6">Haiyan Hossain</h1>
        <p className="text-2xl text-text-light mb-4 font-medium">Full Stack Developer</p>
        <p className="text-xl text-text-light mb-12 max-w-2xl mx-auto">Crafting modern, scalable web applications with React, Next.js, and Node.js</p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">View My Work</a>
          <a href="#contact" className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}
