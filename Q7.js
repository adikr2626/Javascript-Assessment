var Url="www.example.com/api/get/1";

$.ajax({        
    url: URL ,
    data: "ABCDEFGH",
    type: 'POST',
    success: function (resp) {
        alert(resp);
    },
    error: function(e){
        alert('Error: '+e);
    }  
});