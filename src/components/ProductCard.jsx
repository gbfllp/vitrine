import styles from "./ProductCard.module.css";

const ProductCard = ({ name, price, image, onAddToCart, isAvailable }) => {
  return (
    <div className={`${styles.card} ${!isAvailable ? styles.outOfStock : ""}`}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}
      </p>

      {isAvailable ? (
        <button className={styles.button} onClick={() => onAddToCart(name)}>
          Adicionar ao Carrinho
        </button>
      ) : (
        <p className={styles.unavailableText}>Indisponível</p>
      )}
    </div>
  );
};

export default ProductCard;
