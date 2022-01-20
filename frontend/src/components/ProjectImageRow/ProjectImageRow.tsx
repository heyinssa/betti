
import ProjectImageContainer from "./ProjectImageContainer";
import "./ProjectImageRow.scss";

type ImageRowType = {
  imageLinks: Array<string>;
};

const ProjectImageRow = ({ imageLinks }: ImageRowType) => {
  return (
    //좌우 스크롤 추가해야함
    <div className="project-image-row">
      <div className="project-image-row-inner">
        {imageLinks.map((imageLink) => (
          <ProjectImageContainer imageLink={imageLink} />
        ))}
      </div>
    </div>
  );
};

export default ProjectImageRow;
