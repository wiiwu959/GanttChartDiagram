<template>
  <div class="all" id="vue-app">
    <div class="top-bar"></div>
    <div class="main">
      <ul class="menu">
        <li class="li">
          <router-link class="button" to="/signup" id="signup-button">註冊</router-link>
        </li>
        <li class="li">
          <router-link class="button" to="/signin" id="login-button">登入</router-link>
        </li>
      </ul>
      <form class="form">
        <div class="field">
          <label for="email">信箱：</label>
          <input
            id="email"
            type="email"
            placeholder="請輸入信箱"
            class="email"
            v-model="newInput.username"
            required
          />
        </div>
        <div class="field">
          <label for="password">密碼：</label>
          <input
            id="password"
            type="password"
            placeholder="請輸入密碼"
            class="password"
            v-model="newInput.password"
            required
          />
        </div>
        <div class="field">
          <input type="button" class="submit" value="送出" @click="signIn()" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { db } from "../db.js";
const fAuth = db.auth();
export default {
  name: "signin",
  data() {
    return {
      newInput: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signIn: function() {
      let that = this;
      db
        .auth()
        .signInWithEmailAndPassword(
          this.newInput.username,
          this.newInput.password
        )
        .then(function(temp) {
          alert("登入成功！");
          that.$router.push({ path: "/redirect" });
        })
        .catch(function(error) {
          switch (error.code) {
            case "auth/invalid-email":
              alert("帳號格式錯誤。");
              break;
            case "auth/user-disabled":
              alert("帳戶被停用");
              break;
            case "auth/user-not-found":
              alert("帳號不存在。");
              break;
            case "auth/wrong-password":
              alert("密碼錯誤。");
              break;
          }
        });
    }
  }
};
</script>

<style scoped>
.all {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  flex-direction: column;
}
.top-bar {
  width: 100%;
  height: 80px;
  background-color: #00bbff;
}
.main {
  display: flex;
  height: calc(100vh - 160px);
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
.menu {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.menu .li {
  margin-right: 10px;
}

.menu .li .button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 54px;
  border: 2px solid #00bbff;
  color: #000000;
  border-bottom: 0;
  border-radius: 10px 10px 0px 0px;
  font-size: 24px;
  text-decoration: none;
}

.menu .li .button:hover {
  background: #00bbff;
}

.menu .li #login-button {
  background-color: #00bbff;
}
.form {
  width: 960px;
  padding: 40px;
  border: 2px solid #00bbff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.field {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 24px;
}
.form input {
  font-size: 24px;
  padding-left: 10px;
}
.form .submit {
  width: 100px;
  height: 50px;
  background-color: #fff;
  border: 2px solid #00bbff;
  border-radius: 10px;
  font-size: 24px;
}

.form .submit:hover {
  background-color: #00bbff;
}
</style>