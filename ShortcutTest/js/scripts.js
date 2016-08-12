// $(document).ready(function(){
//
// });

$.ajax({
    type:"GET",
    url: "rndtest.shortcuts.com.au",
    success: function(data) {
            $("body").append(JSON.stringify(data));
        },
    error: function(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.status);
        },
   dataType: "json"
});
