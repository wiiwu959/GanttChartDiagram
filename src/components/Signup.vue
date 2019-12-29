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
          <input type="button" class="submit" value="送出" @click="signUp()" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../db.js";
const database = db.database();
export default {
  name: "signup",
  data() {
    return {
      newInput: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signUp: function() {
      let that = this;
      // 透過 auth().createUserWithEmailAndPassword 建立使用者
      db.auth()
        .createUserWithEmailAndPassword(
          this.newInput.username,
          this.newInput.password
        )
        .then(temp => {
          // 取得註冊當下的時間
          let date = new Date();
          let now = date.getTime();
          // 記錄相關資訊到 firebase realtime database
          database
            .ref(temp.user.uid)
            .set({
              signupTime: now,
              username: this.newInput.username,
              files: [
                {
                  createTime: now,
                  path: "",
                  pathList: Array(),
                  name: "",
                  type: "folder"
                },
                {
                  path: "/",
                  pathList: ["/"],
                  name: "New file",
                  type: "file",
                  createTime: now,
                  updateTime: now,
                  tasks: {
                    data: [
                      {
                        id: 1,
                        text: "Task #1",
                        start_date: "18-08-2019",
                        duration: 3,
                        progress: 0.6
                      }
                    ]
                  }
                },
                {
                  path: "/",
                  pathList: ["/"],
                  name: "New folder",
                  type: "folder",
                  createTime: now,
                  updateTime: now
                }
              ]
            })
            .then(() => {
              // 儲存成功後顯示訊息
              alert("註冊成功！");
              db.auth().signOut();
              that.$router.push({ path: "/signin" });
            });
        })
        .catch(error => {
          // 註冊失敗時顯示錯誤訊息
          switch (error.code) {
            case "auth/invalid-email":
              alert("帳號格式錯誤。");
              break;
            case "auth/email-already-in-use":
              alert("已存在此使用者");
              break;
            case "auth/operation-not-allowed":
              alert("不允許此操作");
              break;
            case "auth/weak-password":
              alert("密碼強度不足。");
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

.menu .li #signup-button {
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
  margin: 10px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
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