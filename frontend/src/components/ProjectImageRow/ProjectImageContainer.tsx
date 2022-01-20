
type ImageContainerType = {
  imageLink: string;
};

const ProjectImageContainer = ({ imageLink }: ImageContainerType) => {
  return (
    <div className="project-image-container">
      <img src={imageLink} alt="Detail-image" />
    </div>
  );
};

export default ProjectImageContainer;
