function logout(){
    $.ajax({
       url:"http://www.ct.com/user/logout",
       dataType:"json",
       type:"GET",
       success:function (data) {
           if(data.status==200){
               location.href="http://www.ct.com/";
               return;
           }else{
              alert("登出失败");
               return;
           }
       },
       erro:function () {
          alert("登出请求失败");
       }
    });
}