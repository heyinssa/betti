
import { Card, CardProps, Icon, Image } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { ServiceType } from '../../modules/User';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { ProjectFeedbackModal } from '../Modals';

type ServiceRowType = {
  serviceData: ServiceType;
  ifFeedback: boolean;
};

const TesterServiceContainer = ({
  serviceData,
  ifFeedback,
}: ServiceRowType) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickIfFeedback = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClickIfNotFeedback = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    navigate(serviceData.link);
  };

  const handleClickCloseModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsOpen(false);
  };

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <ProjectFeedbackModal />
        <button onClick={handleClickCloseModal}>닫기</button>
      </Modal>
      <Card
        className="tester-service-container"
        onClick={ifFeedback ? handleClickIfFeedback : handleClickIfNotFeedback}
      >
        <Image src={serviceData.projectImage} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{serviceData.projectName}</Card.Header>
          <Card.Meta>
            <span className="tester-team-name">{serviceData.teamName}</span>
          </Card.Meta>
          <Card.Description>{serviceData.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            {
              //클릭하면 본인 즐겨찾기 등록되도록 설정 (하트 채워짐 / 안채워짐)
            }
            <Icon name="heart" />
            {String(serviceData.favourites)}
          </a>
        </Card.Content>
      </Card>
    </>
  );
};

export default TesterServiceContainer;
