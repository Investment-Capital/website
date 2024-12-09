import ReactMarkdown from "react-markdown";
import privacy from "../config/privacy.md?raw";

const Privacy = (): React.ReactNode => {
  return (
    <div style={{ color: "white", textAlign: "center", padding: "30px" }}>
      <ReactMarkdown children={privacy} />
    </div>
  );
};

export default Privacy;
