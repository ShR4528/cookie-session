import { getSession } from '@/actions';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const PremiumPage  = async () => {
  const session = await getSession();

  if(!session.isLoggedIn) {
    redirect('/')
  }
  if(!session.isPro) {
    return(
      <div className="notPremium">
        <h1>Only  for Pro users</h1>
        <Link href="/profile">
          Go to Profile
        </Link>
      </div>
    )
  }
  return (
    <div className='premium'>
      <h1>Welcome to PremiumPage</h1>
    </div>
  );
};

export default PremiumPage;
