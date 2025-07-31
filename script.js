    const repoContainer = document.querySelector('.projects-page');

    fetch('https://api.github.com/users/Programer6/repos')
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                if (repo.description) {  // Only show repos with description
                    const repoCard = document.createElement('div');
                    repoCard.className = 'project-card';
                    
                    repoCard.innerHTML = `
                        <h2>${repo.name}</h2>
                        <p>${repo.description}</p>
                        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                    `;
                    
                    repoContainer.appendChild(repoCard);
                }
            });
        })
        .catch(error => {
            console.error('Failed to fetch repos:', error);
            repoContainer.innerHTML += '<p>Could not load projects. Try again later.</p>';
        });

