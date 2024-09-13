import { GiDuration } from "react-icons/gi";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <GiDuration />
    </div>
  );
}
 
export default Loader;