export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-text text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-2">Haiyan Hossain</h3>
            <p className="text-gray-300 text-sm mb-4">
              Full Stack Developer crafting modern web experiences
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="text-xl">🐙</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="text-xl">💼</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="text-xl">𝕏</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-lg">Navigation</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-lg">Resources</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Resume</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Me</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-lg">Get In Touch</h4>
            <p className="text-gray-300 text-sm mb-4">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-block bg-accent hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; {currentYear} Haiyan Hossain. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
