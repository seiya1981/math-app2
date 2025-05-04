import React, {useRef} from "react";
import Button from 'react-bootstrap/Button';
import AddCard from './AddCard.jsx';
import '../App.css';

function Addition (){

  const childRef = useRef();
  const childRef2 = useRef();
  const childRef3 = useRef();
  const childRef4 = useRef();
  const childRef5 = useRef();
  const childRef6 = useRef();
  const childRef7 = useRef();
  const childRef8 = useRef();
  const childRef9 = useRef();
  const childRef10 = useRef();
  const childRef11 = useRef();
  const childRef12 = useRef();
  const childRef13 = useRef();
  const childRef14 = useRef();
  const childRef15 = useRef();
  const childRef16 = useRef();

  const handleParentClick = () =>{
    childRef.current.triggerButtonClick();
    childRef2.current.triggerButtonClick();
    childRef3.current.triggerButtonClick();
    childRef4.current.triggerButtonClick();
    childRef5.current.triggerButtonClick();
    childRef6.current.triggerButtonClick();
    childRef7.current.triggerButtonClick();
    childRef8.current.triggerButtonClick();
    childRef9.current.triggerButtonClick();
    childRef10.current.triggerButtonClick();
    childRef11.current.triggerButtonClick();
    childRef12.current.triggerButtonClick();
    childRef13.current.triggerButtonClick();
    childRef14.current.triggerButtonClick();
    childRef15.current.triggerButtonClick();
    childRef16.current.triggerButtonClick();
  };

    return(
        <div>
            <h1>Addition</h1>
            <div className="d-flex justify-content-center"> 
                <Button variant="primary" onClick={ handleParentClick}>Generate New Numbers</Button>
            </div>

             <div className = "app-container">
              <AddCard ref={childRef}/>
              <AddCard ref={childRef2}/>
              <AddCard ref={childRef3}/>
              <AddCard ref={childRef4}/>
              <AddCard ref={childRef5}/>
              <AddCard ref={childRef6}/>
              <AddCard ref={childRef7}/>
              <AddCard ref={childRef8}/>
              <AddCard ref={childRef9}/>
              <AddCard ref={childRef10}/>
              <AddCard ref={childRef11}/>
              <AddCard ref={childRef12}/>
              <AddCard ref={childRef13}/>
              <AddCard ref={childRef14}/>
              <AddCard ref={childRef15}/>
              <AddCard ref={childRef16}/>
            </div>

        </div>
        
    );
    
}

export default Addition;
