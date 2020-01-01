<template>
  <div class="gantt-app">
    <div class="bar">
      <div class="left">
        <button class="export-item button" @click="zoom('in')">
          <img src="..\assets\img\ic_zoom_in_24px.png" alt />
        </button>
        <button class="export-item button" @click="zoom('out')">
          <img src="..\assets\img\ic_zoom_out_24px.png" alt />
        </button>
      </div>
      <div class="right">
        <button class="button" @click="exportListOn = !exportListOn">
          輸出
          <ul class="export-list" v-if="exportListOn === true" @click="exportListOn = false">
            <li class="export-item" @click="exportFile('pdf')">Export to PDF</li>
            <li class="export-item" @click="exportFile('png')">Export to PNG</li>
            <!-- <li class="export-item" @click="exportFile('meadow')">Export :: Meadow</li>
            <li class="export-item" @click="exportFile('broadway')">Export :: Broadway</li>
            <li class="export-item" @click="exportFile('skyblue')">Export :: Skyblue</li>
            <li class="export-item" @click="exportFile('material')">Export :: Material</li>-->
          </ul>
        </button>
        <button class="button" @click="saveFile()">
          <img src="..\assets\img\ic_save_24px.png" alt />
        </button>
        <button class="button" @click="exit()">
          <img src="..\assets\img\ic_home_24px.png" alt />
        </button>
      </div>
    </div>
    <div ref="gantt" class="left-container"></div>
  </div>
</template>
<script>
import gantt from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import "dhtmlx-gantt/codebase/locale/locale_cn"; // 本地化
import { db } from "../db.js";

