

$(document).ready(function(){


    $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",function(response){
        

        for(var i=0;i<response.length;i++){
            var row = $('<tr>').addClass('table-row')
            var td1 = $('<td>').addClass('number').html(response[i].id)
            var td2 = $('<td>').html(response[i].medicineName)
            var td3 = $('<td>').addClass('number').html(response[i].medicineBrand)
            var td4 = $('<td>').html(response[i].expiryDate).addClass("data")
            var td5 = $('<td>').addClass('number').html(response[i].unitPrice)
            var td6 = $('<td>').addClass('number').html(response[i].stock)

            row.append(td1,td2,td3,td4,td5,td6)
             
            var table = $('#tableData').append(row)
            
            var today = new Date();
            if(response[i].expiryDate > today) {
                $('#expire').append(row)
                console.log( $('expire').append(row))
            }
            if(response[i].stock < 100){
                $('#expire').append(row)
                console.log( $('lowStock').append(row))
            }
        
        }

        // count

        var countExp = $('table-exp').find('tr').length;
        $('#count').html(countExp)

    
        $("#expireDate").change(function() {
            if(this.checked){
                $('#expire').show()
                $('#tableData').hide()

            }else{
                $('#expire').hide()
                $('#tableData').show()

            }
        });
        $("#stock").change(function() {
            if(this.checked){
                $('#expire').show()
                $('#tableData').hide()

            }else{
                $('#expire').hide()
                $('#tableData').show()
            }
        });


    })
})
