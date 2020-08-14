function myFunction ()
{
  $("#firsth2").html("Hello World");
}
$(document).ready(myFunction())


$(document).ready(function (){
$("#btn1").click(function (){
  alert("text: "+ $("#test").text());
});

$("#btn2").click(function (){
  alert("HTML: "+ $("#test").html());
});
});

$(document).ready(function (){
  $("#btn3").click(function (){
    alert($("#w3s").attr("href"));
  });
});

$(document).ready(function ()
{
  $("#btn4").click(function ()
  {
      $("#test1").text("Hello World!");
  });
  $("#btn5").click(function ()
  {
    $("#test2").html("<b>Hello Bold World!</b>");
  });
  $("#btn6").click(function ()
  {
    $("#test3").val("Donald Duck");

  });
});

 testFunction = () =>
{
  let txt1 = "<p>This is a text in simple format</p>";
  let txt2 =$("<b></b>").text("This is a simple text again");
  let txt3 = document.createElement("p");
  txt3.innerHTML = "This is using Javascript";
  $("body").append(txt1,txt2,txt3);
}

$(document).ready(function ()
{
  $("#btn8").click(function ()
  {
    $(".mine").animate({left: '250px'});
  });
});
