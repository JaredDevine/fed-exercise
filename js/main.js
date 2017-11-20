import('jquery');

require('.././scss/main.scss');
require('./vendor/modernizr-3.5.0.min.js');
import AOS from './vendor/aos';






$(document).ready(function(){
  


  AOS.init({
    disable: 'mobile'
  });



  $('.menu-toggle-icon').on('click', function(){

    $('.desktop-menu-toggle').removeClass('desktop-menu-toggle_open');
    
    if($('.search-overlay').hasClass('search-overlay_open')){
      
      $(this).removeClass('menu-toggle-icon_open');
      $('.search-overlay').removeClass('search-overlay_open');
      $('.site-search-form-input').val('');
    
    }else{
    
      if($('.mobile-menu-overlay').hasClass('mobile-menu-overlay_open')){
    
        $('.mobile-menu-overlay').removeClass('mobile-menu-overlay_open');
        $(this).removeClass('menu-toggle-icon_open');
    
      }else{
    
        $('.mobile-menu-overlay').addClass('mobile-menu-overlay_open');
        $(this).addClass('menu-toggle-icon_open');
    
      };
    
    }
    
  });



  $('.search-icon').on('click', function(){
    
    var winWidth = $(window).width();
    
    $("#site-search-form-input").focus();
    $('.menu-toggle-icon').addClass('menu-toggle-icon_open');
    $('.search-overlay').addClass('search-overlay_open');
    
    if(winWidth > 992){
      $('.desktop-menu-toggle').addClass('desktop-menu-toggle_open');
    }
  
  });



  $(window).on('scroll', function(){

    var scrollNum = $(this).scrollTop();
    scrollNum = 1. + scrollNum / 5000;

    $('.site-hero-background').css({
      '-webkit-transform' : 'scale(' + scrollNum + ')',
      '-moz-transform'    : 'scale(' + scrollNum + ')',
      '-ms-transform'     : 'scale(' + scrollNum + ')',
      '-o-transform'      : 'scale(' + scrollNum + ')',
      'transform'         : 'scale(' + scrollNum + ')'

    });

  });



});