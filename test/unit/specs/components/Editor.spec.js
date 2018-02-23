import Vue from 'vue'
import EditorComponent from 'components/Editor'
import store from 'vuex/store'

describe('Editor.vue', () => {
  var vm, editorcomponent

  // beforeEach(() => {
  //     vm = new Vue({
  //         template: '<add-item-component :items="items" :id="id" v-ref:add-item-component>' +
  //         '</add-item-component>',

  //     })
  // })

  describe('Add two num', () => {
    it('should add 2 + 2', () => {
      var a = 2, b = 2
      var c = a + b
      var d = 4
      expect(c).to.equal(4)
    })
  })
})
