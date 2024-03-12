import Link from 'next/link';
import LogoutForm from './logoutForm';

const Navbar = () => {
  return (
    <nav>
      <Link href='/'>Homepage</Link>
      <Link href='/premium'>Premium</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/login'>Login</Link>
      <LogoutForm />
      {/* <Link href='/logout'>Logout</Link> */}
    </nav>
  );
};

export default Navbar;
