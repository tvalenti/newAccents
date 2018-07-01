"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: tom
   Date:   6/29/18

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
//adds an event listener to the window to start setStyles on load
//doing this will load a random style each time the page is loaded/refreshed
window.addEventListener("load", setStyles);

//this function allows you to change the style of the site by clicking on the imgs
function setStyles() {
   
   //stores a random integer to styleNum
   let styleNum = randInt(5);

   //creates a link element and stores it in the variable fancySheet
   let fancySheet = document.createElement("link");

   //sets the rel, id and href attributes to the link element
   fancySheet.setAttribute("rel", "stylesheet");
   fancySheet.setAttribute("id", "fancySheet");
   fancySheet.setAttribute("href", "css/na_style_" + styleNum + ".css");
   
   //appends the link element we just created above to the head of the document
   document.head.appendChild(fancySheet);

   //creates a figure element and stores in the variable figBox
   let figBox = document.createElement("figure");

   //sets the id tag to the figure element
   figBox.setAttribute("id", "styleThumbs");

   //appends the figure element inside the div element with the id of box
   document.getElementById("box").appendChild(figBox);

   //loop that creates the img elements and appends them inside the figure element above 
   for (let i = 0; i <= 4; i++) {

      //creates img tag and store it in the variable sheetImg
      let sheetImg = document.createElement("img");

      //sets the src and alt tags to the img tags
      sheetImg.setAttribute("src", "imgs/na_small_" + i +".png");
      sheetImg.setAttribute("alt", "imgs/na_style_" + i +".css");

      //adds and event handler on the img tags 
      sheetImg.onclick = function() {
         fancySheet.setAttribute("href", "css/na_style_" + i + ".css");
      };
      //appends the imgs to the figure element with id styleThumbs to have thumbnails
      figBox.appendChild(sheetImg);
   }
   
   //creates a style element for embedded styling
   let thumbStyles = document.createElement("style");

   //appends the style element to the head of the document
   document.head.appendChild(thumbStyles);
   
   //inserts the first section of styling into the embedded style element
   document.styleSheets[document.styleSheets.length-1].insertRule(
      "figure#styleThumbs {\
         position: absolute;\
         left: 0px;\
         bottom: 0px;\
      }", 0);

   //inserts the second section of styling into the embedded style element
   document.styleSheets[document.styleSheets.length-1].insertRule(
      "figure#styleThumbs img {\
         outline: 1px solid black;\
         cursor: pointer;\
         opacity: .75;\
      }", 1);

   //inserts the third section of styling into the embedded style element
   document.styleSheets[document.styleSheets.length-1].insertRule(
      "figure#styleThumbs img:hover {\
         outline: 1px solid red;\
         opacity: 1;\
      }", 2);

}



function randInt(size) {
   return Math.floor(size*Math.random());
}