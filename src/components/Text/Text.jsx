import styles from "../Text/Text.module.css";
const Text = () => {
  return (
    <div className={styles.textContainer}>
      <div className={styles.text}>
        <div className={styles.productsText}>DISCOVER OUR PRODUCTS</div>
        <div className={styles.loremText}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </div>
      </div>
    </div>
  );
};

export default Text;
