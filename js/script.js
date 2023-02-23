window.onload = function() {
    
    function isElementInView(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    function checkForProjectSection() {
        var projectSection = document.getElementById('projects');
        if (!projectSection.classList.contains('show') && isElementInView(projectSection)) {
        projectSection.classList.add('show');
        window.removeEventListener('scroll', checkForProjectSection);
        }
    }
  
    
    function checkForSkillsSection() {
      var skillsSection = document.getElementById('skills');
      if (isElementInView(skillsSection)) {
        skillsSection.classList.add('show');
        window.removeEventListener('scroll', checkForSkillsSection);
      }
    }
    
    function checkForContactSection() {
      var contactSection = document.getElementById('contact');
      if (isElementInView(contactSection)) {
        contactSection.classList.add('show');
        window.removeEventListener('scroll', checkForContactSection);
      }
    }
    
    window.addEventListener('scroll', checkForProjectSection);
    window.addEventListener('scroll', checkForSkillsSection);
    window.addEventListener('scroll', checkForContactSection);
  };
  