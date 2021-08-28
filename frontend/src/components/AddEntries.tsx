import {useState} from 'react';
import PropTypes from 'prop-types';
import {Textarea, Button} from '@chakra-ui/react';

const AddEntry = ({add, cancel}) => {
    const [content, setContent] = useState<String>();

    return (
        <div>
            <div>
            <Textarea value={content} onChange={(e) => setContent(e.target.value || '')} />
            </div>
            <div>
                <Button onClick={() => add(content)}>Add</Button>
                <Button onClick={cancel}>Cancel</Button>
            </div>
        </div>
    );
};

export default AddEntry;

AddEntry.propTypes = {
    add: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
};