import Head from 'next/head';
import Image from 'next/image';
import Searchbar from '../components/Searchbar';
import SignUpForm from '../components/SignupForm';
import Catalogue from '../views/Catalogue';
import FeaturedItems from '../views/FeaturedItems';
import SignupAndLogin from '../views/SignupAndLogin';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Food Mobile</title>
        <meta name="description" content="Food mobile homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignupAndLogin />
    </div>
  );
}
