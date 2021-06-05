import { useTheme } from "../hooks/useTheme";
import { useNote } from "../hooks/useNote";
import { firebaseConfig } from "../firebase/Config";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "@firebase/app";

getFirestore;
initializeApp;

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
