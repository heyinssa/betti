import { useEffect, useState } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import Modal from 'react-modal';

const ProjectButtonContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickOpenModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsOpen(true);
    console.log(isOpen);
  };
  const handleClickCloseModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    console.log(isOpen);
  };
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);
  return (
    <div className="project-button-container">
      <Button
        positive
        className="project-button"
        onClick={handleClickOpenModal}
      >
        베타테스트 신청
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
          hi //내용채울곳 <button onClick={handleClickCloseModal}>닫기</button>
        </Modal>
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
