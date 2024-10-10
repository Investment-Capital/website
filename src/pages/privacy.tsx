import ReactMarkdown from "react-markdown";
import privacy from "../config/privacy.md?raw";

const Privacy = (): JSX.Element => {
  return (
    <div style={{ color: "white", textAlign: "center", padding: "55px" }}>
      <ReactMarkdown children={privacy} />
    </div>
  );
};

export default Privacy;
