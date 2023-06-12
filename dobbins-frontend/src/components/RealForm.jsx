import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react'

function RealForm({ setStage, roundNum, realNames, setRealNames }) {

    useEffect(() => {
        initRealNames();
    }, []);

    const initRealNames = () => {
        const array = [];
        for (let i = 0; i < roundNum; i++) {
            array.push("")
        }
        setRealNames(array);
        console.log(realNames);
    }

    return (
        <InputGroup className="mb-3">
            {realNames.map((horse, index) => (
                <InputGroup.Text key={`realName-${index}`} id={`realName-${index}`}>{horse}</InputGroup.Text>
            ))}
            <FormControl
                aria-label='search'
                aria-describedby='search'
                type='text'
            />
            <Button variant="outline-secondary" onClick={() => setStage(2)}>
                Next
            </Button>
        </InputGroup>
    );
}

export default RealForm
