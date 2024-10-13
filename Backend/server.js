// server.js
const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Endpoint to fetch Hashnode blog posts
app.get('/api/blogs', async (req, res) => {
  const query = `
    {
      user(username: "your-hashnode-username") {
        publication {
          posts(page: 0) {
            title
            brief
            slug
            coverImage
            dateAdded
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  const posts = data.data.user.publication.posts;
  res.json(posts);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
