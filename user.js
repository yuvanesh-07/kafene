$(document).ready(function(){

        
        $("#search-input").on("keyup",function(){

        var value =$(this).val().toLowerCase();
        if(value.length<=1){
            alert("please at least two characters")
        }else{
            $("#userTable tr").filter(function(){

            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
               });
        }
});
        
 $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",function(data){
        for(var i=0;i<data.length;i++){
            var userRow = $('<tr>').addClass('user-row')
            var td1 = $('<td>').addClass('td').html(data[i].id).addClass("user-name")
            var td2 = $('<td>').append( $("<img>").attr("src",data[i].profilePic))
            var td3 = $('<td>').html(data[i].fullName).addClass("full-name")
            var td4 = $('<td>').html(data[i].dob)
            var td5 = $('<td>').html(data[i].gender).addClass("user-name")
            var td6 = $('<td>').html(data[i].currentCity+","+data[i].currentCountry).addClass("user-name")
            userRow.append(td1,td2,td3,td4,td5,td6)
            $('#userTable').append(userRow)
            console.log(userRow)
        }

})

});

