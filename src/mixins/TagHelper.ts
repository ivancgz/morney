import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class TagHelper extends Vue {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    createTag() {
        const name = window.prompt('请输入标签名');
        if (!name) { return window.alert('标签名不能为空'); }
        this.$store.commit('createTag', name)
    }
}

export default TagHelper;