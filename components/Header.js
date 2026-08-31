export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-border shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-accent">AH</div>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-text hover:text-accent font-medium">About</a>
          <a href="#projects" className="text-text hover:text-accent font-medium">Projects</a>
          <a href="#blog" className="text-text hover:text-accent font-medium">Blog</a>
          <a href="#contact" className="text-text hover:text-accent font-medium">Contact</a>
        </div>
      </nav>
    </header>
  );
}
