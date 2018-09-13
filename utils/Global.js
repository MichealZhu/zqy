/*
* @Author: Administrator
* @Date:   2018-03-19 11:14:52
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-19 11:26:00
*/

//用户登录数据  
global.user = {  
    loginState:'',//登录状态  
    userData:'',//用户数据  
};  

//刷新的时候重新获得用户数据    
storage.load({  
    key: 'loginState',  
}).then(ret => {  
    global.user.loginState = true;  
    global.user.userData = ret;  
}).catch(err => {  
    global.user.loginState = false;  
    global.user.userData = '';  
})