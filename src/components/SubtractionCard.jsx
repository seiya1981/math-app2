import React, {useState,forwardRef,useImperativeHandle} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SubtractionCard = forwardRef(function MathCard(props, ref) {

        const defaultRandom1 = Math.floor(Math.random() * 9) + 1;
        const defaultRandom2 = Math.floor(Math.random() * 9) + 1;

        
        const [randomNumber, setRandomNumber] = useState( (defaultRandom1 > defaultRandom2) ? defaultRandom1 : defaultRandom2) ;
        const [randomNumber2, setRandomNumber2] = useState((defaultRandom1 > defaultRandom2) ? defaultRandom2 : defaultRandom1);
        const [userAnswer, setUserAnswer] = useState('');
        const [isCorrect,setIsCorrect] = useState(null);
        
        function handleResultChange(event){
        setUserAnswer(event.target.value); 
        }

        function handleAnswerClick(event){
            const correctAnswer = randomNumber - randomNumber2;
            setIsCorrect(parseInt(userAnswer, 10) === correctAnswer);
            
        }

        function handleResetRandomNumbersClick(event){
            const defaultRandom3 = Math.floor(Math.random() * 9) + 1;
            const defaultRandom4 = Math.floor(Math.random() * 9) + 1;
            setRandomNumber((defaultRandom3 > defaultRandom4) ? defaultRandom3 : defaultRandom4);
            setRandomNumber2((defaultRandom3 > defaultRandom4) ? defaultRandom4 : defaultRandom3); 
            setUserAnswer('');
            setIsCorrect(null);
            //alert('My name is ');
        }
    
        useImperativeHandle(ref, () => ({
            triggerButtonClick: handleResetRandomNumbersClick,
        })) 


        return(
            <div className="math-card">
                <Card style={{ width: '18rem' }}>
        
                    <Card.Body>
                        
                        <Row className="g-4">
                        <Col md>
                            <Form>
                                <Form.Label>{randomNumber}</Form.Label>
                            </Form>
                        </Col>
                        <Col md>
                            -
                        </Col>
                        <Col md>
                            <Form>
                                <Form.Label>{randomNumber2}</Form.Label>
                            </Form>
                        </Col>
                        <Col md>
                            =
                        </Col>
                        <Col md={4}>
                            <Form.Control  type="number"  onChange={handleResultChange} value={userAnswer}/>
                            
                        </Col>
                            
                        </Row>
                        <Button variant="primary" onClick={handleAnswerClick}>Check Answer</Button>
                        
                        {isCorrect !== null && (
                            <Form.Label> {isCorrect ? 'Correct!' : 'Incorrect, try again'} </Form.Label>
                            
                                )}
                    </Card.Body>
                </Card>
            
            </div>
        )
    }
)
export default SubtractionCard