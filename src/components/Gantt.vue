<template>
  <div>
    <!-- 這裡是甘特圖的頁面 -->
    <ejs-gantt
      ref="gantt"
      id="GanttContainer"
      :dataSource="data"
      :taskFields="taskFields"
      :height="height"
      :editDialogFields="editDialogFields"
      :editSettings="editSettings"
      :resourceNameMapping="resourceNameMapping"
      :resourceIDMapping="resourceIdMapping"
      :resources="resources"
      :allowSorting="true"
    ></ejs-gantt>
  </div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin, Sort, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(GanttPlugin);
Vue.use(ButtonPlugin);
export default {
  name: 'gantt',
  data: function() {
    return {
      data: [
        {
          TaskID: 1,
          TaskName: "Project Initiation",
          StartDate: new Date("04/02/2019"),
          EndDate: new Date("04/21/2019"),
          subtasks: [
            {
              TaskID: 2,
              TaskName: "Identify Site location",
              StartDate: new Date("04/02/2019"),
              Duration: 4,
              Progress: 50,
              Indicators: [
                {
                  date: "04/08/2019",
                  iconClass:
                    "e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::before",
                  name: "Custom String",
                  tooltip: "Follow up"
                },
                {
                  date: "04/11/2019",
                  iconClass:
                    "e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::before",
                  name: '<span style="color:red">String Template</span>'
                }
              ]
            },
            {
              TaskID: 3,
              TaskName: "Perform Soil test",
              StartDate: new Date("04/02/2019"),
              Duration: 4,
              Progress: 50
            },
            {
              TaskID: 4,
              TaskName: "Soil test approval",
              StartDate: new Date("04/02/2019"),
              Duration: 4,
              Progress: 50
            }
          ]
        },
        {
          TaskID: 5,
          TaskName: "Project Estimation",
          StartDate: new Date("04/02/2019"),
          EndDate: new Date("04/21/2019"),
          subtasks: [
            {
              TaskID: 6,
              TaskName: "Develop floor plan for estimation",
              StartDate: new Date("04/04/2019"),
              Duration: 3,
              Progress: 50,
              Indicators: [
                {
                  date: "04/10/2019",
                  iconClass:
                    "e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::before",
                  name: "Indicator title",
                  tooltip: "tooltip"
                }
              ]
            },
            {
              TaskID: 7,
              TaskName: "List materials",
              StartDate: new Date("04/04/2019"),
              Duration: 3,
              Progress: 50
            },
            {
              TaskID: 8,
              TaskName: "Estimation approval",
              StartDate: new Date("04/04/2019"),
              Duration: 3,
              Progress: 50
            }
          ]
        }
      ],
      taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        dependency: "Predecessor",
        child: "subtasks",
        notes: "info",
        resourceInfo: "resources"
      },
      editDialogFields: [
        { type: "General", headerText: "General" },
        { type: "Dependency" },
        { type: "Resources" },
        { type: "Notes" }
      ],
      height: "450px",
      resourceNameMapping: "resourceName",
      resourceIdMapping: "resourceId",
      resources: [
        { resourceId: 1, resourceName: "Martin Tamer" },
        { resourceId: 2, resourceName: "Rose Fuller" },
        { resourceId: 3, resourceName: "Margaret Buchanan" },
        { resourceId: 4, resourceName: "Fuller King" },
        { resourceId: 5, resourceName: "Davolio Fuller" },
        { resourceId: 6, resourceName: "Van Jack" },
        { resourceId: 7, resourceName: "Fuller Buchanan" },
        { resourceId: 8, resourceName: "Jack Davolio" },
        { resourceId: 9, resourceName: "Tamer Vinet" },
        { resourceId: 10, resourceName: "Vinet Fuller" },
        { resourceId: 11, resourceName: "Bergs Anton" },
        { resourceId: 12, resourceName: "Construction Supervisor" }
      ],
      editSettings: {
        allowEditing: true,
        allowTaskbarEditing: true
      }
    };
  },
  provide: {
    gantt: [Sort, Edit, Selection]
  },
  methods: {
    edit: function() {
      var ganttObj = document.getElementById("GanttContainer").ej2_instances[0];
      ganttObj.editModule.dialogModule.openEditDialog();
    },
    add: function() {
      var ganttObj = document.getElementById("GanttContainer").ej2_instances[0];
      ganttObj.editModule.dialogModule.openAddDialog();
    }
  }
};
</script>

<style scoped>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-layouts/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css";
</style>