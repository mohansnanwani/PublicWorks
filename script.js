document.addEventListener('DOMContentLoaded', function () {
    const posts = [
        { title: "Post 1", content: "This is the content of the first post.", author: "John Doe" },
        { title: "Post 2", content: "This is the content of the second post.", author: "Jane Smith" },
        { title: "Post 3", content: "This is the content of the third post.", author: "Alex Johnson" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" },
        { title: "Post 4", content: "This is the content of the fourth post.", author: "Emily Brown" }
        // Add more posts as needed
    ];

    const postsContainer = document.getElementById('posts');

    posts.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <div class="card-header">${post.title}</div>
            <div class="card-body">${post.content}</div>
            <div class="card-footer">By ${post.author}</div>
        `;
        
        postsContainer.appendChild(card);
    });
});
