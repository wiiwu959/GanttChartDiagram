<template>
  <!-- 這裡是檔案列表的頁面 -->
  <!-- <img src="../assets/illustration/file.png" alt=""> -->
  <div>
    <div class="bar">
      <button class="menu-button" @click="menuOn = !menuOn;" :class="{'menu-on': menuOn}">
        <img src="../assets/img/menu-button.png" />
      </button>
      <ul class="path">
        <span>當前資料夾：</span>
        <li
          v-for="(item, index) in pathList"
          :key="index"
          class="path-link"
          @click="changePath(index)"
        >{{item}}</li>
      </ul>
    </div>
    <div class="wrap">
      <aside class="menu" v-if="menuOn">
        <ul class="menu-list">
          <li class="menu-item" @click="createFile('folder')">新增資料夾</li>
          <li class="menu-item" @click="createFile('file')">新增檔案</li>
        </ul>
      </aside>
      <main class="main">
        <div class="folders">
          <div class="title">
            <span class="name">資料夾</span>
            <span class="last-time">上次儲存時間</span>
            <span class="created-time">建立時間</span>
          </div>
          <ul class="list">
            <li
              v-for="(item, index) in folderList"
              :key="index"
              class="list-item"
              :class="{'active':optionOn === 0}"
              @click="openFolder(item)"
            >
              <div class="left">
                <span class="name">{{item.name}}</span>
                <span class="last-time">{{item.updateTime | dateFormat}}</span>
                <span class="created-time">{{item.createTime| dateFormat}}</span>
              </div>
              <button class="option-button" @click.stop="optionOn = item.id">
                <img src="../assets/img/option-button.png" alt="選項按鈕" />
              </button>
              <ul class="option-list" v-if="optionOn === item.id">
                <li class="option-list-item" @click.stop="renameFile(item); optionOn = null;">重新命名</li>
                <li class="option-list-item" @click.stop="copyFile(item); optionOn = null;">複製資料夾</li>
                <li class="option-list-item" @click.stop="deleteFile(item); optionOn = null;">刪除資料夾</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="files">
          <div class="title">
            <span class="name">檔案</span>
            <span class="last-time">上次儲存時間</span>
            <span class="created-time">建立時間</span>
          </div>
          <ul class="list">
            <li
              v-for="(item, index) in fileList"
              :key="index"
              class="list-item"
              :class="{'active':optionOn === 1}"
              @click="openFile(item)"
            >
              <div class="left">
                <span class="name">{{item.name}}</span>
                <span class="last-time">{{item.updateTime | dateFormat}}</span>
                <span class="created-time">{{item.createTime| dateFormat}}</span>
              </div>
              <button class="option-button" @click.stop="optionOn = item.id">
                <img src="../assets/img/option-button.png" alt="選項按鈕" />
              </button>
              <ul class="option-list" v-if="optionOn === item.id">
                <li class="option-list-item" @click.stop="renameFile(item); optionOn = null;">重新命名</li>
                <li class="option-list-item" @click.stop="copyFile(item); optionOn = null;">複製檔案</li>
                <li class="option-list-item" @click.stop="deleteFile(item); optionOn = null;">刪除檔案</li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { db } from "../db.js";
