import Api from '@/services/Api'

export default {
  fetchNotes () {
    return Api().get('notes')
  },

  addNote (params) {
    return Api().post('notes', params)
  },

  updateNote (params) {
    return Api().put('notes/' + params.id, params)
  },

  getNote (params) {
    return Api().get('notes/' + params.id)
  },

  deleteNote (id) {
    return Api().delete('notes/' + id)
  }

}
