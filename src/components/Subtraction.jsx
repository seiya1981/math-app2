
import React, {useRef} from "react";
import Button from 'react-bootstrap/Button';
import SubtractionCard from './SubtractionCard.jsx';
import '../App.css';

function Subtraction (){

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
            <h1>Subtraction</h1>
            <div className="d-flex justify-content-center"> 
                <Button variant="primary" onClick={ handleParentClick}>Generate New Numbers</Button>
            </div>

             <div className = "app-container">
              <SubtractionCard ref={childRef}/>
              <SubtractionCard ref={childRef2}/>
              <SubtractionCard ref={childRef3}/>
              <SubtractionCard ref={childRef4}/>
              <SubtractionCard ref={childRef5}/>
              <SubtractionCard ref={childRef6}/>
              <SubtractionCard ref={childRef7}/>
              <SubtractionCard ref={childRef8}/>
              <SubtractionCard ref={childRef9}/>
              <SubtractionCard ref={childRef10}/>
              <SubtractionCard ref={childRef11}/>
              <SubtractionCard ref={childRef12}/>
              <SubtractionCard ref={childRef13}/>
              <SubtractionCard ref={childRef14}/>
              <SubtractionCard ref={childRef15}/>
              <SubtractionCard ref={childRef16}/>
            </div>

        </div>
        
    );
    
}

export default Subtraction;