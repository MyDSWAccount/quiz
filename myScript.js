$(document).ready(function() {
        $("div").click(function() { 
                var qid = $(this).attr('id');
                var num = qid.slice(-1);
                var aid = "a" + num;
                var nextqid = "q" + (parseInt(num, 10) + 1);
                console.log(nextqid);
                console.log(aid);
                $("#a1").show();
                /*$(nextqid).show();*/
        });
});
