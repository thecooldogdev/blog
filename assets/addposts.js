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

        const tagElement = document.createElement('p');
        const tagLink = document.createElement('a');
        tagLink.href = post.tagurl;
        tagLink.textContent = post.tag;
        tagElement.textContent = 'Tag: ';
        tagElement.appendChild(tagLink);

        postElement.appendChild(titleElement);
        postElement.appendChild(tagElement);

        blogPostsContainer.appendChild(postElement);
    });
}
