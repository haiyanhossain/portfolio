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
        <meta name="description" content="Full-stack developer specializing in modern web applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
