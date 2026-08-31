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
        <title>Haiyan Hossain - Portfolio</title>
        <meta name="description" content="Professional portfolio of Haiyan Hossain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;500;600;700&display=swap" rel="stylesheet" />
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
