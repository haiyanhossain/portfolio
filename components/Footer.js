export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-text text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-2">Haiyan Hossain</h3>
            <p className="text-gray-300">Full Stack Developer crafting modern web experiences</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">GitHub</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="mailto:hello@example.com" className="hover:text-white">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {year} Haiyan Hossain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
