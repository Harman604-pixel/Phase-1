import Head from 'next/head';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function About() {
  return (
    <div>
      <Head>
        <title>CPAN144 Project | About</title>
        <meta name="description" content="About our project" />
      </Head>
      
      <Navbar />
      
      <main style={{ padding: '2rem' }}>
        <h1>About This Project</h1>
        <p>This is the about page for our CPAN144 Phase 1 project.</p>
        
        <div style={{ 
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '5px'
        }}>
          <h2>Project Requirements</h2>
          <ol>
            <li>Project setup and structure</li>
            <li>Basic components and state</li>
            <li>Routing between pages</li>
            <li>Basic styling</li>
          </ol>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}