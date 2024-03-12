import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href='/'>Homepage</Link>
      <Link href='/premium'>Premium</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/login'>Login</Link>
    </nav>
  );
};

export default Navbar;
