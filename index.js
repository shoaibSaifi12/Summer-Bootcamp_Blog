

document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postList = document.getElementById('post-list');

    postForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            addPost(title, content);
            postForm.reset();
        }
    });

    function addPost(title, content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement('div');
        postTitle.classList.add('post-title');
        postTitle.innerText = title;

        const postContent = document.createElement('div');
        postContent.classList.add('post-content');
        postContent.innerText = content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        postList.appendChild(postDiv);
    }
});