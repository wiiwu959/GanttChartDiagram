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
        <p class="greet">
          歡迎來到 Gantt Chart Editor ^^<br/>
          註冊帳號，立即開始使用吧！
        </p>
        <div class="field">
          <label for="nickname">暱稱：</label>
          <input
            id="nickname"
            type="text"
            placeholder="請輸入暱稱"
            class="text"
            v-model="newInput.nickname"
            required
          />
        </div>
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
        password: "",
        nickname: ""
      }
    };
  },
  methods: {
    createID: function() {
      var d = Date.now();
      if (
        typeof performance !== "undefined" &&
        typeof performance.now === "function"
      ) {
        d += performance.now(); //use high-precision timer if available
      }
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      });
    },
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
              userInformation: {
                signupTime: now,
                username: this.newInput.username,
                nickname: this.newInput.nickname
              },
              files: [
                {
                  id: "folder-" + this.createID(),
                  createTime: now,
                  path: "",
                  pathList: Array(),
                  name: "",
                  type: "folder"
                },
                {
                  id: "file-" + this.createID(),
                  path: "/",
                  pathList: ["/"],
                  name: "新檔案",
                  type: "file",
                  createTime: now,
                  updateTime: now,
                  tasks: {
                    data: [
                      {
                        id: 1,
                        text: "新任務",
                        start_date:
                          date.getDate() +
                          "-" +
                          (date.getMonth() + 1) +
                          "-" +
                          date.getFullYear(),
                        duration: 3,
                        progress: 0.6
                      }
                    ]
                  }
                },
                {
                  id: "folder-" + this.createID(),
                  path: "/",
                  pathList: ["/"],
                  name: "新資料夾",
                  type: "folder",
                  createTime: now,
                  updateTime: now
                }
              ]
            })
            .then(() => {
              // 註冊成功後顯示訊息 已自動登入
              alert("註冊成功！");
              that.$router.push({ name: "file" });
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
  height: calc(100vh - 160px);
  display: flex;
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

.menu .li #signup-button {
  background-color: #00bbff;
}
.form {
  padding: 40px;
  width: 960px;
  border: 2px solid #00bbff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form .greet{
  text-align: center;
  line-height: 1.5em;
  font-size: 24px;
  padding: 20px;
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