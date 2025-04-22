import Head from 'next/head';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Counter from '../Components/Counter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>CPAN144 Project | Home</title>
        <meta name="description" content="Group project for CPAN144" />
      </Head>
      
      <Navbar />
      
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to Our Phase 1 Project</h1>
        <p>This page demonstrates the basic requirements for Phase 1.</p>
        
        <Counter />
        
        <section style={{ marginTop: '2rem' }}>
          <h2>Project Features</h2>
          <ul>
            <li>Next.js routing between pages</li>
            <li>Reusable components</li>
            <li>State management with useState</li>
            <li>Basic styling</li>
          </ul>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}