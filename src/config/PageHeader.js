import Head from "next/head";
import { LogoImg } from "../assets/img";
import Script from "next/script";
import Link from "next/link";
const PageHeader = (props) => {
  const { title } = props;
  return (
    <Head>

      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="//fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
        rel="stylesheet"
      />
      <link rel="icon" type="image/png" sizes="16x16" href={LogoImg.src} />
      <meta charSet="UTF-8"></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <title>Revel</title>
      <title>{title}</title>
      <link rel="stylesheet" href="/Inter-ExtraLight.ttf" />

      {/* <link rel="stylesheet" href="assets/css/bootstrap.min.css"></link> */}
      {/* <link rel="stylesheet" href="assets/css/font-awesome.css"></link> */}
      {/* <link rel="stylesheet" href="assets/css/style.css"></link> */}

      {/* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> */}
      {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> */}
      <Script src="../assets/js/bootstrap.bundle.min"  ></Script>
      <Script src="../assets/js/jquery.slim.min.js" ></Script>
      <Script src="../assets/js/owl.carousel.min.js" ></Script>
    </Head>
  );
};
export default PageHeader;

