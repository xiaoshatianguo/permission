<template>
  <el-container>
    <el-header>
      <el-button @click="login">登录</el-button>
    </el-header>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item,index) in tag"
          :key="index"
          :label="item.name"
          :name="item.name">
          {{item.name}}
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeName: '',
      tag: [
        {
          name: '用户管理'
        },
        {
          name: '配置管理'
        },
        {
          name: '角色管理'
        },
        {
          name: '定时任务'
        }
      ]
    }
  },
  mounted () {
    const storage = this.$storage.get('user')
    // eslint-disable-next-line no-console
    console.log(storage.role)
    if (!storage) {
      this.$router.push('/login')
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    handleClick () {
      // eslint-disable-next-line no-console
      console.log(this.activeName)
    }
  }
}
</script>

<style scoped>
</style>
