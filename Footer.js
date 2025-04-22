export default function Footer() {
    return (
      <footer style={{
        padding: '1rem',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        marginTop: '2rem'
      }}>
        <p>© {new Date().getFullYear()} CPAN144 Group Project - Phase 1</p>
      </footer>
    );
  }