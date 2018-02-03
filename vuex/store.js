import Vue from 'vue'
import Vuex from 'vuex'
import PostService from '../services/PostService'

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote: {}
}

const actions = {
    getNotes({commit}) {
        PostService.fetchNotes().then((response) =>{
            commit('SET_NOTES', { notes: response.data.notes })
        }, (err) => {
            console.log(err)
        })
    },
    addNote({
        commit
    }) {
        var note = {
            title: 'New Note',
            notes : '',
            favorite: false
        }
        PostService.addNote(note).then((response) => {
            debugger
            commit('ADD_NOTE',response.data.note)
        }, (err) => {
            console.log(err)
        })
        
    },

    saveNote({
        commit, state
    },note) {
        debugger;
        PostService.updateNote(note._id, note).then((response) => {
            commit('SAVE_NOTE',note)
        }, (err) => {
            console.log(err)
        })
        
    },

    editNote({
        commit
    }, e) {
        commit('EDIT_NOTE', e.target.value)
    },
    editTitle({
        commit
    }, e) {
        commit('EDIT_TITLE', e.target.value)
    },
    deleteNote({
        commit
    },id) {
        PostService.deleteNote(id).then((response) => {
            commit('DELETE_NOTE')
        }, (err) => {
            console.log(err)
        })
    },

    updateActiveNote({
        commit
    }, note) {
        commit('SET_ACTIVE_NOTE', note)
    },

    toggleFavorite({
        commit
    }) {
        commit('TOGGLE_FAVORITE')
    }
}

const mutations = {
    ADD_NOTE(state, newNote) {
        state.notes.push(newNote)
        state.activeNote = newNote
    },
    SAVE_NOTE(state, note){

    },

    EDIT_NOTE(state, text) {
        state.activeNote.notes = text
    },

    EDIT_TITLE(state, title) {
        state.activeNote.title = title
    },

    DELETE_NOTE(state) {
        var index = state.notes.indexOf(state.activeNote)
        state.notes.splice(index, 1)
    },

    TOGGLE_FAVORITE(state) {
        state.activeNote.favorite = !state.activeNote.favorite
    },

    SET_ACTIVE_NOTE(state, note) {
        state.activeNote = note
    },
    SET_NOTES(state, notes){
        state.notes = notes.notes
    }
}

const getters = {
    notes: state => state.notes,
    activeNote: state => state.activeNote,
    activeNoteText: state => state.activeNote.notes,
    activeNoteTitle: state => state.activeNote.title
    
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})