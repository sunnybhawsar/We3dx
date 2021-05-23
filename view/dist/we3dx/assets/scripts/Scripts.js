
  $('.hireus-btn').click(function(){
   
    if( $('.slider-form').hasClass('form-in'))
      $('.slider-form').removeClass('form-in');
      else{
        $('.slider-form').addClass('form-in');
        $('html, body').animate({
                    scrollTop: $("#contactform").offset().top
                }, 500);
      }
  });


function classToggle() {
    for(i = 1; i < 6; i++) {
      name = '#it-btn' + i;
      obj = document.querySelector(name).children[0]
      if(obj != this.children[0]) {
        obj.classList.remove('fa-minus')
        obj.classList.add('fa-plus')
      }
    }
    this.children[0].classList.toggle('fa-plus')
    this.children[0].classList.toggle('fa-minus')
  }

if($('#toggle-menu-check').length){
  document.querySelector('#it-btn1').addEventListener('click', classToggle);
  document.querySelector('#it-btn2').addEventListener('click', classToggle);
  document.querySelector('#it-btn3').addEventListener('click', classToggle);
  document.querySelector('#it-btn4').addEventListener('click', classToggle);
  document.querySelector('#it-btn5').addEventListener('click', classToggle);
}

  if($('#fullpage').length){
    new fullpage('#fullpage', {
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors:['intro', 'service1', 'service2', 'service3', 'footer'],
      //options here
      autoScrolling:true,
      scrollHorizontally: true,
      scrollOverflow: true,
      scrollOverflowReset: true,
      scrollOverflowOptions:  {
        scrollbars: false,
        fadeScrollbars: true
      },
      // responsiveWidth: 992,
      afterRender: function(){
        $('#sec_zero').addClass("bg0");
        $('#sec_one').addClass("bg1");
        $('#sec_two').addClass("bg1");
        $('#sec_two').addClass("bg1");
        if (fullpage_api.getActiveSection().index == 0) {
          $('.right-bar-fixed').addClass("bg0");
          return
        }
        $('.right-bar-fixed').addClass("bg1");
      },

      onLeave: function(origin, destination, direction){

        if(origin.index == 0 && direction == "down") {
          $('#sec_zero').removeClass("bg0");
          $('#sec_zero').addClass("bg1");
          $('#sec_one').removeClass("bg0");
          $('#sec_one').addClass("bg1");
          $('.right-bar-fixed').removeClass("bg0");
          $('.right-bar-fixed').addClass("bg1");
        }

        if(destination.index == 0 && direction == "up") {
          $('.right-bar-fixed').removeClass("bg1");
          $('#sec_zero').removeClass("bg0");
          $('#sec_one').removeClass("bg1");
          $('#sec_one').addClass("bg0")
          $('.right-bar-fixed').addClass("bg0");
          $('#sec_zero').addClass("bg0");
        }

        if(destination.index == 4 && direction == "down") {
          $('#parent')["0"].style.width="100%"
          $('#parent')["0"].classList.remove("bringdown")
          $('#parent')["0"].classList.add("bringup")
        }

        if(origin.index == 4 && direction == "up") {
          $('#parent')["0"].classList.remove("bringup")
          $('#parent')["0"].classList.add("bringdown")
          $('#parent')["0"].style.width="86%"
        }
      }
    });

    //methods
    fullpage_api.setAllowScrolling(true);
  }

                              // Health care script
   $("[data-toggle='toggle']").click(function() {
      var selector = $(this).data("target");
      $(selector).toggleClass('in');
  });


                                //IT services script

    $('.toggle-details1').click(function(){
        if($('.multi-collapse1').hasClass('show') ){
          
          $(this).css('background-image',"url('/assets/images/it/plus sign IT page.svg')");
        }
        else{
          
          $(this).css('background-image',"url('/assets/images/it/cross sign IT page.svg')");
         
        }
    });
    $('.toggle-details2').click(function(){
        if($('.multi-collapse2').hasClass('show') ){
          
          $(this).css('background-image',"url('/assets/images/it/plus sign IT page.svg')");
        }
        else{
          
          $(this).css('background-image',"url('/assets/images/it/cross sign IT page.svg')");
         
        }
    });
    $('.toggle-details3').click(function(){
        if($('.multi-collapse3').hasClass('show') ){
          
          $(this).css('background-image',"url('/assets/images/it/plus sign IT page.svg')");
        }
        else{
          
          $(this).css('background-image',"url('/assets/images/it/cross sign IT page.svg')");
         
        }
    });
    $('.toggle-details4').click(function(){
        if($('.multi-collapse4').hasClass('show') ){
          
          $(this).css('background-image',"url('/assets/images/it/plus sign IT page.svg')");
        }
        else{
          
          $(this).css('background-image',"url('/assets/images/it/cross sign IT page.svg')");
         
        }
    });
    $('.toggle-details5').click(function(){
        if($('.multi-collapse5').hasClass('show') ){
          
          $(this).css('background-image',"url('/assets/images/it/plus sign IT page.svg')");
        }
        else{
          
          $(this).css('background-image',"url('/assets/images/it/cross sign IT page.svg')");
         
        }
    });
    $('.toggle-details6').click(function(){
        if($('.multi-collapse6').hasClass('show') ){
          
          $(this).css('background-image',"url('/assets/images/it/plus sign IT page.svg')");
        }
        else{
          
          $(this).css('background-image',"url('/assets/images/it/cross sign IT page.svg')");
         
        }
    });
    $('.toggle-details7').click(function(){
        if($('.multi-collapse7').hasClass('show') ){
          
          $(this).css('background-image',"url('/assets/images/it/plus sign IT page.svg')");
        }
        else{
          
          $(this).css('background-image',"url('/assets/images/it/cross sign IT page.svg')");
         
        }
    });
    $('.toggle-details8').click(function(){
        if($('.multi-collapse8').hasClass('show') ){
          
          $(this).css('background-image',"url('/assets/images/it/plus sign IT page.svg')");
        }
        else{
          
          $(this).css('background-image',"url('/assets/images/it/cross sign IT page.svg')");
         
        }
    });
