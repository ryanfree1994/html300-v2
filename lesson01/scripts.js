
/* this is the random array */
const array = [5, 18, 27, 30, 66];

$(document).ready(function(){
  /*show the original array in the html*/
  $('#array').html(array.join(" "));

/*this is the first input function -- adding a number to each number in the array to create a new array*/
  $('.submit_one').click(function(){
    let array_one = array.map(value => value + parseInt($('.input_one').val()));
    $('#array_one').html(`Here are the numbers in the array with their new values: ${array_one.join(" ")}.`);
  });

/*this is the second input function -- finding numbers greater than the input value*/

  $('.submit_two').click(function(){
    let big_numbers = array.filter(value => value > $('.input_two').val());
    $('#array_two').html(`Here are the numbers greater than the value you provided: ${big_numbers.join(" ")}.`);
  });

/*this is the third input function -- checking if a number is in the array*/

  $('.submit_three').click(function(){
    let input = +$('.input_three').val(); /*must include + or unary operator bc input returns string and includes checks only similar object types*/
    let number_check = array.includes(input);
    let number_check_output = number_check.toString();
    $('#array_three').html(`The number you provided has been checked if it is in the array: ${number_check_output}.`);
    });

/*this is the fourth input function -- it will calculate the sum of the array*/

  $('.submit_four').click(function(){
    let user_number = +$('.input_four').val();
    array.push(user_number);
    let sum = 0;
    let total = array.reduce((sum, value) => (sum += value));
    $('#array_four').html(`Here is the array total: ${total}.`);
  });

});
