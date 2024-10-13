from flask import Flask, render_template
import requests

app = Flask(__name__)

# Hashnode GraphQL API endpoint
HASHNODE_API_URL = "https://api.hashnode.com/"
USERNAME = "your-hashnode-username"

# Function to fetch blog posts from Hashnode
def fetch_hashnode_blogs(username):
    query = """
    query($username: String!) {
      user(username: $username) {
        publication {
          posts {
            title
            brief
            slug
            coverImage
            dateAdded
          }
        }
      }
    }
    """
    variables = {
        "username": username
    }

    # Make a POST request to Hashnode's GraphQL API
    response = requests.post(HASHNODE_API_URL, json={"query": query, "variables": variables})
    
    if response.status_code == 200:
        data = response.json()
        return data['data']['user']['publication']['posts']
    else:
        return None

# Route to display the blog section
@app.route('/blogs')
def blogs():
    posts = fetch_hashnode_blogs(USERNAME)
    if posts:
        return render_template('blogs.html', posts=posts)
    else:
        return "Failed to retrieve posts."

if __name__ == '__main__':
    app.run(debug=True)
