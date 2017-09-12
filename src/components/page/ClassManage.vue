<template>
  <div class="classmanage">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>人事管理</el-breadcrumb-item>
        <el-breadcrumb-item>学生管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="handle-box">
      <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
      <el-select v-model="select_cate" placeholder="筛选专业" class="handle-select mr10">
        <el-option key="1" label="计算机" value="计算机"></el-option>
        <el-option key="2" label="电子" value="电子"></el-option>
      </el-select>
      <el-input v-model="select_schoolroll" placeholder="学籍号" class="handle-input mr10"></el-input>
      <el-input v-model="select_studentname" placeholder="学生姓名" class="handle-input-student mr10"></el-input>
      <el-input v-model="select_dora" placeholder="宿舍" class="handle-input-dora mr10"></el-input>
      <el-button type="primary" icon="search" @click="search">查询</el-button>
    </div>
    <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="schoolroll" label="学籍号" width="120">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="phone" label="个人电话" width="120">
      </el-table-column>
      <el-table-column prop="dora" label="宿舍" width="100">
      </el-table-column>
      <el-table-column prop="address" label="家庭地址" :formatter="formatter">
      </el-table-column>
      <el-table-column prop="date" label="入学日期" sortable width="150">
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template scope="scope">
          <el-button size="small"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
      <div class="pagination">
        <el-pagination
          @current-change ="handleCurrentChange"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select_cate: '',
      select_schoolroll: '',
      select_studentname: '',
      select_dora: '',
      cur_page: 1
    }
  },
  computed: {
    data () {}
  },
  methods: {
    handleCurrentChange (val) {
      this.cur_page = val
    },
    handleSelectionChange (val) {},
    delAll () {},
    search () {},
    handleEdit (index, row) {},
    handleDelete (index, row) {},
    formatter (row, column) {}
  }
}
</script>


<style scoped>
.handle-box{
  margin-bottom: 20px;
}
.handle-select{
  margin-left: 50px;
  width: 120px;
}
.handle-input{
  width: 300px;
  display: inline-block;
}
.handle-input-student{
  width: 150px;
}
.handle-input-dora{
  width: 70px;
  margin-right: 15px;
}
</style>
