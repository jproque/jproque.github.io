// Variable to track the # of steps
var totalsteps = 6;

// Track which step should be displayed
var currentstep = 0;

// Store the html of each slide
var currentslide;

$(function(){
  $('.totalsteps').html(totalsteps);

  // hide the steps
  $('.steps li, .end, .controls, #prev, #finish, #wronganswer, #rightanswer').hide();
});

// click events

$('#begin').on('click' , function(){
  // do something here
  $('.welcome').hide();
  currentstep = 1;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('.controls').fadeIn(1000);
  $('h2').html('Step ' + currentstep);
});

// Click on next
$('#next').on('click' , function(){
  if(currentstep != totalsteps){
  $(currentslide).hide();
  currentstep++;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step ' + currentstep);
 }
 if(currentstep == totalsteps){
   $('#next').hide();
 }
 if(currentstep != 1){
   $('#prev').show();
 }
 if(currentstep == totalsteps){
   $('#finish').show();
 }
});

// Click on prev
$('#prev').on('click' , function(){
  $(currentslide).hide();
  currentstep--;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step ' + currentstep);

 if(currentstep != totalsteps){
   $('#next').show();
 }
 if(currentstep == 1){
   $('#prev').hide();
 }
 if(currentstep == totalsteps){
   $('#finish').show();
 }
 if(currentstep != totalsteps){
   $('#finish').hide();
 }
});

// Click on step6left
$('#step6left').on('click' , function(){
 $('#rightanswer').show();
 $('#wronganswer').hide();
});

// Click on rightanswer
$('#rightanswer').on('click' , function(){
 $('#rightanswer').hide();
});

// Click on step6right
$('#step6right').on('click' , function(){
 $('#wronganswer').show();
 $('#rightanswer').hide();
});

// Click on wronganswer
$('#wronganswer').on('click' , function(){
  $('#wronganswer').hide();
});

// Click on Finish
$('#finish').on('click' , function(){
  // hide everyting again
  $('.steps li, .controls, #prev').hide();
  $('.end').fadeIn(1000);
  if(currentstep == totalsteps){
    $('#finish').show();
  }
});