export default {
  name: "Gantt",
  data() {
    return {
      file: {},
      data: {},
      exportListOn: false
    };
  },
  beforeMount() {
    if (gantt.$_eventsInitialized) return;
    gantt.attachEvent("onTaskSelected", id => {
      let task = gantt.getTask(id);
      this.$emit("task-selected", task);
    });

    gantt.attachEvent("onAfterTaskAdd", (id, task) => {
      this.$emit("task-updated", id, "inserted", task);
      task.progress = task.progress || 0;
      if (gantt.getSelectedId() == id) {
        this.$emit("task-selected", task);
      }
    });

    gantt.attachEvent("onAfterTaskUpdate", (id, task) => {
      this.$emit("task-updated", id, "updated", task);
    });

    gantt.attachEvent("onAfterTaskDelete", id => {
      this.$emit("task-updated", id, "deleted");
      if (!gantt.getSelectedId()) {
        this.$emit("task-selected", null);
      }
    });

    gantt.attachEvent("onAfterLinkAdd", (id, link) => {
      this.$emit("link-updated", id, "inserted", link);
    });

    gantt.attachEvent("onAfterLinkUpdate", (id, link) => {
      this.$emit("link-updated", id, "updated", link);
    });

    gantt.attachEvent("onAfterLinkDelete", (id, link) => {
      this.$emit("link-updated", id, "deleted");
    });
    gantt.$_eventsInitialized = true;

    gantt.config.open_tree_initially = true;
    //   gantt.config.scale_unit = 'day';
    //   gantt.config.scale_height = 50;
    //   gantt.config.row_height = 40;
    //   gantt.config.task_height = 20;
    //   gantt.config.date_grid = "%Y/%m/%d";
    // gantt.attachEvent("onTemplatesReady", function() {
    //依照年月日顯示欄位
    // gantt.templates.date_scale = function (date) {
    //     let y = gantt.date.date_to_str("%Y");
    //     y = y(date);
    //     let d = gantt.date.date_to_str("%n/%j");
    //     let md = d(date);
    //     let cy = '<div style="opacity:0.6; font-size:0.9em; height:15px; line-height:15px;">' + y + '</div>';
    //     let cd = '<div style="font-size:1.1em; height:15px; line-height:15px;">' + md + '</div>';
    //     return '<div style="padding:10px 0px;">' + cy + cd + '</div>';
    // };

    //針對週末標注為灰色
    //   gantt.templates.scale_cell_class = function(date) {
    //     if (date.getDay() === 0 || date.getDay() === 6) {
    //       return "dhtmlxgantt_weekend";
    //     }
    //   };
    // });

    gantt.ext.zoom.init({
      levels: [
        {
          name: "day",
          scale_height: 27,
          min_column_width: 80,
          scales: [{ unit: "day", step: 1, format: "%M %d日" }]
        },
        {
          name: "week",
          scale_height: 50,
          min_column_width: 50,
          scales: [
            {
              unit: "week",
              step: 1,
              format: function(date) {
                var dateToStr = gantt.date.date_to_str("%M %d日");
                var endDate = gantt.date.add(date, -6, "day");
                var weekNum = gantt.date.date_to_str("%W")(date);
                return dateToStr(date) + " - " + dateToStr(endDate);
              }
            },
            { unit: "day", step: 1, format: "%j %D" }
          ]
        },
        {
          name: "month",
          scale_height: 50,
          min_column_width: 120,
          scales: [
            { unit: "month", format: "%F, %Y" },
            { unit: "week", format: "Week #%W" }
          ]
        },
        {
          name: "quarter",
          height: 50,
          min_column_width: 90,
          scales: [
            { unit: "month", step: 1, format: "%M" },
            {
              unit: "quarter",
              step: 1,
              format: function(date) {
                var dateToStr = gantt.date.date_to_str("%M");
                var endDate = gantt.date.add(
                  gantt.date.add(date, 3, "month"),
                  -1,
                  "day"
                );
                return dateToStr(date) + " - " + dateToStr(endDate);
              }
            }
          ]
        },
        {
          name: "year",
          scale_height: 50,
          min_column_width: 30,
          scales: [{ unit: "year", step: 1, format: "%Y" }]
        }
      ]
    });

    gantt.ext.zoom.setLevel("month");
  },
  mounted() {
    this.file = this.$route.params.file;
    this.data = this.$route.params.data;

    // 初始化
    gantt.init(this.$refs.gantt, new Date(2019, 9, 1), new Date(2020, 2, 1));
    // 讀取資料
    if (this.file.tasks) {
      gantt.parse(this.file.tasks);
    }
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "http://export.dhtmlx.com/gantt/api.js"
    );
    document.head.appendChild(recaptchaScript);
  },
  methods: {
    saveFile: function() {
      let that = this;
      this.file.tasks = gantt.serialize();
      // 確認登入狀態
      db.auth().onAuthStateChanged(function(user) {
        if (user) {
          let date = new Date();
          let now = date.getTime();
          // 找出 id 一樣的檔案 蓋掉 然後整筆丟回去
          for (let i = 0; i < that.data.files.length; i++) {
            if (that.data.files[i].id === that.file.id) {
              that.data.files[i] = JSON.parse(JSON.stringify(that.file));
              that.data.files[i].updateTime = now;
              break;
            }
          }
          db.database()
            .ref(user.uid)
            .set(that.data)
            .then(function() {
              // console.log("database updated");
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
    },
    exit: function() {
      const that = this;
      if (
        JSON.stringify(this.file.tasks) !== JSON.stringify(gantt.serialize())
      ) {
        let toSave = confirm("您有未儲存的內容，是否要儲存？");
        if (toSave) {
          this.saveFile();
          that.$router.push({
            name: 'file',
            params: {
              path: that.file.path,
              pathList: that.file.pathList
            }
          });
        } else {
          this.$router.push({
            name: 'file',
            params: {
              path: that.file.path,
              pathList: that.file.pathList
            }
          });
        }
      } else {
        this.$router.push({
          name: 'file',
          params: {
            path: that.file.path,
            pathList: that.file.pathList
          }
        });
      }
    },
    exportFile: function(format) {
      switch (format) {
        case "pdf":
          gantt.exportToPDF({ skin: "material" });
          break;
        case "png":
          gantt.exportToPNG({ skin: "material" });
          break;
        // case "material":
        //   gantt.exportToPNG({ skin: "material" });
        //   break;
        // case "meadow":
        //   gantt.exportToPNG({ skin: "meadow" });
        //   break;
        // case "broadway":
        //   gantt.exportToPDF({ skin: "broadway" });
        //   break;
        // case "skyblue":
        //   gantt.exportToPDF({ skin: "skyblue" });
        //   break;
      }
    },
    zoom: function(mode) {
      if (mode === "in") {
        gantt.ext.zoom.zoomIn();
      } else {
        gantt.ext.zoom.zoomOut();
      }
    }
  }
};
</script>
<style scoped>
.left-container {
  height: calc(100vh - 160px);
}

.gantt-app .bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #00bbff;
  padding: 0 40px;
}
.gantt-app .bar .left,
.gantt-app .bar .right {
  display: flex;
  align-items: center;
  height: 80px;
}
.gantt-app .bar button {
  color: #fff;
  padding: 0 5px;
  font-size: 16px;
  margin: 0 10px;
  position: relative;
  height: 100%;
}
.gantt-app .bar .export-list {
  width: 200px;
  position: absolute;
  z-index: 1;
  background-color: #fff;
  color: #000;
  right: 0;
  top: 60px;
  border: #0099dd solid 2px;
  border-radius: 5px;
}
.gantt-app .bar .export-list .export-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 5px;
}

.gantt-app .bar .export-list .export-item:hover {
  background-color: #00bbff;
}

.gantt_cal_light {
  height: 275px;
}
</style>