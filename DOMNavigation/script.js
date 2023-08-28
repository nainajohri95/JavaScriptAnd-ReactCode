const countingUL = document.getElementById("counting");

const ulChildren = countingUL.childNodes;
//this childNodes help us to know the no. of child of ulchildern return us NodeList
//enter is also counted as a childNode
console.log(ulChildren);

const ulchild = countingUL.children;
console.log(ulchild);
// children will return us the actual elemnets called as HTML Collection(everything inside HTML Collection is called as Html ele)

// NotesList VS HTML Collection:- NotesList is a list of nodes or a big subset that provid us the list of elemnets including the enter whereas Html Collection provide us the actual ele.

const ulParent = countingUL.parentElement;
const ulParent2 = countingUL.parentNode;

// console.log(ulParent);
// console.log(ulParent2);

const oneLi = document.getElementById("one");
const siblings = oneLi.parentNode.children;
console.log(siblings);

console.log(oneLi.firstChild.nodeValue);

oneLi.innerHTML = "<h2>Changed<h2/>";

console.log(document.body);
console.log(document.document.Element);
