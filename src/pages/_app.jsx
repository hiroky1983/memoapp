function MyApp({ Component, pageProps }) {
  // const themeProps = useTheme();
  // const noteProps = useNote();

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
