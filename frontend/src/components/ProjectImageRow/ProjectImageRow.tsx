import ProjectImageContainer from "./ProjectImageContainer";

type ImageRowType = {
  imageLinks: Array<string>;
};

const ProjectImageRow = ({ imageLinks }: ImageRowType) => {
  return (
    //좌우 스크롤 추가해야함
    <div className="project-image-row">
      {imageLinks.map((imageLink) => (
        <ProjectImageContainer imageLink={imageLink} />
      ))}
    </div>
  );
};

export default ProjectImageRow;
