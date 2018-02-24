import Vue from 'vue'
import EditorComponent from '@/components/Editor'
import store from '@/vuex/store'

describe('Editor.vue', () => {
  var vm, editorComponent

  beforeEach(() => {
      vm = new Vue({
          template: '<editor-component :activeNote="activeNote" v-ref:editor-component>' +
          '</editor-component>',
          components :{
            EditorComponent
          },
          data() {
            return{
              activeNote: {}
            }
          },
          store
      }).$mount();

      editorComponent = vm.$refs.$editorComponent;
  })

  describe('Add two num', () => {
    it('should add 2 + 2', () => {
      var a = 2, b = 2
      var c = a + b
      //var d = 4
      expect(c).to.equal(4)
    })
  })

  describe('Change Title', () => {
    it('should change title', () => {
      sinon.stub(editorComponent,'editTitle')
      this.$set(activeNote,'title','Hello Vue!')
      editorComponent.editTitle()
      expect(EditorComponent.editTitle).to.have.been.called
      editorComponent.editTitle().restore()
      //var d = 4
      //expect(c).to.equal(4)
    })
  })
})
