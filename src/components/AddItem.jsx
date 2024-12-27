import style from "../styles/addItem.module.css";
import Emoji from "./Emoji";

function AddItem() {
  return (
    <div className={style.addItem}>
      <p>
        What do you need for your
        <Emoji txt="😍" /> trip?
      </p>
      <form>
        <select>
          {new Array(20).fill(0).map(function (_, index) {
            return (
              <option value={`${index + 1}`} key={index}>
                {index + 1}
              </option>
            );
          })}
        </select>
        <input type="text" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddItem;
