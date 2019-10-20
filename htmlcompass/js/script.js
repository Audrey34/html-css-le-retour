 $(document).ready(function(){
       $(".r, .g, .b,.r2, .g2, .b2").on('input', function(){
         var r = $(".r").val();
         var g = $(".g").val();
         var b = $(".b").val();

         var r2 = $(".r2").val();
         var g2 = $(".g2").val();
         var b2 = $(".b2").val();

         $(".rgb-val").val( "rgb("+r+","+g+","+b+")");

        $(".show-color").css("background", "linear-gradient(rgb("+r+","+g+","+b+"),rgb("+r2+","+g2+","+b2+")");
        $(".rgb-val2").val( "rgb("+r2+","+g2+","+b2+")");
       });
     });
