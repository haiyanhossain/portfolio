import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Haiyan Hossain - Full Stack Developer</title>
        <meta name="description" content="Full-stack developer specializing in modern web applications. Expert in React, Next.js, Node.js, and cloud technologies." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="developer, full-stack, React, Next.js, Node.js, web development" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta property="og:title" content="Haiyan Hossain - Full Stack Developer" />
        <meta property="og:description" content="Building modern web applications with React, Next.js, and Node.js" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-primary text-text">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Footer />
      </div>
    </>
  );
}
