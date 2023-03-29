import "./Form.css";
import MemesData from "../Image/MemesData";

const Form = (props) => {
  return (
    <form className="form">
      <div className="form--input">
        <input className="text-input" type="text" placeholder="top of meme" />
        <input
          className="text-input"
          type="text"
          placeholder="bottom of meme"
        />
      </div>
      <div>
        <button type="button" onClick={props.newMemeHandler}>
          Get a new meme image 🖼️
        </button>
      </div>
    </form>
  );
};
export default Form;
