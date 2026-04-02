const url = `https://gnews.io/api/v4/search?q=XAU&max=9&apikey=f0a144935ebb94dc20c855a65517bef0`;

async function fetchNews() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if (data.articles && data.articles.length > 0) {
            displayNewsCards(data.articles);
        } else {
            showErrorMessage("No articles found.");
        }
    } catch (err) {
        console.error("Error fetching news:", err);
        showErrorMessage("Failed to load news. Please try again.");
    }
}

function displayNewsCards(articles) {
    const container = document.getElementById('news-container');
    if (!container) return;
    container.innerHTML = '';

    const fallbackImg = 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=400&q=60';

    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'card';

        const imageUrl = article.image || fallbackImg;
        const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
        });
        
        const source = article.source?.name || 'Unknown Source';
        const description = article.description || 'Click to read the full story.';

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${imageUrl}" alt="${article.title}"
                     onerror="this.src='${fallbackImg}'">
                <span class="card-badge">LIVE</span>
            </div>
            <div class="card-content">
                <div class="card-meta">
                    <span>${date}</span>
                    <span class="meta-dot">•</span>
                    <span>${source}</span>
                </div>
                <h3>${article.title}</h3>
                <p>${description}</p>
                <a href="${article.url}" target="_blank" class="btn">
                    READ FULL STORY &rarr;
                </a>
            </div>
        `;

        container.appendChild(card);
    });
}

function showErrorMessage(msg) {
    const container = document.getElementById('news-container');
    if (container) {
        container.innerHTML = `<div class="error-msg">${msg}</div>`;
    }
}

fetchNews();
