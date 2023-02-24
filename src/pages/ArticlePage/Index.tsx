import { ArticlePageInterface } from "../../types";
import "./Index.module.css";
import { Link } from "react-router-dom";
const ArticlePage = (props: any) => {
  console.log("props", props);
  const { text } = props.props;
  return (
    <div className="Ar-container">
      <h1>Article Page</h1>
      <p>Hello </p>
      {text}
    </div>
  );
};

export default ArticlePage;
