import {useState, useEffect} from "react"
import { List, ListItem, Button, Spinner } from "@chakra-ui/react"
import {getEntries, addEntry} from '../api/entries';
import AddEntry from "../components/AddEntries";

const EntriesPage = () => {
    const [loading, setLoading] = useState(true);
    const [addingEntry, setAddingEntry] = useState(false);
    const [currentEntries, setCurrentEntries] = useState([]);

    useEffect(() => {
        setCurrentEntries(getEntries());
        setLoading(false);
    }, []);

    if (loading) return <Spinner thickness="4px" />

    const addEntryClicked = (content) => {
        const entry = addEntry(content);

        setCurrentEntries((x) => ([
            ...x,
            entry
        ]));
        setAddingEntry(false);
    };

    return (
        <div>
            <div>
                <Button onClick={() => setAddingEntry(true)} isDisabled={addingEntry}>
                    Add Entry
                </Button>
            </div>
            {addingEntry && (
                <AddEntry add={addEntryClicked} cancel={() => setAddingEntry(false)} />
            )}
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