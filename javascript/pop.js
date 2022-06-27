


// ja for popup
$(document).ready(function(){
    
  function showPop() {
      $('.pop_Up').show();
      $('html body').css('overflow', 'hidden');
    }
        setTimeout(showPop,5000)
  
    function hidePop() {
      $('.pop_Up').hide();
      $('html body').css('overflow','scroll');
    }
   
    // button khi an đóng thì chạy hàm ẩn popup
    $('#close-btn').click(function(){
      hidePop();
    })

  }) 




  // js for + div dang ki
  $(document).ready(function(){
    $(".thongbao-hover").click(function(){
      $(".thongbao-window").toggle(500);
    });
  });
  