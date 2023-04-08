import "./Presentation.css";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import { useNavigate } from "react-router-dom";
const Presenation = () => {
  const navigate = useNavigate();
  return (
    <div className="presentation">
      <div className="presentation_heading">
        <h1>Presentations</h1>
      </div>
      <div className="docs-container">
        <div className="docs-container-wrapper">
          <div
            className="doc"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1FARIZQDtWREo8BIO82Cm5edhLG-nlLeh/view"
              );
            }}
          >
            <img src={img1} />
          </div>
          <div
            className="doc"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1FARIZQDtWREo8BIO82Cm5edhLG-nlLeh/view"
              );
            }}
          >
            <img src={img2} />
          </div>
          <div
            className="doc"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1FARIZQDtWREo8BIO82Cm5edhLG-nlLeh/view"
              );
            }}
          >
            <img src={img3} />
          </div>
          <div
            className="doc"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1FARIZQDtWREo8BIO82Cm5edhLG-nlLeh/view"
              );
            }}
          >
            <img src={img1} />
          </div>
          <div
            className="doc"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1FARIZQDtWREo8BIO82Cm5edhLG-nlLeh/view"
              );
            }}
          >
            <img src={img2} />
          </div>
          <div
            className="doc"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1FARIZQDtWREo8BIO82Cm5edhLG-nlLeh/view"
              );
            }}
          >
            <img src={img3} />
          </div>
          <div
            className="doc border"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1FARIZQDtWREo8BIO82Cm5edhLG-nlLeh/view"
              );
            }}
          >
            <img src={img1} />
          </div>
          <div
            className="doc border"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1FARIZQDtWREo8BIO82Cm5edhLG-nlLeh/view"
              );
            }}
          >
            <img src={img2} />
          </div>
          <div
            className="doc border"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1FARIZQDtWREo8BIO82Cm5edhLG-nlLeh/view"
              );
            }}
          >
            <img src={img3} />
          </div>
          <div
            className="doc border"
            onClick={() => {
              navigate(
                "https://drive.google.com/file/d/1FARIZQDtWREo8BIO82Cm5edhLG-nlLeh/view"
              );
            }}
          >
            <img src={img1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presenation;