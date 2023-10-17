import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export default function App({ Comp, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>THE ChatRoom</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Comp {...pageProps} />
    </MantineProvider>
  );
}
