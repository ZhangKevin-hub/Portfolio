window.onload = function() {
  const aboutLink = document.getElementById('about-link');
  const projectLink = document.getElementById('project-link');
  const contactLink = document.getElementById('contact-link');
  const darkModeBtn = document.getElementById('dark-mode-btn');
  darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  
  

  aboutLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });

  projectLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });

  contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });


  function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function checkForProjectHead() {
    const projectHead = document.getElementById('projectheader');
    const projectPair = document.getElementById('projectpairs');
    if (!projectHead.classList.contains('show') && isElementInView(projectHead)) {
      projectHead.classList.add('show');  
      projectPair.classList.add('show');
      window.removeEventListener('scroll', checkForProjectHead);
    }
  }

  function checkForSkillsSection() {
    const skillsSection = document.getElementById('skills');
    if (isElementInView(skillsSection)) {
      skillsSection.classList.add('show');
      window.removeEventListener('scroll', checkForSkillsSection);
    }
  }

  function checkForContactSection() {
    const contactSection = document.getElementById('contact');
    if (isElementInView(contactSection)) {
      contactSection.classList.add('show');
      window.removeEventListener('scroll', checkForContactSection);
    }
  }

  window.addEventListener('scroll', checkForSkillsSection);
  window.addEventListener('scroll', checkForProjectHead);
  window.addEventListener('scroll', checkForContactSection);
};
