<template>
<el-menu
        :style="{width: '230px'}"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
      <p class="logo-lg">DIDI陪诊</p>
      
        <!-- <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item> -->

        <!-- 调用组件 通过 ​​props 传递数据 -->
        <TreeMenu :menuData="menuData" :index="1"  />
      </el-menu>
</template>

<script setup>
//引入组件
import TreeMenu from './treeMenu.vue';
//获取实例
import { useRouter } from 'vue-router' 
//创建响应式数据对象
import { reactive } from 'vue';

//调用实例
const router = useRouter()
console.log(router,'router')
const menuData = reactive(router.options.routes[0].children)
console.log(menuData,"打印")

const handleOpen = () => {}
const handleClose = () => {}
</script>

<style lang="less" scoped>
.aside-contsoner{
    height: 100;
}
.logo-lg{
    font-size: 20px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #fff;
}
</style>