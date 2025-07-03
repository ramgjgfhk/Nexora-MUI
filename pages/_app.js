import MainLayout from "@/Layout/layout";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const noLayoutPages = ["/", "/register",'/404',"/forgot-password"];

  const getLayout = noLayoutPages.includes(router.pathname)
    ? (page) => page
    : (page) => <MainLayout>{page}</MainLayout>;

  return getLayout(
    <>
      <Head>
        <title>Nexora</title>
        <meta name="description" content="Nexora" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
