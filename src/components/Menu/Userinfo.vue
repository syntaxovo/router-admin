<template>
  <div>
    <button type="button" class="btn btn-light btn-sm" @click="back">后退</button>
    <h4 class="text-center">用户详情-----{{ id }}</h4>
  </div>
</template>
<script>
export default {
  name: 'MyInfo',
  props: {
    id: {
      default: 0,
      type: Number
    }
  },
  methods: {
    back () {
      // 实现后退
      this.$router.go(-2)
    }
  }
}
</script>
<style lang="less" scoped>

</style>>
