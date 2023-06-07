import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./";
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