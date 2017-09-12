<template>
  <div class="addstudent">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加学生</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="add-form">
      <el-form :label-position="labelPosition" label-width="80px" :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="学生学号" style="width: 200px" prop="stunum" required>
          <el-input v-model="ruleForm.stunum"></el-input>
        </el-form-item>
        <el-form-item label="学生姓名" style="width: 200px" prop="stuname" required>
          <el-input v-model="ruleForm.stuname"></el-input>
        </el-form-item>
        <el-form-item label="学生性别" prop="stugender" required>
          <el-select v-model="ruleForm.stugender" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学生年龄" style="width: 200px" prop="stuage" required>
          <el-input v-model="ruleForm.stuage"></el-input>
        </el-form-item>
        <el-form-item label="学生职位" prop="stujob" required>
          <el-select v-model="ruleForm.stujob" placeholder="请选择职位">
            <el-option label="清洁组" value="清洁组"></el-option>
            <el-option label="值班组" value="值班组"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作时间" required style="width: 400px">
          <el-col :span="11">
            <el-form-item prop="startdate">
              <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.startdate" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2" style="width:10px">-</el-col>
          <el-col :span="11">
            <el-form-item prop="enddate">
              <el-date-picker type="date" placeholder="选择结束日期" v-model="ruleForm.enddate" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="学生辅导员" style="width: 200px" prop="counsellor" required>
          <el-input v-model="ruleForm.counsellor"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remark" style="width: 500px">
          <el-input type="textarea" v-model="ruleForm.remark"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'top',
      ruleForm: {
        stunum: '',
        stuname: '',
        stugender: '',
        stuage: '',
        stujob: '',
        startdate: '',
        enddate: '',
        counsellor: '',
        remark: ''
      },
      rules: {
        stunum: [
          {required: true, message: '请输入学生学号', trigger: 'blur'},
          {min: 6, max: 6, message: '学号长度为6位', trigger: 'blur'}
        ],
        stuname: [
          {required: true, message: '请输入学生姓名', trigger: 'blur'}
        ],
        stugender: [
          {required: true, message: '请选择性别', trigger: 'blur'}
        ],
        stuage: [
          {required: true, message: '请填写年龄', trigger: 'blur'}
        ],
        stujob: [
          {required: true, message: '请选择职位', trigger: 'blur'}
        ],
        startdate: [
          {type: 'date', required: true, message: '请选择开始日期', trigger: 'change'}
        ],
        enddate: [
          {type: 'date', required: true, message: '请选择结束日期', trigger: 'change'}
        ],
        counsellor: [
          {required: true, message: '请填写辅导员', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit')
        } else {
          alert('error submit')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
.add-form {
  margin-top: 50px
}
</style>




