<template>
  <div id="index">
    <!-- 這裡是首頁 -->
    <header class="header">
      <img class="gantt-logo" src="../assets/img/logo.png" />
      <span
        class="hello"
        v-if="userInformation !== null"
      >{{ userInformation.nickname || '' | greetFormat }}</span>
      <button class="signout-button" @click="signOut()" v-if="userInformation !== null">登出</button>
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
      userInformation: null
    };
  },
  filters: {
    greetFormat: function(name) {
      let date = new Date();
      if (name !== "") {
        switch (Math.round(Math.random())) {
          case 0:
            return name + "，今天打算做什麼呢？";
          case 1:
            return "嗨！" + name;
        }
      }
    }
  },
  methods: {
    signOut: function() {
      let that = this;
      db.auth()
        .signOut()
        .then(function() {
          that.userInformation = null;
          that.$router.push({ name: "signin" });
        })
        .catch(function(error) {
          alert(error);
        });
    }
  },
  mounted() {
    const that = this;
    const database = db.database();
    db.auth().onAuthStateChanged(function(user) {
      if (user) {
        database.ref(user.uid).on("value", function(snapshot) {
          that.userInformation = snapshot.val().userInformation;
        });
      } else {
        that.userInformation = null;
      }
    });
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