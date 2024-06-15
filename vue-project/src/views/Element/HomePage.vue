<template>
    <div>
      <el-row>
        <el-container style="height: 500px; border: 1px solid #eee">
          <el-header style="font-size: 40px; background-color: rgb(238, 241, 246)"
            >共享单车数据管理与分析系统</el-header
          >
          <el-container>
            <el-aside width="200px" style="border: 1px solid #eee">
              <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                  <template slot="title"
                    ><i class="el-icon-message"></i>数据管理</template
                  >
                  <el-menu-item index="1-1">
                    <router-link to="/usermanagement">用户管理</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-2">
                    <router-link to="/ridermanagement">骑行者管理</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-3">
                    <router-link to="/bikemanagement">单车管理</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-4">
                    <router-link to="/recordmanagement">骑行记录管理</router-link>
                  </el-menu-item>
                  <el-menu-item index="1-5">
                    <router-link to="/zonemanagement">禁停区管理</router-link>
                  </el-menu-item>
                </el-submenu>
              </el-menu>
            </el-aside>
          </el-container>
        </el-container>
      </el-row>
    </div>
  </template>
      
  <script>
  export default {

  };
  </script>
      
    <style>
  </style>