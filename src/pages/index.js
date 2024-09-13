import Head from "next/head";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import Quote from "@/components/Quote";
import { GiStarShuriken } from "react-icons/gi";
import { MdOutlineFileDownload } from "react-icons/md";
import html2canvas from "html2canvas";


export default function Home() {

  const apiUrl = "https://waifu.it/api/v4/quote";
  const presentYear = new Date().getFullYear();
  const printRef = React.useRef();
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState(null);

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
      setLoading(false);
    })
    .catch(err => {
      setLoading(false);
      setError(true);
      console.log(err, err.message);
    })
  }

  const handleGenerate = () => {
    if (!data) return;
    getQuote();
  }

  const handleDownload = async () => {
    if (!data) return;
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const imageData = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = imageData;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(imageData);
    }
  }

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
      <main className={styles.page}>
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
          {data ? <Quote innerRef={printRef} quoteDetails={data}/> : ""}
          {isError ? <div>Error generating quote, regenerate</div> : ""}
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.generateBtn} onClick={handleGenerate}>
            <GiStarShuriken />
            <p>Generate New Quote</p>
          </button>
          <button className={styles.downloadBtn} onClick={handleDownload}>
            <MdOutlineFileDownload />
            <p>Download as Image</p>
          </button>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          Built by {" "}
          <a href="https://github.com/sodiqsanusi" target="_blank" rel="noreferrer">
            Sodiq &#34;Ade&#34; Sanusi
          </a>
        </p>
        <p>
          Designed by {" "}
          <a href="https://www.mide.design" target="_blank" rel="noreferrer">
            Mide
          </a>
        </p>
        <br />
        <p>&#169; {presentYear}</p>
      </footer>
    </>
  );
}
