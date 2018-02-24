import Api from './Api'

export default {
  fetchNotes () {
    return Api().get('notes')
  },

  addNote (params) {
    return Api().post('notes', params)
  },

  updateNote (id, params) {
    return Api().put('notes/' + id, params)
  },

  getNote (params) {
    return Api().get('notes/' + params.id)
  },

  deleteNote (id) {
    return Api().delete('notes/' + id)
  }

}
