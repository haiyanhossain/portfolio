export default function Hero() {
  return (
    <section className="bg-secondary py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
          Hi, I'm Haiyan Hossain
        </h1>
        <p className="text-xl md:text-2xl text-text-light mb-8 max-w-2xl mx-auto">
          Full-stack developer passionate about creating beautiful, functional web experiences
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-medium hover:bg-accent hover:text-white transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
