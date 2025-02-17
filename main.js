// Mobile Navigation Toggle
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.getElementById('primary-navigation');

mobileNavToggle.addEventListener('click', () => {
    const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
    mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
});

// Project Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const projectGrid = document.querySelector('.project-grid');

// Example project data
const projects = [
    { name: 'Project 1', category: 'web' },
    { name: 'Project 2', category: 'mobile' },
    { name: 'Project 3', category: 'web' },
    { name: 'Project 4', category: 'design' },
];

function displayProjects(category = 'all') {
    projectGrid.innerHTML = ''; // Clear current projects
    const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.category}</p>
        `;
        projectGrid.appendChild(projectCard);
    });
}

// Initialize all projects
displayProjects();

// Event listener for filter buttons
filterBtns.forEach(button => {
    button.addEventListener('click', () => {
        filterBtns.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const category = button.getAttribute('data-filter');
        displayProjects(category);
    });
});
