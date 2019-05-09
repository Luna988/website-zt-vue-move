<template>
    <div class="applications">
        <p class="applicationTextTitle">{{applicationText.title}}</p>
        <el-collapse v-model="applicationText.activeNames" @change="handleChange" v-for="(item,index) in applicationText.content" :key="index"> 
            <el-collapse-item :title="item.title" :name="item.name">
                <div class="applicationsContent">
                    <p>{{item.content}}</p>
                    <p>{{item.content2}}</p>
                    <p>{{item.content3}}</p>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
export default {
    name: 'applications',
    props: ['applicationText'],
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
}
</script>
<style lang="scss" type="text/css" scoped>
$mg_b: 5px;
    .applications{
        background-color: #ffffff;
        padding-bottom: 20px;
        margin-bottom: $mg_b;
        .applicationTextTitle{
            font-size: 18px;
            color: #333333;
            text-align: center;
            padding-top: 16px;
            padding-bottom: 16px;
        }
    }
</style>
<style lang="scss" type="text/css">
.applications{
    .el-collapse{
        border: none;
        padding-left: 15px;
        padding-right: 15px;
    }
    .el-collapse-item{
        margin-bottom: 8px;
    }
    .el-collapse-item__header{
        background-color: #ffffff !important;
        border: 1px solid #eeeeee;
        border-left: 5px solid #1588E0;
        padding-left: 14px !important;
        color: #333333;
        font-size: 15px;
    }
    .el-collapse-item__header.is-active{
        border-bottom-color: #d6d6d6;
    }
    .el-collapse-item__wrap{
        border-top: 1px solid transparent;
        border-left: 1px solid #eeeeee;
        border-right: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
        .applicationsContent{
            padding: 12px 10px;
            margin: 10px 10px;
            background: #f7f7f7;
        }
    }
    .el-collapse-item__content{
        // background-color: #f7f7f7;
        background-color: #ffffff;
    }
}
</style>

