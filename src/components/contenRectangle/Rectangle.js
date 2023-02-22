import Styles from "./Rectangle.module.css";

function Rectangle() {
  return (
    <div className={Styles.conteinerGrayRectangle}>
      <img
        src="https://uploads.codesandbox.io/uploads/user/0144a6ca-e9ad-488b-82b5-8e5b9ca98ace/6m1J-cartImg+-+Copia.jpg"
        alt="image of a ShoppingCart"
      />

      <span className={Styles.smalConteinerGray}>
        <img
          src="https://uploads.codesandbox.io/uploads/user/0144a6ca-e9ad-488b-82b5-8e5b9ca98ace/2nF4-+circle.png"
          alt="plus circle image"
        />
        <img
          src="https://uploads.codesandbox.io/uploads/user/0144a6ca-e9ad-488b-82b5-8e5b9ca98ace/5a1q--circle.png"
          alt="minus cicle image"
        />
      </span>
    </div>
  );
}
export default Rectangle;
