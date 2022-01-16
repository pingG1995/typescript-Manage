<template>
    <div class="home">home</div>
</template>

<script lang="ts">
    // 引入装饰器
import {Component,Vue} from 'vue-property-decorator';
import {State,Getter, Mutation, Action} from 'vuex-class'
@Component({
    components:{}
})

export default class Home extends Vue {
@Action("setUser") setUser:any;

// 数据加载后将localStorage的值存储到setUser中
created(){
    if(localStorage.tsToken) {
        this.setUser(localStorage.tsToken);
    }
}
}
</script>

<style>

</style>