<template>
  <div id="index">
    <!-- 這裡是首頁 -->
    <header class="header">
      <router-link to="/redirect">
        <img class="gantt-logo" src="../assets/img/logo.png" />
      </router-link>
      <button class="signout-button" @click="signOut()" v-if="signinToken!==''">登出</button>
    </header>
    <!-- router-view 會依據網址改變內容 -->
    <!-- 可以看 router/index.js -->
    <router-view></router-view>
  </div>
</template>

<script>
import { db } from "../db.js";
export default {
  name: "index",
  data() {
    return {
      signinToken: '',
      files: []
    };
  },
  beforeMount() {
    this.signinToken = localStorage.getItem("signinToken") || "";
  },
  methods: {
    signOut: function() {
      let that = this;
      db.auth()
        .signOut()
        .then(function() {
          that.signinToken = "";
          localStorage.setItem("signinToken", that.signinToken);
          that.$router.push({ path: "/signin" });
        })
        .catch(function(error) {
          alert(error);
        });
    }
  }
};
</script>

<style scoped>
.header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gantt-logo {
  margin-left: 20px;
  width: 56px;
  height: 56px;
}
.signout-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  border: 2px solid #00bbff;
  font-size: 20px;
  margin-right: 20px;
}
.signout-button:hover {
  background-color: #00bbff;
}
</style>