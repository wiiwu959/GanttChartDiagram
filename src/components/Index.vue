<template>
  <div id="index">
    <!-- 這裡是首頁 -->
    <header class="header">
      <img class="gantt-logo" src="../assets/img/logo.png">
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
  height: 50px;
  display: flex;
  align-items: center;
}

.gantt-logo{
  margin: left;
}

</style>