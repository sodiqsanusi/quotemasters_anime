import styles from "./Quote.module.css";

const Quote = ({quoteDetails, innerRef}) => {
  return (
    <div ref={innerRef} className={styles.quoteContainer}>
      <h2 className={styles.mainQuote}>
        {quoteDetails.quote}
      </h2>
      <div className={styles.quoteOrigin}>
        <p>~ {quoteDetails.character} ({quoteDetails.anime})</p>
      </div>
    </div>
  );
}
 
export default Quote;