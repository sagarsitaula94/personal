// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show active navigation link
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Image slider
const projects = document.querySelectorAll('.project');
let index = 0;

function showProject(n) {
    projects.forEach(project => {
        project.style.display = 'none';
    });

    projects[n].style.display = 'block';
}

// Call showProject initially to display the first project
showProject(index);

function nextProject() {
    index++;
    if (index > projects.length - 1) {
        index = 0;
    }
    showProject(index);
}

function previousProject() {
    index--;
    if (index < 0) {
        index = projects.length - 1;
    }
    showProject(index);
}

// Automatic slideshow
let slideshowInterval = setInterval(nextProject, 5000);

// Stop slideshow on hover
projects.forEach(project => {
    project.addEventListener('mouseenter', function() {
        clearInterval(slideshowInterval);
    });

    project.addEventListener('mouseleave', function() {
        slideshowInterval = setInterval(nextProject, 5000);
    });
});
