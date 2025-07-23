<script>
$(document).ready(function() {
    });

</script>

<SCRIPT LANGUAGE="JavaScript">
  function setCookie(name, value, expiredays, val) {
    var todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = val + '=' + escape(val) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    //alert(document.cookie);
    return;
  }


  function closeWin(input, lay, val) {
    if ( $(input).prop('checked') ) {
      setCookie(lay, "done", 1, val);
    }
    // alert(val);
    //document.getElementById(lay).style.display='none';
  }

function getCookie( name ){
  var nameOfCookie = name + "=";
  var x = 0;
  while ( x <= document.cookie.length )
  {
    var y = (x+nameOfCookie.length);
    if ( document.cookie.substring( x, y ) == nameOfCookie ) {
      if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
        endOfCookie = document.cookie.length;
      return unescape( document.cookie.substring( y, endOfCookie ) );
    }
    x = document.cookie.indexOf( " ", x ) + 1;
    if ( x == 0 )
      break;
  }
  return "";
}
</SCRIPT>

<script>
  $(document).ready(function(){
    $(".start_pop").draggable();
  });