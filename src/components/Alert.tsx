import { X } from 'lucide-react';
import './index.scss'
import type { ReactNode } from 'react';
import type { AlertTypes } from '../types';
import { useState } from 'react'


interface IProps {
    type:AlertTypes ;
    alertIcon:ReactNode ;
    title : string ;
    description : ReactNode ;
}

const Alert = ({type, title, description, alertIcon }:IProps) => {

    const [visible , setVisible] = useState(true) ;
      const [hide , setHide] = useState(false) ;
    
      const handleClose=()=>{
        setHide(true) ;
        setTimeout(()=>{
          setVisible(false) ;
        },700)
      }
    
      if(!visible) return null ;
    

  return (

    <div className={`alert ${type} ${hide ? 'hide' : ''}`}>
        <div className="alert-header">
            <div className='alert-title'>
                {alertIcon}
                <h1 className='h'>{title}</h1>
            </div>
            <X className='close-icon' onClick={handleClose} />
        </div>
        <div className='para'>
            {description}
        </div>
    </div>
  )
}

export default Alert