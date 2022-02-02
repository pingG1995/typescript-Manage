<template>
      <el-scrollbar class="el-scrollbar">
    <el-menu class="el-menu-slide" :default-active="$router.currentRoute.path" router>
        <template v-for="item in GetRouters" >
          <el-menu-item v-if="item.hidden && item.children && item.children.length==1" :index="item.children[0].path" :key="item.name">
            <i v-if="item.children[0].meta.icon" :class="item.children[0].meta.icon"></i>
            <span slot="title">{{item.children[0].meta.title}}</span>
          </el-menu-item>

          <el-submenu
            :key="item.name"
            :index="item.path"
            v-if="item.hidden &&  item.children && item.children.length>1"
            >
            <template slot="title">
              <i v-if="item.children[0].meta.icon" :class="item.meta.icon"></i>
              <span slot="title">{{item.meta.title}}</span>
            </template>
              <el-menu-item v-for="child in item.children"  :key="child.name" :index="child.path">
                 <i v-if="child.meta.icon" :class="child.meta.icon"></i>
              <span slot="title">{{child.meta.title}}</span>
              </el-menu-item>
          </el-submenu>
        </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
    // 引入装饰器
import {Component,Vue, Provide,Watch} from 'vue-property-decorator';
import {Getter,State,Action,Mutation} from 'vuex-class';
@Component({
    components:{
    }
})
export default class SideBar extends Vue {
@Getter("routers") GetRouters:any;


@Watch("Watch") handleRouteChange(to:any) {
  console.log(to)
}
}
</script>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
  border-right: 1px solid #e6e6e6;
  background: #fff;
  .el-menu-slide {
    border-right: none;
    i {
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>