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
 //hold all sections in website
    var section = document.getElementsByTagName('section');
// hold our un-ordered list
     const navList = document.getElementById('navbar__list');
     

    

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
   function generateNav (){
     // while there are sections in website do
     let secNo=1;
     for(let j=0;j<section.length;j++)
     {
 
// create link to connect with sections available
       
     const link=document.createElement('a');
     link.textContent=`section${secNo}`;
     link.href="#section"+secNo;
     link.classList.add('menu__link');
 
     // create list items    
 
     const listItem=document.createElement('li');
     listItem.className="section"+secNo;
     listItem.appendChild(link);
     navList.appendChild(listItem);
     secNo++;

     }


   };

// build the nav
    
    generateNav();
   
    


 
 


// Add class 'active' to section when near top of viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}
   



  // make section one list item colored by default
    const defActive =document.getElementsByClassName('section1');
    defActive[0].style.backgroundColor='gold'; 

// styles of sections change according to view port 
    document.addEventListener('scroll', function () {
    
    for(const sec of section)
    {
    
        sec.classList.remove('your-active-class');
        let state = isInViewport(sec) ;
            if(state)
            {
            
            sec.classList.add('your-active-class');
            let listItem=document.querySelectorAll('li');
            
            for(const li of listItem)
            {
                li.style.backgroundColor='white';
                if(li.className===sec.id)
                li.style.backgroundColor='gold';
            
            }
            }
        

        

        
    }
    
    });   
   
 




// Scroll to anchor ID using scrollTO event
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
    //make burger button has an action
      const btn =document.getElementsByTagName('img');
      const activeBtn=document.getElementsByClassName("section1");
      
      // while i is even so client wants  to open toggle
      let i=0;
      // toggle closed now
       btn[0].addEventListener('click', function(){
        
    // reset the default background color of section 1
    activeBtn[0].style.backgroundColor="white";
    const navBarList=document.querySelector('ul');
    if(i%2==0){
    
    navBarList.removeAttribute('id');
    navBarList.classList.add('openToggle');
    
    }
    else
    {
    
    
    navBarList.classList.remove('openToggle');
    navBarList.setAttribute('id','navbar__list');
    }
    i++;
       })
// Scroll to section on link click

// Set sections as active


