export default function Hero() {
  return (
    <section className="bg-secondary py-20 md:py-40">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-text mb-6">
          Haiyan Hossain
        </h1>
        <p className="text-xl md:text-2xl text-text-light mb-4 max-w-3xl mx-auto font-medium">
          Full Stack Developer
        </p>
        <p className="text-lg md:text-xl text-text-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Crafting modern, scalable web applications with React, Next.js, and Node.js. Passionate about clean code, user experience, and solving complex problems.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
