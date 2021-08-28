import {v4 as uuid} from 'uuid';

interface Entry {
    id: String,
    content: String,
    createdAt: Date,
    modifiedAt: Date
}

const _entries: Entry[] = [{
    id: uuid(),
    content: 'Hello world was a good day',
    createdAt: new Date(),
    modifiedAt: new Date()
}];

function getEntries() : Entry[] {
    return _entries;
};

function addEntry(content: String) : String {
    const entry: Entry = {
        id: uuid(),
        content: content,
        createdAt: new Date(),
        modifiedAt: new Date()
    };

    _entries.push(entry);

    return entry.id;
}

export {
    getEntries,
    addEntry
};
export type { Entry };
