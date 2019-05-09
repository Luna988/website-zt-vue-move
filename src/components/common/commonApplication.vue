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
        border: none !important;
        padding-left: 15px !important;
        padding-right: 15px !important;
    }
    .el-collapse-item{
        margin-bottom: 8px !important;
    }
    .el-collapse-item__header{
        background-color: #ffffff !important;
        border: 1px solid #eeeeee !important;
        border-left: 5px solid #1588E0 !important;
        padding-left: 14px !important;
        color: #333333 !important;
        font-size: 15px !important;
    }
    .el-collapse-item__header.is-active{
        border-bottom-color: #d6d6d6 !important;
    }
    .el-collapse-item__wrap{
        border-top: 1px solid transparent !important;
        border-left: 1px solid #eeeeee !important;
        border-right: 1px solid #eeeeee !important;
        border-bottom: 1px solid #eeeeee !important;
        .applicationsContent{
            padding: 12px 10px !important;
            margin: 10px 10px !important;
            background: #f7f7f7 !important;
        }
    }
    .el-collapse-item__content{
        // background-color: #f7f7f7;
        background-color: #ffffff !important;
    }
}
</style>

