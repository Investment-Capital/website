import ReactMarkdown from "react-markdown";
import terms from "../config/terms.md?raw";

const Terms = () => {
  return (
    <div style={{ color: "white", textAlign: "center", padding: "55px" }}>
      <ReactMarkdown children={terms} />
    </div>
  );
};

export default Terms;
