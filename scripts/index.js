// SELECTORS
const li_aboutme = document.getElementById('nav_aboutme');
const li_contact = document.getElementById('nav_contact');
const text_aboutme = document.getElementById('text_aboutme');
const text_contact = document.getElementById('text_contact');
const switching_title = document.getElementById('description_title');
const project_Article = document.getElementById('projects');
const skills_Article = document.getElementById('skills');

// ASSIGN HANDLERS TO LIST ITEMS
li_aboutme.onmousedown = changeView;
li_contact.onmousedown = changeView;

// MAIN EVENT HANDLER
function changeView(event){
  console.log(event, event.target);
  if(event.target === li_aboutme){
    changeViewAboutme();
  } else {
    changeViewContact();
  };
};

//HELPER FUNCTIONS
function changeViewContact(){
  text_aboutme.classList.add('hidden');
  project_Article.classList.add('hidden');
  skills_Article.classList.add('hidden');
  li_aboutme.classList.remove('active');
  li_contact.classList.add('active');
  switching_title.innerHTML = 'Contact';
  text_contact.classList.remove('hidden');
};

function changeViewAboutme(){
  text_contact.classList.add('hidden');
  li_aboutme.classList.add('active');
  li_contact.classList.remove('active');
  switching_title.innerHTML = 'About Me';
  text_aboutme.classList.remove('hidden');
  project_Article.classList.remove('hidden');
  skills_Article.classList.remove('hidden');
};
