//1. getElementById Method
//const id1 = document.getElementById("id1");
//console.log(id1); 

//inner HTML(find inner part)
//id1.innerHTML
//console.log(id1.innerHTML);

// id1.innerHTML ="Java Script HTML DOM";

// document.getElementById("id1").innerHTML = "New JavaScript Text";

//2. getElementByTagName Method
// const tag1 = document.getElementsByTagName("h1")[1];
// console.log(tag1.innerHTML);
// tag1.innerText = "Java-script Header Two";

//3. getElementByClassName
// const class1 = document.getElementsByClassName("class1")[0];
// console.log(class1.innerText);
// class1.innerText = "JavaScript Text!";

//4. Dom Element Style
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// id1.style.color = "pink";
// id1.style.backgroundColor ="green";
// id1.style.fontSize ="50px";

//5. DOM Element Attributes
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);

// console.log(id1.attributes);
// console.log(id1.attributes.length);

//6. getAttribute ( we can find any class & Id's attribute)
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// id1.getAttribute("class");
// console.log(id1.getAttribute("class"));
// console.log(id1.getAttribute("id"));

//7. removeAttribute (remove any attribute)
// const id1 = document.getElementById("id1");
// console.log(id1.innerText);
// id1.removeAttribute("class");

//8. setAttribute( add any attrribute)
// const id2 = document.getElementById("id2");
// console.log(id2.innerText);
// id2.setAttribute("class", "class2");

//9. querySelector
//Examole 1
// const tag1 = document.querySelector("h1");
// console.log(tag1);
// //Examole 2
// const class1 = document.querySelector(".class1");
// console.log(class1);
// //Example 3
// const id1 = document.querySelector("#id2");
// console.log(id2);

// querySelectorAll
// const tag1 = document.querySelectorAll("h1");
// console.log(tag1[0].innerText);

// const class1 = document.querySelectorAll(".class1");
// console.log(class1);

//Different between nodelist and HTML collection:
//getquereySelection show us nodelist and other's show us HTML collection.

// const tag2 = document.getElementsByTagName("h1");
// console.log(tag2);
// const class2 = document.getElementsByClassName("class1");
// console.log(class2);

//10. childNodes (we can find any attributes's inner information types)
// const id1 = document.getElementById("id1");
// console.log(id1);
// console.log(id1.childNodes);

//11. children
// const id1 = document.getElementById("list-id");
// console.log(id1);
// console.log(id1.children);

//12. creatElement
// const newList = document.createElement("li");
// newList.innerHTML = "List 5"
// console.log(newList.innerText);

//13. appendChild
// const newList = document.createElement("li");
// newList.innerText = "List 5"
// const listId = document.getElementById("list-id");
// listId.appendChild(newList);

//Example 2
// const id1 = document.getElementById("div-text");
// const newHeading = document.createElement("h2");
// newHeading.innerText = "This is heading Two";
// id1.appendChild(newHeading);

//14. removeChild
// const id1 = document.getElementById("list-id");
// console.log(id1);
// const list1 = id1.children[0];
// console.log(list1.innerText);
// id1.removeChild("list1");

//15. replaceChild
// const id1 = document.getElementById("list-id");
// const list3 = id1.children[2];
// const newList = document.createElement("li");
// newList.innerText = ("New List");
// console.log(newList.innerText);
// id1.replaceChild(newList, list3);

//16. title 
// console.log(document.title);
// document.title = "New JaveScript Title";

//17. body 
// console.log(document.body);
// document.body.innerHTML = "<h1>This is only JavaScript Heading</h1>";

//innerText Vs innerHTML
//const id1 = document.getElementById("id1");
//id1.innerHTML = "<p>This is a paragraph</p>";
//id1.innerText = "<p>This is a paragraph</p>";