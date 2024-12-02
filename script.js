document.addEventListener("DOMContentLoaded", () => {
    // Dynamic data
    const profile = {
        name: "Hmid Mohamed",
        about: "I am a passionate software engineer with expertise in QA testing and DevOps.",
        projects: [
            { name: "Project 1", description: "Automated testing for JSON validation using Robot Framework." },
            { name: "Project 2", description: "Developed a cloud infrastructure with Terraform and GCP." },
            { name: "Project 3", description: "Built a mobile app for vehicle data storage with Flutter." }
        ],
        skills: ["Python", "JavaScript", "Jenkins", "Terraform", "Selenium"],
        contact: "Feel free to reach out via email: hmid.mohamed@example.com"
    };

    // Populate data
    document.getElementById("name").textContent = profile.name;
    document.getElementById("about-text").textContent = profile.about;

    const projectList = document.getElementById("project-list");
    profile.projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.textContent = `${project.name}: ${project.description}`;
        projectList.appendChild(listItem);
    });

    const skillsList = document.getElementById("skills-list");
    profile.skills.forEach(skill => {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });

    document.getElementById("contact-info").textContent = profile.contact;
});
