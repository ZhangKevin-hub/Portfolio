window.onload = function() {
    
    // function to check if an element is in view
    function isElementInView(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
// function to check if the project section is in view and show it
function checkForProjectSection() {
    var projectSection = document.getElementById('projects');
    if (!projectSection.classList.contains('show') && isElementInView(projectSection)) {
      projectSection.classList.add('show');
      window.removeEventListener('scroll', checkForProjectSection);
    }
  }
  
    
    // function to check if the skills section is in view and show it
    function checkForSkillsSection() {
      var skillsSection = document.getElementById('skills');
      if (isElementInView(skillsSection)) {
        skillsSection.classList.add('show');
        window.removeEventListener('scroll', checkForSkillsSection);
      }
    }
    
    // function to check if the contact section is in view and show it
    function checkForContactSection() {
      var contactSection = document.getElementById('contact');
      if (isElementInView(contactSection)) {
        contactSection.classList.add('show');
        window.removeEventListener('scroll', checkForContactSection);
      }
    }
    
    // add event listeners to check for when the user scrolls and show the sections
    window.addEventListener('scroll', checkForProjectSection);
    window.addEventListener('scroll', checkForSkillsSection);
    window.addEventListener('scroll', checkForContactSection);
  };
  