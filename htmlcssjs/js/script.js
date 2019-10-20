 $(document).ready(function(){
       $(".r, .g, .b").on('input', function(){
         var r = $(".r").val();
         var g = $(".g").val();
         var b = $(".b").val();

        $(".show-color").css("background", "rgb("+r+","+g+","+b+")");
        $(".rgb-val").val( "rgb("+r+","+g+","+b+")");
       });
     });
