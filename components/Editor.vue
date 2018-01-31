<template>
  <div id="note-editor">
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
            activeNoteText: 'activeNoteText'
        }),
        methods : mapActions([
            'editNote'
        ])
}
</script>
