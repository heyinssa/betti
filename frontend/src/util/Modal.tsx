type ModalType = {
  isOpen : boolean,
  close : () => void,
  content : any 
}
const Modal = ({ isOpen, close, content } : ModalType) => {
  const isOuter = (e : React.MouseEvent<HTMLDivElement>)=> {
    console.log(e);
    const target = e.target as Element;
    const clicked = target.className;
    if (clicked === 'modal') close();
  };
  return (
    <>
      <>
        {isOpen && (
          <>
            <div className="modal" onClick={isOuter}>
              {' '}
              {content}
            </div>
          </>
        )}
      </>
    </>
  );
};

export default Modal;
