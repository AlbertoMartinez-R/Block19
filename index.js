let freelancers = [];
const maxFreelancers = 10;  // Maximum number of freelancers to display

function addRandomFreelancer() {
    const names = ["James", "Mary", "Robert", "Patricia", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah"];
    const occupations = ["Software Developer", "Nurse", "Graphic Designer", "Teacher", "Civil Engineer", "Accountant", "Lawyer", "Chef", "Electrician", "Mechanical Engineer", "Sales Manager", "Financial Analyst", "Journalist", "Architect", "Pilot", "Social Worker"];
    const prices = [50, 60, 55, 70, 80, 65, 75, 85, 45, 90, 95, 100, 55, 60, 110, 120];

    const randomIndex = Math.floor(Math.random() * names.length);
    const newFreelancer = {
        name: names[randomIndex],
        occupation: occupations[randomIndex],
        startingPrice: prices[randomIndex]
    };

    // Add to the start of the array
    freelancers.unshift(newFreelancer);

    // If the list exceeds the max, remove the last element
    if (freelancers.length > maxFreelancers) {
        freelancers.pop();
    }

    createFreelancers();
    updateAveragePrice();
}

function createFreelancers() {
    const tableBody = document.getElementById('freelancerTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    freelancers.forEach(freelancer => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = freelancer.name;
        row.insertCell(1).textContent = freelancer.occupation;
        row.insertCell(2).textContent = `$${freelancer.startingPrice}`;
    });
}

function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
    const averagePrice = freelancers.length > 0 ? (total / freelancers.length).toFixed(2) : 0;
    document.getElementById('averagePrice').textContent = `Average Starting Price: $${averagePrice}`;
}

// Optionally, add a new freelancer every 5 seconds
setInterval(addRandomFreelancer, 5000);
