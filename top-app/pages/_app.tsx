import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';


export default function App({
  Component,
  pageProps
}: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Project PurpleSchool</title>
      <meta name="description" content="Generated by create next app"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <Component {...pageProps} />;
  </>;
}