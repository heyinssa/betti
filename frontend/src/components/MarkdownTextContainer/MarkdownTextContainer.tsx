import { Container } from "semantic-ui-react";
import "./MarkdownTextContainer.scss";

type MarkdownTextType = {
  projectDetailText: string;
};
const MarkdownTextContainer = ({ projectDetailText }: MarkdownTextType) => {
  return (
    <Container className="markdown-text-container">
      <div>{projectDetailText}</div>
    </Container>
  );
};

export default MarkdownTextContainer;
