import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./";
import { loadNotes } from "../../helpers";


export const startNewNote = () => {
    return async( dispatch, getState ) => {
        
        dispatch ( savingNewNote() );
        
        const { uid } = getState().auth;

        const NewNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc ( collection( FirebaseDB,  `${ uid }/journal/notes`) );
        await setDoc( newDoc, NewNote );

        NewNote.id = newDoc.id;


        // dispatch
        dispatch ( addNewEmptyNote( NewNote ) );
        dispatch ( setActiveNote( NewNote) );
        
    }
}

export const startLoadingNotes = () => {
    return async( dispatch,getState ) => {
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid );

        dispatch(setNotes( notes ));
    }
}

export const startSaveNote = () => {
    return async( dispatch, getState ) => {

        dispatch( setSaving() );

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc( FirebaseDB, `${ uid }/journal/notas/${ note.id }` );
        await setDoc(docRef, noteToFireStore, { merge: true})

        dispatch( updateNote( note ) );
    }
}