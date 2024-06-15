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

          <el-main>
            <el-form
              :inline="true"
              :model="searchForm"
              class="demo-form-inline"
            >
              <el-form-item label="用户名">
                <el-input
                  v-model="searchForm.name"
                  placeholder="用户名"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
            </el-form>

            <el-table :data="tableData" border>
              <el-table-column prop="name" label="用户名" width="240">
              </el-table-column>
              <el-table-column label="头像" width="240">
                <template slot-scope="scope">
                    <img :src="scope.row.icon" width="100" height="70">
                </template>
              </el-table-column>
              <el-table-column prop="phone" label="手机号" width="240">
              </el-table-column>
              <el-table-column prop="password" label="密码" width="240">
              </el-table-column>
              <el-table-column prop="permission" label="权限" width="240">
                <template slot-scope="scope">
                    {{ scope.row.permission == true?'有':'无' }}
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <el-button type="primary" size="mini">查看详细信息</el-button>
                <br>
                <el-button type="primary" size="mini">编辑</el-button>
                <br>
                <el-button type="danger" size="mini">删除</el-button>
              </el-table-column>
            </el-table>

            <br />

            <el-pagination
              background
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :total="1000"
            >
            </el-pagination>
          </el-main>
        </el-container>
      </el-container>
    </el-row>
  </div>
</template>
    
<script>
import axios from 'axios';

export default {
  data() {
    return {
      tableData: [],
      searchForm: {
        name: "",
      },
    };
  },
  methods: {
    onSubmit: function () {
      alert("查询数据");
    },
    handleSizeChange: function (val) {
      alert("每页记录变化数" + val);
    },
    handleCurrentChange: function (val) {
      alert("页码发生变化" + val);
    },
  },
  mounted(){
    axios.get("https://apifoxmock.com/m1/4583439-4232435-default/usermanagement/name").then((resp)=>{
      this.tableData = resp.data.data;
    });
  }
};
</script>
    
  <style>
</style>