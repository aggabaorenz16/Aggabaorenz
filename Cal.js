$(document).ready(function(){
    $('#one').click(function(){
        document.calculator.display.value += 1;
    });
})
$('#two').click(function(){
    document.calculator.display.value += 2;
});
$('#three').click(function(){
    document.calculator.display.value += 3;
});
$('#four').click(function(){
    document.calculator.display.value += 4;
});
$('#five').click(function(){
    document.calculator.display.value += 5;
});
$('#six').click(function(){
    document.calculator.display.value += 6;
});
$('#seven').click(function(){
    document.calculator.display.value += 7;
});
$('#eight').click(function(){
    document.calculator.display.value += 8;
});
$('#nine').click(function(){
    document.calculator.display.value += 9;
});
$('#dot').click(function(){
    document.calculator.display.value += ".";
});
$('#negative').click(function(){
    document.calculator.display.value += "-";
});
$('#multi').click(function(){
    document.calculator.display.value += "*";
});
$('#divide').click(function(){
    document.calculator.display.value += "/";
});
$('#zero').click(function(){
    document.calculator.display.value += 0;
});
$('#plus').click(function(){
    document.calculator.display.value += "+";
});
$('#equal').click(function(){
    if (display.value == "") {
      alert("Please Enter Number");
    }else{
      document.calculator.display.value =
      eval(document.calculator.display.value);
    }
  });
  $('#clear').click(function(){
    document.calculator.display.value = "";
  });
