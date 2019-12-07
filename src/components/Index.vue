<template>
  <div>
    <!-- 這裡是首頁 -->
    <header class="header">
        <!-- 這裡是最上面放logo的地方 -->
        <img src="../assets/img/header.png" alt="">
    </header>
    <!-- router-view 會依據網址改變內容 -->
    <!-- 可以看 router/index.js -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style scoped>

</style>