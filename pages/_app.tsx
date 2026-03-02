import type { AppProps } from 'next/app';
import '../src/styles/global.scss';
import '../src/components/Layout/styles.scss';
import '../src/components/Footer/styles.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
