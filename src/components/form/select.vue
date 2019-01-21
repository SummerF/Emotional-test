<template>
  <div class="form">
        <el-row>
            <el-col :span="8"><div class="form-title">性别：</div></el-col>
            <el-col :span="14">
                <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            </el-col>
        </el-row>  
        <el-row>
            <el-col :span="8">
                <div class="form-title">出生日期：</div>
            </el-col>
            <el-col :span="14">
                <div>
                    <el-date-picker
                        v-model="date"
                        type="date"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                        placeholder="选择日期"
                    >
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8" :offset="10">
                <el-button   @click="handleSubmitClick" type="success">提交</el-button>
            </el-col>
        </el-row>
  </div>
</template>
<script>
  export default {
  	name: 'Selects',
    data() {
        return {
            options: [
                {
                    value: '男',
                    label: '男'
                },
                {
                    value: '女',
                    label: '女'
                }
            ],
            value: '',
            date: ''
        }
    },
    methods: {
        handleSubmitClick () {
            if (this.value === '' ) {
                this.$message({
                    showClose: true,
                    message: '请选择性别',
                    type: 'warning'
                })
            }else if(this.date === ''){
                this.$message({
                    showClose: true,
                    message: '请选择出生日期',
                    type: 'warning'
                })
            }else{
              this.$emit('handleClick', this.value, this.date)
            }
        }
    }
  }
</script>
<style lang="stylus" scoped>
    .el-row
        margin: .3rem 0
        .form-title
            padding-right: .2rem
            line-height: .8rem
            font-size: .3rem
            text-align: right
            font-weight: bold
        .el-button
            width: 100%
</style>