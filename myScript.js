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
        var num = qid.slice(-1);
        var aid = "a" + num;
        var nextqid = "q" + (parseInt(num, 10) + 1);
        $(aid).show();
        $(nextqid).show();
        });
});
