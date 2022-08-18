/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// creat  variables , catch ul  


const bosUl = document.querySelector("ul");
let sections = 3;

//make a helper function to ues it many times at forloop and button to add new sections

function createNavItem(id) {
    let item = document.createElement("li");

    let a = document.createElement('a');
    a.innerHTML = `section${id}`;
    a.addEventListener('click', function (e) {
        e.preventDefault();
        //e.stopPropagation();
        let section = document.getElementById(`section${id}`);
        section.scrollIntoView({ behavior: "smooth" });
    });
    item.appendChild(a);
    item.addEventListener("click", ChangeClass);
    bosUl.appendChild(item);
}
// make helper function to  ChangeClass on the nav-section and remove the class from another
function ChangeClass() {

    for (let i = 0; i < bosUl.childElementCount; i++) {

        bosUl.children[i].classList.remove("active");

    }
    this.classList.add('active');
}
//end the helper function

//end the helper function

// loop to creat many of li ues the function i made
for (let i = 0; i < sections; i++) {
    createNavItem(i + 1);
}
// right some string variables to append it at elment <P>
let textP1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus,
  pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget,
  lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac,
    tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam,
     nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis,,
     aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus,
   vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et,
   odio sed euismod.`;
let textP2 = `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit,",
  " vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum",
  " consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`;
//end the string variables
/*make a butten to add a new sections 
*(1- chatch the elemnts i need to append (section,div , h2,p) at the main
*2- that will by function helper addEventListener and make a new funtion and ues the old funtion to creat a new li 
*/
const head = document.querySelector(".main__hero");
const addSection = document.createElement("button");
addSection.classList.add("buttnActive");
addSection.innerHTML = "Add New Section";
head.appendChild(addSection);
addSection.addEventListener("click", function () {
    if (sections == 7) {
        alert(`Sorry but the maximum number for dynamic sections is 7`);
        return;
    }
    sections += 1;

    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.id = `section${sections}`;
    section.setAttribute("data-nav", `Section`)
    const mydiv = document.createElement("div");
    mydiv.classList.add("landing__container");
    const myh2 = document.createElement("h2");
    myh2.innerText = "Section" + sections;
    const myprag1 = document.createElement("p");
    const myprag2 = document.createElement("p");

    main.appendChild(section);
    section.appendChild(mydiv);
    mydiv.appendChild(myh2);
    mydiv.appendChild(myprag1).innerHTML = textP1;
    mydiv.appendChild(myprag2).innerHTML = textP2;
    createNavItem(sections);

});


//end the butten 



/* first i creat butten at html that catch it by the id and make a helper funtion 
*  to help me to back the top of my window 
*/
const btun = document.getElementById('gotop');

btun.classList.add("buttnActive");

function GoToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}




