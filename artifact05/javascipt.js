var myImages =["images/Mount_Rainier_from_west.jpg", 
               "images/Mount_Baker_from_Boulder_Creek.jpg",
               "Mount_Olympus_Washington.jpg",
               "400px-Mount_Adams_from_Cultus_Creek_Trail.jpg",
               "MSH82_st_helens_plume_from_harrys_ridge_05-19-82.jpg"];


var captionImages =["Mount Rainier","Mount Baker","Mount Olympus","Mount Adams","Mount St. Helens"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 



function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next