export default {
  name: "file",
  data() {
    return {
      mainWidth: `${window.innerWidth}px`,
      menuOn: false,
      optionOn: null,
      path: this.$route.params.path || "/",
      pathList: this.$route.params.pathList ||  ["/"],
      data: {},
      folderList: [],
      fileList: []
    };
  },
  filters: {
    dateFormat: function(date) {
      date = new Date(date);
      return (
        date.getFullYear() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes()
      );
    }
  },
  methods: {
    // 隨機產生一串ID
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
    // 更新資料庫（整筆丟回去）
    updateDatabase() {
      let that = this;
      // 確認登入狀態
      db.auth().onAuthStateChanged(function(user) {
        if (user) {
          db.database()
            .ref(user.uid)
            .set(that.data)
            .then(function() {
              // console.log("database updated");
            })
            .catch(error => {
              alert(error);
            });
        }
      });
    },
    // 新增檔案/資料夾
    createFile: function(type) {
      let that = this;
      // 取得當下時間
      let date = new Date();
      let now = date.getTime();
      if (type === "folder") {
        that.data.files.push({
          id: "folder-" + that.createID(),
          path: that.path,
          pathList: that.pathList.slice(),
          name: "新資料夾",
          type: "folder",
          updateTime: now,
          createTime: now
        });
      } else if (type === "file") {
        that.data.files.push({
          id: "file-" + that.createID(),
          path: that.path,
          pathList: that.pathList.slice(),
          name: "新檔案",
          type: "file",
          tasks: {},
          createTime: now,
          updateTime: now
        });
      }
      this.updateDatabase();
    },
    // 複製檔案/資料夾
    copyFile: function(file) {
      let that = this;
      // 取得當下時間
      let date = new Date();
      let now = date.getTime();
      if (file.type === "folder") {
        that.data.files.push({
          id: "folder-" + that.createID(),
          path: file.path,
          pathList: file.pathList.slice(),
          name: file.name + " - 複製",
          type: "folder",
          createTime: now,
          updateTime: now
        });
      } else if (file.type === "file") {
        that.data.files.push({
          id: "folder-" + that.createID(),
          path: file.path,
          pathList: file.pathList.slice(),
          name: file.name + " - 複製",
          tasks: {},
          type: "file",
          createTime: now,
          updateTime: now
        });
      }
      this.updateDatabase();
    },
    // 刪除檔案/資料夾
    deleteFile: function(file) {
      const filesLength = this.data.files.length;
      for (let i = 0; i < filesLength; i++) {
        if (this.data.files[i].id === file.id) {
          this.data.files.splice(i, 1);
          break;
        }
      }
      this.updateDatabase();
    },
    // 重新命名檔案/資料夾
    renameFile: function(file) {
      let newName = prompt("請輸入新名稱");
      if (newName != "") {
        let date = new Date();
        let now = date.getTime();
        const filesLength = this.data.files.length;
        for (let i = 0; i < filesLength; i++) {
          if (this.data.files[i].id === file.id) {
            this.data.files[i].name = newName;
            this.data.files[i].updateTime = now;
            break;
          }
        }
        this.updateDatabase();
      }
    },
    // 更新 file/ folder list
    updateList: function() {
      const filesLength = this.data.files.length;
      this.fileList = [];
      this.folderList = [];
      for (let i = 0; i < filesLength; i++) {
        const currentFile = this.data.files[i];
        if (this.path === currentFile.path) {
          if (currentFile.type === "file") {
            this.fileList.push(currentFile);
          } else if (currentFile.type === "folder") {
            this.folderList.push(currentFile);
          }
        }
      }
    },
    // 開啟資料夾
    openFolder: function(item) {
      if (this.path != item.path + item.name + "/") {
        this.path = item.path + item.name + "/";
        if (item.pathList != undefined) {
          this.pathList = item.pathList.slice();
        } else {
          this.pathList = [];
        }
        this.pathList.push(item.name + "/");
        this.updateList();
      }
    },
    // 開啟檔案
    openFile: function(item) {
      this.$router.push({
        name: `gantt`,
        params: {
          file: item,
          data: this.data,
        }
      });
    },
    // 點路徑去不同的資料夾
    changePath: function(index) {
      let newPath = "";
      for (let i = 0; i <= index; i++) {
        newPath += this.pathList[i];
      }
      for (let i = 0; i < this.data.files.length; i++) {
        if (this.data.files[i].type === "folder") {
          let folderPath =
            this.data.files[i].path + this.data.files[i].name + "/";
          if (folderPath === newPath) {
            this.openFolder(this.data.files[i]);
            break;
          }
        }
      }
    },
  },
  beforeMount() {
    const that = this;
    db.auth().onAuthStateChanged(function(user) {
      if (user) {
        db.database()
          .ref(user.uid)
          .on("value", function(snapshot) {
            that.data = snapshot.val();
            that.updateList();
          });
      }
    });
  },
  mounted() {
    const that = this;
    // 點到小選單以外的地方的時候，選單會被關掉
    window.addEventListener("click", function(event) {
      let node = event.target.nodeName;
      if (node != "IMG" && node != "BUTTON") {
        that.optionOn = null;
      }
    });
  }
};
</script>

<style scoped>
.bar {
  background-color: #00bbff;
  height: 80px;
  display: flex;
  align-items: center;
}

.bar .menu-button {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
}

.bar .menu-button:hover {
  border: 2px rgba(255, 255, 255, 0.5) solid;
  border-radius: 5px;
}
.bar .menu-button img {
  width: 52px;
  height: 52px;
}

.bar .path {
  color: #fff;
  font-size: 24px;
  margin-left: 20px;
  display: flex;
  align-items: center;
}

.bar .path .path-link {
  cursor: pointer;
  margin-left: 5px;
}
.bar .path .path-link:hover {
  font-weight: bold;
}
.wrap {
  display: flex;
  justify-content: flex-start;
}

.menu {
  width: 240px;
  background-color: #00bbff;
}
.menu .menu-list {
  margin: 30px 0 0 30px;
}
.menu .menu-item {
  font-size: 24px;
  color: #fff;
  padding: 1.5px 0;
  margin-bottom: 9px;
  cursor: pointer;
}

.menu .menu-item:hover {
  font-weight: bold;
}

.main {
  padding: 3px 40px 40px 40px;
  background: #eeeeee;
  width: 100%;
}

.main.menu-on{
  width: calc(100vw -240px);
}

.main .title {
  margin-top: 30px;
  color: #777777;
  padding: 0 20px 10px 20px;
  border-bottom: 2px #777777 solid;
  font-size: 24px;
  line-height: 36px;
  display: flex;
}
.main .title span {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main .list {
  font-size: 24px;
  line-height: 36px;
}

.main .list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 85px;
  cursor: pointer;
  margin-top: 5px;
  position: relative;
}
.main .list-item:hover {
  background-color: #fff;
}

.main .list-item.active {
  background-color: #fff;
}

.main .list .list-item .left {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.main .list .list-item .left span {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main .list .list-item .option-button {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main .list .list-item .option-button:hover {
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.main .list .list-item .option-button img {
  width: 32px;
  height: 32px;
}

.main .list .list-item .option-list {
  position: absolute;
  z-index: 1;
  right: 0px;
  top: 85px;
  background-color: #fff;
}

.main .list .list-item .option-list .option-list-item {
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main .list .list-item .option-list .option-list-item:hover {
  background-color: #ddd;
}
</style>