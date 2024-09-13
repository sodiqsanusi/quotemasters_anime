import styles from "./Quote.module.css";

const Quote = ({quoteDetails, innerRef}) => {
  return (
    <div ref={innerRef}>
      <h2>
        {/* &#10077; */}
        {quoteDetails.quote} {" "}
        {/* &#10078;   */}
      </h2>
      <div>
        <span>{quoteDetails.author}</span>
        <hr />
        <span>{quoteDetails.anime}</span>
      </div>
    </div>
  );
}
 
export default Quote;