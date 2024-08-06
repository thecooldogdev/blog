document.addEventListener('DOMContentLoaded', function () {
    fetch('blog-posts.json')
        .then(response => response.json())
        .then(data => displayBlogPosts(data))
        .catch(error => console.error('Error fetching the blog posts:', error));
});

function displayBlogPosts(posts) {
    const blogPostsContainer = document.getElementById('blog-posts');
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';

        const titleElement = document.createElement('h2');
        const linkElement = document.createElement('a');
        linkElement.href = post.blogposturl;
        linkElement.textContent = post.title;
        titleElement.appendChild(linkElement);

        const authorElement = document.createElement('p');
        const authorLink = document.createElement('a');
        authorLink.href = post.authorurl;
        authorLink.textContent = post.author;
        authorElement.textContent = 'Author: ';
        authorElement.appendChild(authorLink);

        postElement.appendChild(titleElement);
        postElement.appendChild(authorElement);

        blogPostsContainer.appendChild(postElement);
    });
}
