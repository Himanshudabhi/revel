import "@/styles/globals.css";
import "../src/assets/css/font-awesome.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/revel.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/style.css";
import Head from "next/head";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import queryString from "query-string";
import { Toast } from "@/src/common/toast/toast";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Toast/>
      </QueryClientProvider>
    </>
  );
}
