import Vue from 'vue'
import Vuex from 'vuex'
import PostService from '../services/PostServices'

Vue.use(Vuex)

const state = {
    notes: [],
    activeNote: {}
}

const actions = {
    getNotes({commit}) {
        PostService.fetchNotes().then((response) =>{
            commit('SET_NOTES', { notes: response.data })
        }, (err) => {
            console.log(err)
        })
    },
    addNote({
        commit
    }) {
        PostService.addNote(note).then((response) => {
            commit('ADD_NOTE',note)
        }, (err) => {
            console.log(err)
        })
        
    },

    saveNote({
        commit
    }) {
        PostService.updateNote(note).then((response) => {
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

    deleteNote({
        commit
    }) {
        PostService.deleteNote(note).then((response) => {
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

    EDIT_NOTE(state, text) {
        state.activeNote.text = text
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
        state.notes = notes
    }
}

const getters = {
    notes: state => state.notes,
    activeNote: state => state.activeNote,
    activeNoteText: state => state.activeNote.text
    
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})