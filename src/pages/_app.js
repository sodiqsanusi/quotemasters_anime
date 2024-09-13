import "@/styles/globals.css";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  weight: ["400", "500","600"],
  subsets: ["latin"]
})

const instrumentSerif = Instrument_Serif(
  {
    weight: "400",
    subsets: ["latin"]
  }
)

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${instrumentSans.style.fontFamily};
        }
        h1 {
          font-family: ${instrumentSerif.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
