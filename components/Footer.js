export default function Footer() {
  return (
    <footer id="contact" className="bg-text text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-300">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="mailto:hello@example.com" className="hover:text-white transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
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
