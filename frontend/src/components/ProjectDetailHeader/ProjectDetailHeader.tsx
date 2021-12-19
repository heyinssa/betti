import ProjectButtonContainer from './ProjectButtonContainer';
import ProjectDescContainer from './ProjectDescContainer';
import './ProjectDetailHeader.scss';
import { ServiceDataType } from '../../modules/User';

const ProjectDetailHeader = ({ serviceData }: ServiceDataType) => {
  return (
    <div className="project-detail-header">
      <ProjectDescContainer serviceData={serviceData} />
      <ProjectButtonContainer />
    </div>
  );
};

export default ProjectDetailHeader;
