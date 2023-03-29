import "./Image.css";

const Image = (props) => {
  return (
    <div className="img--container">
      <img src={props.index} />
    </div>
  );
};
export default Image;
