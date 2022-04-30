import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import style from './style.module.scss';
import Modal from 'react-modal';

export default function Loading() {

  const customStyles = {
    content: {
      overflow: 'hidden',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

    let subtitle:any;
    const modalIsOpen = true;
  
    
  return (
    <div>
    
    <Modal
      isOpen={modalIsOpen}
      
      style={customStyles}
      contentLabel="Example Modal"
    >
     <div className={style.loader}></div>
    </Modal>
  </div>
   
       
 
  )
  }
