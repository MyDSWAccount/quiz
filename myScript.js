$(document).ready(function() {
        /*
        var n;
        $("#q" + n).click(function(){
                $("#a" + n).show();
                $("#q" + (n+1)).show();
        });
        */
        $('div').click(function() { 
        var qid = $(this).attr('id');
        var aid = qid.slice(-1);
        console.log(aid);
        });
});
