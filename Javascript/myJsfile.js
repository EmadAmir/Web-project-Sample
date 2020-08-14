let myImage = document.getElementById("withFamily");
let imageArray = ["../Images/Family1.jpg","../Images/Family2.jpg","../Images/Family3.jpg","../Images/Family4.jpg","../Images/Family5.jpg","../Images/Family6.jpg","../Images/Family7.jpg" ];
let imageIndex = 0;
function changeImage ()
{
  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if(imageIndex >= imageArray.length){
    imageIndex = 0;
  }
}
setInterval(changeImage, 5000);

$(document).ready(function (){
$('button').click(function(){
  $('p').hide();
})
})
