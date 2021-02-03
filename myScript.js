$(document).ready(function() {
        var n;
        for (n = 1; n < 7; n++) {
                $("#q" + n).click(function(){
                        $("#a" + n).show();
                        $("#q" + (n+1)).show();
        });
        }
});
