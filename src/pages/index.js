import Head from "next/head";
import styles from "@/styles/Home.module.css";


export default function Home() {
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
        <div>
          <h1>Anime Quote Generator</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ab reprehenderit explicabo laboriosam perferendis dicta similique veritatis nam recusandae.
            Aspernatur quibusdam eius aut sit voluptatem ad voluptatibus officia. Quod, iste deleniti?</p>
        </div>
        <div>

        </div>
        <div>
          <button>
            <span></span>
            <p>Generate</p>
          </button>
          <button>
            <span></span>
            <p>Download</p>
          </button>
        </div>
      </div>
    </>
  );
}
