exports.install = function (Vue, options) {
    /*验证银行卡号*/
    const bankCardNum = (rule, value, callback) => {
        if(value != ''){
            let reg = /^[1-9][0-9]{15,18}$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入正确格式的银行卡号'));
            }
        }else{
            callback();
        }
    }
    /*验证手机号*/
    const validateMobile = (rule, value, callback) => {
        if(value != ''){
            let reg = /^(((13[0-9])|199|166|198|165|191|167|146|(15[0-9])|(18[0-9])|(14[1,3,5,7,8,9])|(17[1,3,5,6,7,8]))\d{8})|((170[0,1,2,3,4,5,6,7,8,9])\d{7})$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('请输入有效的手机号码'));
            }
        }else{
            callback();
        }
    }
     /** 验证5个手机号，逗号隔开*/
     const sixMobiles = (rule, value, callback) => {
        if(value != ''){
            let reg = /^(((((13[0-9])|199|166|198|165|191|167|146|(15[0-9])|(18[0-9])|(14[1,3,5,7,8,9])|(17[1,3,5,6,7,8]))\d{8})|((170[0,1,2,3,4,5,6,7,8,9])\d{7})),){0,5}((((13[0-9])|199|166|198|165|191|167|146|(15[0-9])|(18[0-9])|(14[1,3,5,7,8,9])|(17[1,3,5,6,7,8]))\d{8})|((170[0,1,2,3,4,5,6,7,8,9])\d{7}))$/;
            if (reg.test(value)) {
                var arr = value.split(',');
                arr2 = [];
                for(var i = 0;i< arr.length;i++){
                    if(arr2.indexOf(arr[i]) <0){
                        arr2.push(arr[i])
                    }
                }
                if(arr2.length!=arr.length){
                    return callback(new Error('不允许重复'))
                }
                callback();
            }else if(value.lastIndexOf(",")!=-1){
                return callback(new Error('最多5个正确的手机号'));
            } 
            else {
                return callback(new Error('请输入正确的手机号'));
            }
        }else{
            callback();
        }
    }
    /* 验证1-5个手机号*/
    const Mobiles = (rule, value, callback) => {
        let reg = /^(1[3|4|5|7|8][0-9]\d{8})|(1[3|4|5|7|8][0-9]\d{8}){}$/;
        if (reg.test(value)) {
            callback();
        } else {
            return callback(new Error('请输入正确的手机号'));
        }
    }
    
     /* 验证码 6位*/
     const code = (rule, value, callback) => { 
        if(value != ''){ 
            let reg = /^[0-9a-zA-Z]{6}$/;      
            if(reg.test(value)) {
                callback()
            } else {
                callback(new Error('验证码为6位字符!'))
            }
        }else{
            callback();
        }
    }
    /* 密码验证 8-16位*/
    const passwords = (rule, value, callback) => { 
        if(value != ''){ 
            let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\u4E00-\u9FA5\uF900-\uFA2D\u0020]*$/;      
            if(reg.test(value)) {
                callback()
            } else {
                callback(new Error('必须包含数字、大小写字母,不能包含空格和汉字!'))
            }
        }else{
            callback();
        }
    }
    /* 用户名 6-20位*/ 
    const userName = (rule, value, callback) => { 
        if(value != ''){  
            let reg = /^[a-zA-Z0-9]*$/;      
            if(reg.test(value)) {
                callback()
            } else {
                callback(new Error('由大小写字母、数字、下划线组成!'))
            }
        }else{
            callback();
        }
    }
    /*含有非法字符(只能输入字母、汉字)*/
    const isvalidateRegexn= (rule, value, callback) => {  
        if(value != ''){
            let reg = new RegExp("^[A-Za-z\u4e00-\u9fa5]+$");      
            if(reg.test(value)) {
                callback()
            } else {
                callback(new Error('含有非法字符(只能输入字母、汉字)!'))
            }
        }else{
            callback();
        }
    }
    // 用户名 2-5位 纯中文
    const userNameChinese= (rule, value, callback) => {  
        if(value != ''){
            let reg = new RegExp("^[\u4e00-\u9fa5]+$");      
            if(reg.test(value)) {
                callback()
            } else {
                callback(new Error('含有非法字符(只能输入中文)!'))
            }
        }else{
            callback();
        }
    }
    /*含有非法字符(只能输入字母、汉字)*/
    const firm= (rule, value, callback) => {  
        if(value != ''){
            let reg = new RegExp("^[0-9A-Za-z\u4e00-\u9fa5]+$");      
            if(reg.test(value)) {
                callback()
            } else {
                callback(new Error('含有非法字符(只能输入字母、汉字、数字)!'))
            }
        }else{
            callback();
        }
    }
    /**多个IP */
    const muchIPs= (rule, value, callback) => {  
        if(value != ''){  
            let reg = /^(\d{1,3}|\*)(\.(\d{1,3}|\*)){3}(,(\d{1,3}|\*)(\.(\d{1,3}|\*)){3})*$/;      
            if(reg.test(value)) {
                callback()
            } else {
                callback(new Error('多个Ip间用逗号隔开!'))
            }
        }else{
            callback();
        }
    }

    /* IP*/ 
    const IP= (rule, value, callback) => {  
        if(value != ''){  
            let reg = /^(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|[1-9])(\.(1\d{2}|2[0-4]\d|25[0-5]|[1-9]\d|\d)){3}$/;      
            if(reg.test(value)) {
                callback()
            } else {
                callback(new Error('Ip格式错误!'))
            }
        }else{
            callback();
        }
    }
    
    /* 验证邮箱*/
    const email = (rule, value, callback) => {
        if(value != ''){  
            let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('输入正确格式的邮箱！'));
            }
        }else{
            callback();
        }
    }
    /* 验证用户单价*/
    const unitPrice = (rule, value, callback) => {
        if(value != ''){  
            let reg = /^(([1-9][0-9]{0,1})|(([0]\.\d{1,5}|[1-9][0-9]{0,1}\.\d{1,5})))$/;
            if (reg.test(value)) {
                callback();
            } else {
                return callback(new Error('单价最多2位整数和5位小数！'));
            }
        }else{
            callback();
        }    
    }

    Vue.prototype.filter_rules = function (item){
        let rules = [];
        if(item.required && item.message){
            rules.push({ required:item.required, message: item.message, trigger: 'blur' });
         }
        if(item.maxLength){
           rules.push({ min:1,max:item.maxLength, message: '最多输入'+item.maxLength+'个字符!', trigger: 'blur' })
        }
        if(item.min&&item.max){       
           rules.push({ min:item.min,max:item.max, message: '字符长度在'+item.min+'至'+item.max+'之间!', trigger: 'blur' })
        }
        if(item.type){
            let type = item.type;
            switch(type) {
                case 'mobile':
                    rules.push({ validator:validateMobile, trigger: ['blur', 'change']});
                    break;
                case 'isvalidateRegexn':
                    rules.push({ validator:isvalidateRegexn, trigger: ['blur', 'change']});
                    break;
                case 'passwords':
                    rules.push({ validator:passwords, trigger: ['blur', 'change']});
                    break;
                case 'userName':
                    rules.push({ validator:userName, trigger: ['blur', 'change']});
                    break;
                case 'userNameChinese':
                    rules.push({ validator:userNameChinese, trigger: ['blur', 'change']});
                    break;
                case 'firm':
                    rules.push({ validator:firm, trigger: ['blur', 'change']});
                    break;
                case 'IP':
                    rules.push({ validator:IP, trigger: ['blur', 'change']});
                    break;
                case 'email':
                    rules.push({ validator:email, trigger: ['blur',]});
                    break;
                case 'unitPrice':
                    rules.push({ validator:unitPrice, trigger: ['blur', 'change']});
                    break;
                case 'muchIPs':
                    rules.push({ validator:muchIPs, trigger: ['blur', 'change']});
                    break;     
                case 'sixMobiles':
                    rules.push({ validator:sixMobiles, trigger: ['blur', 'change']});
                    break; 
                case 'Mobiles':
                    rules.push({ validator:Mobiles, trigger: ['blur', 'change']});
                    break;
                case 'code':
                    rules.push({ validator:code, trigger: ['blur', 'change']});
                    break;
                case 'bankCardNum':
                    rules.push({ validator:bankCardNum, trigger: ['blur', 'change']});
                    break;   
                default:
                    rule.push({});
                    break;
                    
            }
        }
        return rules;
    };
};