import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Navi from './components/Navi';
import RoundForm from './components/RoundForm';
import RealForm from './components/RealForm';

function App() {

  const [stage, setStage] = useState(0);

  const [roundNum, setRoundNum] = useState(5);
  const [realNames, setRealNames] = useState([]);

  function Wrapper({ children }) {
    return (
      <>
        <Navi />
        <Container className="py-4">
          {children}
        </Container>
      </>)
  }

  if (stage === 0) {
    return (
      <>
        <Wrapper>
          <RoundForm setStage={setStage} roundNum={roundNum} setRoundNum={setRoundNum} />
        </Wrapper>
      </>
    )
  }

  if (stage === 1) {
    return (
      <>
        <Wrapper>
          <RealForm setStage={setStage} roundNum={roundNum} realNames={realNames} setRealNames={setRealNames} />
        </Wrapper>
      </>
    )
  }

  return (
    <>
      <Wrapper>

      </Wrapper>
    </>
  )
}

export default App
