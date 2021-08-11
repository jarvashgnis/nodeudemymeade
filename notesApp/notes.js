const fs = require('fs')

const loadNotes = () => {
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString())
    }
    catch(e){
        console.log(`Your error: ${e}`)
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) =>  note.title === title )

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        }) 
        console.log(`Adding Note: ${title}`) 
        saveNotes(notes)
    }
    else(console.log('You are trying to add a duplicate note.'))
}

const removeNote = (title) => {
    const notesDelete = loadNotes()

    const filteredNotes = notesDelete.filter((note) => note.title !== title )

    if(notesDelete.length !== filteredNotes.length){
        console.log('Note has been deleted.')
        saveNotes(filteredNotes)
    }
    else if(notesDelete.length === filteredNotes.length){
        console.log('Note to delete not found. Try again.')
    }

}

const listNotes = () => {
     const notes = loadNotes()
     console.log('Your Notes:')
     notes.forEach(note => {
         console.log(note.title)
     })
}

const readNotes = (noteSelected) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === noteSelected)
    note ? console.log(note.body) : console.log('Note not found.')
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}