import {useState, useEffect} from "react"
import { List, ListItem, ListIcon, Button, Spinner, Textarea } from "@chakra-ui/react"
import {getEntries, addEntry, Entry} from '../api/entries';

const EntriesPage = () => {
    const [loading, setLoading] = useState(true);
    const [addingEntry, setAddingEntry] = useState(false);
    const [currentEntries, setCurrentEntries] = useState([]);

    useEffect(() => {
        setCurrentEntries(getEntries());
        setLoading(false);
    }, []);

    if (loading) return <Spinner thickness="4px" />

    const addClicked = () => {

    };

    return (
        <div>
            <div>
                <Button onClick={addClicked} isDisabled={addingEntry}>
                    Add Entry
                </Button>
            </div>
            <div>
                <List>
                    {currentEntries.map((entry) => (
                        <ListItem key={entry.id}>
                            {entry.content}
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    );
};

export default EntriesPage;