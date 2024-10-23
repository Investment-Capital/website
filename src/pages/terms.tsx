import ReactMarkdown from "react-markdown";
import terms from "../config/terms.md?raw";

const Terms = (): JSX.Element => {
  return (
    <div style={{ color: "white", textAlign: "center", padding: "30px" }}>
      <ReactMarkdown children={terms} />
    </div>
  );
};

export default Terms;
