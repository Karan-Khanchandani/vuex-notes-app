<template>
  <div id="note-editor">
    <input type = "text"
      :value="activeNoteTitle"
      @input="editTitle"
      class="form-control">
    <textarea
      :value="activeNoteText"
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
            activeNoteText: 'activeNoteText',
            activeNoteTitle: 'activeNoteTitle'
        }),
        methods : mapActions([
            'editNote',
            'editTitle'
        ])
}
</script>
