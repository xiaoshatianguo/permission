<template>
  <div>
    <h2>login</h2>
    <el-button @click="click">首页</el-button>
    <h5>因为简单化，这里采用的是模拟有后台的方法，判断没有storage则跳到该页面，页面加载自动创建storage，回到首页即可看到不同权限不同tag菜单的效果。这里需要手动修改该文件的role来看效果，默认是admin权限</h5>
    <el-button @click="admin">admin权限</el-button>
    <el-button @click="user">user权限</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.$storage.set('user', {
      role: ['admin']
    })
  },
  methods: {
    click () {
      this.$router.push('/')
    },
    // 手动修改权限重定向到登录页面刷新storage，router权限有admin和user
    admin () {
      this.$storage.set('user', {
        role: ['admin']
      })
    },
    user () {
      this.$storage.set('user', {
        role: ['admin', 'user']
      })
    }
  }
}
</script>

<style scoped>
</style>
