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
          <input id="email" type="email" placeholder="請輸入信箱" class="email" required />
        </div>
        <div class="field">
          <label for="password">密碼：</label>
          <input id="password" type="password" placeholder="請輸入密碼" class="password" required />
        </div>
        <div class="field">
          <input type="submit" class="submit" value="送出" />
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
      user: {},
      isAuth: false
    };
  },
  created() {
    fAuth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        this.isAuth = true;
      } else {
        this.user = {};
        this.isAuth = false;
      }
    });
  },
  methods: {
    login() {
      const authProvider = new firebase.auth.GoogleAuthProvider();
      fAuth
        .signInWithPopup(authProvider)
        .then(result => {
          this.user = result.user;
          this.isAuth = true;
        })
        .catch(err => console.error(err));
    },
    logout() {
      fAuth
        .signOut()
        .then(() => {
          this.user = {};
          this.isAuth = false;
        })
        .catch(err => console.log(err));
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 84px 0;
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
  height: 420px;
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