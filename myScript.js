$(document).ready(function() {
        $("#q1").click(function(){
                $(".q2").toggle();
        });
        $(".q2").click(function(){
                $(".q3").toggle();
        });
});
