import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import Quote from "@/components/Quote";
import { GiStarShuriken } from "react-icons/gi";
import { MdOutlineFileDownload } from "react-icons/md";


export default function Home() {

  const apiUrl = "https://waifu.it/api/v4/quote";

  const getQuote = () => {
    setLoading(true);
    setData(null);
    setError(false);
    axios.get(apiUrl, {
      headers: {
        "Authorization": process.env.NEXT_PUBLIC_AUTH_KEY,
      }
    }).then(res => {
      const quote = res.data;
      setData(quote);
      console.log(quote)
      setLoading(false);
    })
    .catch(err => {
      setLoading(false);
      setError(true);
      console.log(err, err.message);
    })
  }

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    getQuote();
  }, []);


  return (
    <>
      <Head>
        <title>QuoteMaster: Anime Edition</title>
        <meta
          name="description"
          content="QuoteMaster: Anime Edition - Discover random quotes 
            from your favorite anime characters, download them, or share 
            them as images." />
        <meta name="keywords" content="anime quotes, random quotes, QuoteMaster, anime, download quotes, share quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content='Sodiq "Ade" Sanusi' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <div className={styles.intro}>
          <h1>QuoteMaster: Anime Edition</h1>
          <p>
            Discover inspiration and wisdom from your favorite anime characters with Quotemaster.
            Whether you&apos;re looking for motivation, a laugh, or a deep thought, each click brings
            you a memorable quote from the world of anime.
          </p>
        </div>
        <div className={styles.mainContainer}>
          {isLoading ? <Loader /> : ""}
          {data ? <Quote quoteDetails={data}/> : ""}
          {isError ? <div>Error generating quote, regenerate</div> : ""}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.generateBtn} onClick={getQuote}>
            <GiStarShuriken />
            <p>Generate New Quote</p>
          </button>
          <button className={styles.downloadBtn}>
            <MdOutlineFileDownload />
            <p>Download as Image</p>
          </button>
        </div>
      </div>
    </>
  );
}
