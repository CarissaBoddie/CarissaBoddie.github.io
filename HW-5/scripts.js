document.getElementById('search').addEventListener('click', () => {
    const username = document.getElementById('username').value || 'your-github-username'; 
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repos => {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = ''; // Clear existing content
            repos.forEach(repo => {
                const repoCard = document.createElement('div');
                repoCard.classList.add('repo-card');
                repoCard.innerHTML = `
                
                     <h2>
                        <i class="fa-brands fa-github"></i>
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </h2>
                    <p>${repo.description || 'No description'}</p>
                    <p>Created: ${new Date(repo.created_at).toLocaleDateString()}</p>
                    <p>Updated: ${new Date(repo.updated_at).toLocaleDateString()}</p>
                    <p>Watchers: ${repo.watchers_count}</p>
                    <p>Commits: Loading...</p>

                    
                `;
                gallery.appendChild(repoCard);

                // Fetch languages for each repo
                fetch(repo.languages_url)
                    .then(res => res.json())
                    .then(languages => {
                        repoCard.querySelector('p:nth-child(4)').textContent = `Languages: ${Object.keys(languages).join(', ')}`;
                    });

                // Fetch number of commits for each repo
                fetch(repo.commits_url.replace('{/sha}', ''))
                    .then(res => res.json())
                    .then(commits => {
                        repoCard.querySelector('p:nth-child(7)').textContent = `Commits: ${commits.length}`;
                    });
            });
        });
});