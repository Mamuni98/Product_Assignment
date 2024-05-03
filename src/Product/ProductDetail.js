import classes from "./ProductDetail.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const NoteRead = () => {
  const readDetail = useSelector((state) => state.products.readDetail);
  const history = useNavigate();
  const stopReading = () => {
    history('/product');
  }
  return (
    <div className={classes.read}>
      <h1>{readDetail.title}</h1>
      <p>{readDetail.description}</p>
      <div>
        <h5>Catagory: {readDetail.catagory}</h5>
        <h5>Rs. {readDetail.price}</h5>
      </div>
      <button onClick={stopReading}>Back</button>
    </div>
  );
};
export default NoteRead;
