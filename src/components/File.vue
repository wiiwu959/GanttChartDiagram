<template>
  <!-- 這裡是檔案列表的頁面 -->
  <!-- <img src="../assets/illustration/file.png" alt=""> -->
  <div>
    <div class="bar">
      <button class="menu-button" @click="toggleMenu()">
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
          <li class="menu-item">新增文件</li>
          <li class="menu-item">新增資料夾</li>
        </ul>
      </aside>
      <main class="main" :style="{width: mainWidth}">
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
              <button class="option-button" @click="optionOn = 0">
                <img src="../assets/img/option-button.png" alt="選項按鈕" />
              </button>
              <ul class="option-list" v-if="optionOn === 0">
                <li class="option-list-item">重新命名</li>
                <li class="option-list-item">複製資料夾</li>
                <li class="option-list-item">刪除資料夾</li>
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
            >
              <div class="left">
                <span class="name">{{item.name}}</span>
                <span class="last-time">{{item.updateTime | dateFormat}}</span>
                <span class="created-time">{{item.createTime| dateFormat}}</span>
              </div>
              <button class="option-button" @click="optionOn = 1">
                <img src="../assets/img/option-button.png" alt="選項按鈕" />
              </button>
              <ul class="option-list" v-if="optionOn === 1">
                <li class="option-list-item">重新命名</li>
                <li class="option-list-item">複製檔案</li>
                <li class="option-list-item">刪除檔案</li>
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
      path: "/",
      pathList: ["/"],
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
        date.getMonth() +
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
    toggleMenu: function() {
      this.menuOn = !this.menuOn;
      if (this.menuOn === true) {
        this.mainWidth = `${window.innerWidth - 240}px`;
      } else {
        this.mainWidth = `${window.innerWidth}px`;
      }
    },
    updateList: function() {
      const filesLength = this.data.files.length;
      const that = this;
      that.fileList = [];
      that.folderList = [];
      for (let i = 0; i < filesLength; i++) {
        const currentFile = this.data.files[i];
        if (that.path == currentFile.path) {
          if (currentFile.type === "file") {
            that.fileList.push(currentFile);
          } else if (currentFile.type === "folder") {
            that.folderList.push(currentFile);
          }
        }
      }
    },
    openFolder: function(item) {
      this.path = item.path + item.name + "/";
      this.pathList = item.pathList || [];
      this.pathList.push(item.name + "/");
      this.updateList();
    },
    changePath: function(index) {
      this.path = "";
      for (let i = 0; i <= index; i++) {
        this.path += this.pathList[i];
      }
      for (let i = 0; i < this.data.files.length; i++) {
        if (this.data.files[i].type === "folder") {
          let folderPath =
            this.data.files[i].path + this.data.files[i].name + "/";
          if (folderPath === this.path) {
            this.openFolder(this.data.files[i]);
            break;
          }
        }
      }
    }
  },
  beforeMount() {
    const that = this;
    const database = db.database();
    db.auth().onAuthStateChanged(function(user) {
      if (user) {
        database.ref(user.uid).on("value", function(snapshot) {
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
  justify-content: center;
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