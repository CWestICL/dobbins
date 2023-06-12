import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function RoundForm({ setStage, roundNum, setRoundNum }) {
    return (
        <InputGroup className="mb-3">
            <FormControl
                value={roundNum}
                aria-label='search'
                aria-describedby='search'
                type='number'
                min="1"
                max="10"
                onChange={(e) => setRoundNum(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => setStage(1)}>
                Next
            </Button>
        </InputGroup>
    );
}

export default RoundForm
