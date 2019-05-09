<template>
    <div>
        <li class="explain">
            <p>{{explain.title}}</p>
            <div>{{explain.content}}</div>
        </li>
    </div>
</template>
<script>
export default {
    name: 'commonSituation',
    props: ['explain']
}
</script>

<style lang="scss" scoped type="text/css">
.explain{
    background-color: #f8f8f8;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 18px;
    p{
        font-size: 18px;
        color: #333333;
        padding-top: 18px;
        padding-bottom: 15px;
        text-align: center;
    }
    div{
        font-size: 12px;
        line-height: 18px;
        background-color: #ffffff;
        border-radius: 8px;
        border: 1px solid #e5e5e5;
        padding: 17px 10px 16px 10px;
        text-indent: 24px;
        color: #858585;
    }
}
</style>
