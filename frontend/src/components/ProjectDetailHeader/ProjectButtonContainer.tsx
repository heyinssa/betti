
import { useEffect, useState } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import Modal from 'react-modal';
import { ProjectApplyModal } from '../Modals';

const ProjectButtonContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpenModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsOpen(true);
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
    <div className="project-button-container">
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <ProjectApplyModal />
        <button onClick={handleClickCloseModal}>닫기</button>
      </Modal>
      <Button
        positive
        className="project-button"
        onClick={handleClickOpenModal}
      >
        베타테스트 신청
      </Button>
      <Button as="div" labelPosition="right" className="project-button">
        <Button icon>
          <Icon name="heart" />
          Like
        </Button>
        <Label as="a" basic pointing="left">
          2,048
        </Label>
      </Button>
    </div>
  );
};

export default ProjectButtonContainer;
