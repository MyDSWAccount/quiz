$(document).ready(function() {
        /*
        var n;
        $("#q" + n).click(function(){
                $("#a" + n).show();
                $("#q" + (n+1)).show();
        });
        */
        $('div').click(function() { 
        var id = $(this).attr('id');
        id.slice(1);
        console.log(id)
        });
});
