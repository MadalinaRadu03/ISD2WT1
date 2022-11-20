/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
function myFunction() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
		x.className += " responsive";
		} else {
		x.className = "topnav";
		}
		};
                
                /* this will get the current date and display it on the console*/

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
console.log(currentDate);