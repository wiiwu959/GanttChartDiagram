<template>
  <div id="index">
    <!-- 這裡是首頁 -->
    <header class="header">
      <!-- 這裡是最上面放logo的地方 -->
      <p id="gannt_logo">甘</p>

      <div id="tool_bar_outer">
        <div id="tool_bar_left">


            <img class="img_left" src="../assets/img/Icon metro-table.png">
            <img class="img_left" src="../assets/img/ic_zoom_in_24px.png">
            <img class="img_left" src="../assets/img/ic_zoom_out_24px.png">
            <img class="img_left" src="../assets/img/ic_undo_24px.png" style="width: 30px">
            <img class="img_left" src="../assets/img/ic_redo_24px.png" style="width: 30px">
        </div>
        <div id="tool_bar_right">
            <img class="img_right" src="../assets/img/ic_save_24px.png">
            <img class="img_right" src="../assets/img/ic_home_24px.png">
        </div>
      </div>

      <!-- <img src="../assets/illustration/header.png" alt /> -->
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
}

#gannt_logo {
    top: -20px;
    left: 10px;
    width: 45px;
    height: 54px;
    text-align: center;
    display: block;
    float: center;
    position: relative;
    background-color: cornflowerblue;
    letter-spacing: 10;
    font: Bold 36px/54px Noto Sans TC;
    color: rgba(247, 242, 242, 0.911);
    opacity: 1;
}

#tool_bar_outer {
    display: flex;
}

#tool_bar_left {
    top: -50px;
    /*left: 0px;*/
    width: 80%;
    height: 60px;
    position: relative;
    background: #00BBFF 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    justify-content: flex-start;
}

#tool_bar_right {
    top: -50px;
    /*left: 0px;*/
    width: 20%;
    height: 60px;
    position: relative;
    background: #00BBFF 0% 0% no-repeat padding-box;
    opacity: 1;
    display: flex;
    justify-content: flex-end;
}

.img_left {
    position: relative;
    height: 30px;
    margin: 15px;
    left: 15px;
}

.img_right {
    position: relative;
    height: 30px;
    margin: 15px;
    right: 15px;
}

</style>