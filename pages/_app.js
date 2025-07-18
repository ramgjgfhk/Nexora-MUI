import { CustomLoader } from "@/Components/resuable components/customLoader";
import MainLayout from "@/Layout/layout";
import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  //  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (_url, { shallow }) => {
      if (!shallow) setLoading(true); // Only show loader for full navigations
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  const noLayoutPages = ["/", "/register", "/404", "/forgot-password"];

  const getLayout = noLayoutPages.includes(router.pathname)
    ? (page) => page
    : (page) => <MainLayout>{page}</MainLayout>;

  return getLayout(
    <>
      <Head>
        <title>Nexora</title>
        <meta name="description" content="Nexora" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favLogo.svg" />

        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      {loading && <CustomLoader />} {/* Show loader while navigating */}
      {/* <MainLayout> */}
      <Component {...pageProps} />
    </>
  );
}
