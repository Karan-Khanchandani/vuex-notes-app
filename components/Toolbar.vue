<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite"
      class="glyphicon glyphicon-star"
      :class="{starred: activeNote.favorite}"></i>
    <i @click="deleteNote(activeNote._id)" class="glyphicon glyphicon-trash"></i>
    <i @click="saveNote(activeNote)" class="glyphicon glyphicon-floppy-disk"></i>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed :  mapGetters({
            activeNote: 'activeNote'
        }),
    methods : mapActions([
        'addNote',
      'deleteNote',
      'toggleFavorite',
      'saveNote'
    ])
}

</script>