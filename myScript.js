$(document).ready(function() {
        var n;
        $("#q" + n).click(function(){
                $("#a" + n).show();
                $("#q" + (n+1)).show();
        });
});
