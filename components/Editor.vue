<template>
  <div id="note-editor">
    <input type = "text"
      :value="activeNote.title"
      @input="editTitle"
      class="form-control">
    <textarea
      :value="activeNote.notes"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
//import { editNote } from '../vuex/actions'
import {mapGetters, mapActions} from 'vuex'

export default {
    computed :  mapGetters({
            activeNote: 'activeNote'
        }),
        methods : mapActions([
            'editNote',
            'editTitle'
        ])
        
}
</script>
