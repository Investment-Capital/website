import ReactMarkdown from "react-markdown";
import terms from "../config/terms.md?raw";

const Terms = (): React.ReactNode => {
  return (
    <div style={{ color: "white", textAlign: "center", padding: "30px" }}>
      <ReactMarkdown children={terms} />
    </div>
  );
};

export default Terms;
