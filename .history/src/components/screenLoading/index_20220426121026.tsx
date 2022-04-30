import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import style from './style.module.scss';
import Modal from 'react-modal';

export default function Loading() {

  const customStyles = {
    content: {
      scroll: 'none',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

    let subtitle:any;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  return (
    <div>
    <button onClick={openModal}>Open Modal</button>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
     <div className={style.loader}></div>
    </Modal>
  </div>
   
       
 
  )
  }
