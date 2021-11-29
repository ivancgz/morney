<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  computed: {
    tagList() {
      return this.$store.state.tagList;
    }
  }
})
export default class Tags extends Vue{
  selectedTags: string[] = [];

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.$store.commit('fetchTags')
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toggle(tag: string){
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0){
      this.selectedTags.splice(index, 1)
    } else {
      this.selectedTags.push(tag)
    }
    this.$emit('update:value', this.selectedTags)
  }
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  create(){
    const name = window.prompt('请输入标签名');
    if (!name) { return window.alert('标签名不能为空'); }
    this.$store.commit('createTag', name)
  }
}
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
    flex-grow: 1;
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
    overflow: auto;
    &::-webkit-scrollbar{
      width: 0;
      height: 0;
    }
    > .current {
      display: flex;
      flex-wrap: wrap;
      > li{
        $bg: #d9d9d9;
        background: $bg;
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius: (24px/2);
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
        &.selected {
          background: darken($bg, 50%);
          color: white;
        }
      }
    }
    > .new{
      padding-top: 16px;
      button{
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }
</style>