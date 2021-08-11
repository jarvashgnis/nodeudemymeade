const notes = require('./notes')

const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const { argv } = require('yargs')



yargs.command({
    command: 'Add',
    describe: 'Used to add a note.',
    builder: {
        title:{
            describe: 'Note Title',
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'Delete',
    describe: 'Used to delete a note.',
    builder: {
        title:{
            describe: 'Note Title',
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'Read',
    describe: 'Used to read a note.',
    builder: {
        title:{
            describe: 'Note Title',
            type: 'string'
        }
    },
    handler(){
        notes.readNotes(argv.title)
    }
})

yargs.command({
    command: 'List',
    describe: 'Used to list all notes.',
    handler(){
        notes.listNotes()
    }
})

debugger
yargs.parse()
