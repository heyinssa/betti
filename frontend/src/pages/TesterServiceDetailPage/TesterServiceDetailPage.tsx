import {
  MarkdownTextContainer,
  ProjectDetailHeader,
  ProjectImageRow,
  TitleBar,
} from '../../components';
import serviceData from '../../modules/testData';

const TesterServiceDetailPage = () => {
  return (
    <div className="tester-body">
      <TitleBar />
      <ProjectDetailHeader serviceData={serviceData} />
      <ProjectImageRow imageLinks={serviceData.detailImage} />
      <MarkdownTextContainer
        projectDetailText={serviceData.descriptionDetail}
      />
    </div>
  );
};

export default TesterServiceDetailPage;
