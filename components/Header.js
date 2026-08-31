import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-border shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-accent">
          AH
        </Link>
        
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-text hover:text-accent transition-colors font-medium">About</a>
          <a href="#projects" className="text-text hover:text-accent transition-colors font-medium">Projects</a>
          <a href="#blog" className="text-text hover:text-accent transition-colors font-medium">Blog</a>
          <a href="#contact" className="text-text hover:text-accent transition-colors font-medium">Contact</a>
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-border">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <a href="#about" className="text-text hover:text-accent transition-colors font-medium">About</a>
            <a href="#projects" className="text-text hover:text-accent transition-colors font-medium">Projects</a>
            <a href="#blog" className="text-text hover:text-accent transition-colors font-medium">Blog</a>
            <a href="#contact" className="text-text hover:text-accent transition-colors font-medium">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
