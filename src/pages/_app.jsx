import { useTheme } from "../hooks/useTheme";

function MyApp({ Component, pageProps }) {
  const themeProps = useTheme();

  return (
    <>
      <Component {...pageProps} {...themeProps} />
    </>
  );
}

export default MyApp;
