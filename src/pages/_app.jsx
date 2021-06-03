import { useTheme } from "../hooks/useTheme";
import { useNote } from "../hooks/useNote";
import { firebaseConfig } from "../firebase/Config";

firebaseConfig;

function MyApp({ Component, pageProps }) {
  const themeProps = useTheme();
  const noteProps = useNote();

  return (
    <>
      <Component {...pageProps} {...themeProps} {...noteProps} />
    </>
  );
}

export default MyApp;
