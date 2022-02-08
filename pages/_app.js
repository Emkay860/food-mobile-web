import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import BottomNavbar from '../components/BottomNavbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BottomNavbar />
    </>
  );
}

export default MyApp;
