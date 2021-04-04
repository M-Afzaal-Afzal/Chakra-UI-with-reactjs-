import '../styles/globals.css'
import Chakra from '../components/chakra/Chakra';
import "focus-visible/dist/focus-visible"

function MyApp({ Component, pageProps }) {
  return (
      <Chakra cookies={pageProps.cookies}>
          <Component {...pageProps} />
      </Chakra>
  );
}

export default MyApp;