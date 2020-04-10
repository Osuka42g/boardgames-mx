import Link from 'next/link';

const linkStyle = {
  marginRight: 15,
};

const container = {
  marginBottom: '1rem',
};

const Header = () => (
  <div style={container}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;