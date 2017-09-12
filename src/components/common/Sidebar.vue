<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
              <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
              </el-menu-item>
          </el-submenu>
        </template>
       <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'el-icon-setting',
          index: 'home',
          title: 'Dashboard'
        },
        {
          icon: 'el-icon-setting',
          index: '2',
          title: '人事管理',
          subs: [
            {
              index: 'classmanage',
              title: '学生管理'
            },
            {
              index: '绩效薪资管理',
              title: '绩效薪资管理'
            },
            {
              index: '',
              title: '值班管理'
            }
          ]
        },
        {
          icon: 'el-icon-setting',
          index: '3',
          title: '系统管理',
          subs: [
            {
              index: 'addstudent',
              title: '添加学生'
            }
          ]
        }
      ]
    }
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
