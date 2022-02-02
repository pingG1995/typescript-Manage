<template>

    <div class="layout">
    <!-- 头部 -->
    <LayoutHeader />

    <!-- 内容 -->
    <Content>
      <SideBar slot="left"></SideBar>
      <router-view slot="content"></router-view>
    </Content>
  </div>
</template>

<script lang="ts">
    // 引入装饰器
import {Component,Vue} from 'vue-property-decorator';
import {State,Getter, Mutation, Action} from 'vuex-class'
import LayoutHeader from './LayoutHeader.vue';
import SideBar from "./SideBar.vue"
import Content from './Content.vue'
@Component({
    components:{
      LayoutHeader,
      Content,
      SideBar
    }
})

export default class Layout extends Vue {
@Action("setUser") setUser:any;

// 数据加载后将localStorage的值存储到setUser中
created(){
    if(localStorage.tsToken) {
        this.setUser(localStorage.tsToken);
    }
}
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #f5f7f9;
}
</style>