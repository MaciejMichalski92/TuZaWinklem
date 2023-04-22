import { store } from '@/app/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Open_Sans } from '@next/font/google';
import '@/styles/globals.css';

const openSans = Open_Sans({
  subsets: ['latin-ext'],
  weight: ['300', '500', '700'],
  style: ['italic', 'normal'],
  variable: '--font-open-sans'
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className={`${openSans.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
