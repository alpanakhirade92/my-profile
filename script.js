console.log(`================= API getElementsByTagName Selector to select element by id ============================`);
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);//get inner info of tag by innerHTMl
h2Element[1].innerHTML= "My  hobbies"; //change inner containt of h2 tag by assiging

console.log(`================= API getElementsById Selector to select element by id ============================`);
const elementProfile = document.getElementById("profile"); //id should be unique, it gives only 1 element
console.log(elementProfile.innerHTML);

console.log(`================= API getElementsclassNames Selector to select element by class ============================`);
const elementLi = document.getElementsByClassName("liItem"); //return array of element
console.log(elementLi[1].innerHTML);

console.log(`================= Query Selector to select element by id ============================`);
const elementProfileByQuery = document.querySelector("#profile"); //New API
console.log(elementProfileByQuery);

console.log(`================= Query Selector to select element by id ======`);//it REturn only one element
const elementByClass =  document.querySelector(".liItem"); // class = ".", id= "#"
console.log(elementByClass);

console.log(`=========================API querySelector() to select element by class===========`);
const elementByQuery = document.querySelectorAll(".liItem"); //get multiple elements ie collection of array
elementByQuery[3].innerHTML = "Oracle Database"; //modify text 
console.log(elementByQuery[3]);

const elementMyProfile = document.querySelector("#myProfile");
console.log(elementMyProfile);
elementMyProfile.setAttribute("href","https://www.linkedin.com/");
console.log(elementMyProfile);

console.log(`=============== Changing CSS properties ================`);
const elemetTechStack = document.querySelector("#techStack");
elemetTechStack.style.color= "red";
elemetTechStack.style.fontFamily = "Courier New', Courier, Monospace";
elemetTechStack.style.fontFamily = "Arial";

const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject); //remove child element of root element

console.log(`---------------------- Change color of heading ----------------------------------`);
const changeColorHeading = document.querySelector("#profile");
changeColorHeading.style.color = "Green";

console.log(`--------------------- Remove child Agile and Jira -------------------------------`);
const getListItem = document.querySelector("#listId");
const getChidNode = document.querySelectorAll(".liItem")
getListItem.removeChild(getChidNode[1]);
