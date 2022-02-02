<template>
  <el-container>


  </el-container>
</template>

<script lang="ts">
    // 引入装饰器
import {Component,Vue} from 'vue-property-decorator';
import {State,Getter, Mutation, Action} from 'vuex-class'
@Component({
    components:{
    }
})

export default class AccountData extends Vue {

// 数据加载后将localStorage的值存储到setUser中
created(){

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