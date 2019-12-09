<template>
  <div id="index">
    <!-- 這裡是首頁 -->
    <header class="header">
      <router-link to="/">
        <img class="gantt-logo" src="../assets/img/logo.png">
      </router-link>
    </header>
    <!-- router-view 會依據網址改變內容 -->
    <!-- 可以看 router/index.js -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style scoped>

.header {
  height: 80px;
  display: flex;
  align-items: center;
}

.gantt-logo{
  margin-left: 20px;
  width: 56px;
  height: 56px;
}

</style>