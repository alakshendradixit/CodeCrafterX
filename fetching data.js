const jobButton = document.getElementById('fetch-jobs');
const jobList = document.getElementById('job-list');

// Example job listing API (replace with actual API)
const jobApiUrl = 'https://jsonplaceholder.typicode.com/posts';  // Placeholder API for simulation

jobButton.addEventListener('click', async function () {
    const response = await fetch(jobApiUrl);
    const jobs = await response.json();

    jobList.innerHTML = '';  // Clear previous listings

    // Display first 5 jobs (simulate actual API response)
    jobs.slice(0, 5).forEach(job => {
        const listItem = document.createElement('li');
        listItem.textContent = `Job Title: ${job.title}`;
        jobList.appendChild(listItem);
    });
});
