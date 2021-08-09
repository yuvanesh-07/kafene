$(document).ready(function() {
    // var localCheck = localStorage.get("")
    if (JSON.parse(localStorage.getItem("login-Status")) == true) {

        $.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders", function(response) {
            var newCount = 0;
            var packedCount = 0;
            var intransitCount = 0;
            var deliverednewCount = 0
            for (var i = 0; i < response.length; i++) {
                var row = $('<tr>').addClass('table-row')
                var td1 = $('<td>').addClass('number').html(response[i].id)
                var td2 = $('<td>').html(response[i].customerName)
                var td3 = $('<td>').addClass('number').html(response[i].orderDate)
                var time = $('<p>').addClass('number').html(response[i].orderTime)
                td3.append(time)
                var td4 = $('<td>').html(response[i].amount)
                var td5 = $('<td>').html(response[i].orderStatus)
                row.append(td1, td2, td3, td4, td5)
                    // $('#tableData').append(row)
                    // console.log(row)

                if (response[i].orderStatus == 'New') {
                    newCount++;
                    $('#tableNew').append(row)
                }
                if (response[i].orderStatus == 'Packed') {
                    packedCount++;
                    $('#tablePacked').append(row)
                }
                if (response[i].orderStatus == 'InTransit') {
                    intransitCount++;
                    $('#tableTransit').append(row)
                }
                if (response[i].orderStatus == 'Delivered') {
                    deliverednewCount++;
                    $('#tableDelivered').append(row)
                }

            }

            $("#new").change(function() {
                if (this.checked) {
                    $('#tableNew').show()
                    $("#count").html(newCount);
                } else {
                    $('#tableNew').hide()
                }
            });
            $("#packed").change(function() {
                if (this.checked) {
                    $('#tablePacked').show()
                    $("#count").html(packedCount);
                } else {
                    $('#tablePacked').hide()
                }
            });
            $("#transit").change(function() {
                if (this.checked) {
                    $('#tableTransit').show()
                    $("#count").html(intransitCount);
                } else {
                    $('#tableTransit').hide()
                }
            });
            $("#delivered").change(function() {
                if (this.checked) {
                    $('#tableDelivered').show()
                    $("#count").html(deliverednewCount);
                } else {
                    $('#tableDelivered').hide()
                }
            });

        })
    } else {
        location.assign("./login.html")
    }
})