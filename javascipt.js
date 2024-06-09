document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const postContainer = document.getElementById('postContainer');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const postContent = document.getElementById('postContent').value;
        if (postContent.trim() === '') return;

        const postDiv = document.createElement('div');
        postDiv.classList.add('card', 'mb-3', 'dark-blue-mode');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const postText = document.createElement('p');
        postText.classList.add('card-text');
        postText.textContent = postContent;

        const likeButton = document.createElement('button');
        likeButton.classList.add('btn', 'btn-sm', 'btn-outline-primary', 'like-button');
        likeButton.textContent = 'Curtir';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-sm', 'btn-outline-danger', 'delete-button');
        deleteButton.textContent = 'Excluir';

        cardBody.appendChild(postText);
        cardBody.appendChild(likeButton);
        cardBody.appendChild(deleteButton);
        postDiv.appendChild(cardBody);

        postContainer.appendChild(postDiv);

        document.getElementById('postContent').value = '';

        likeButton.addEventListener('click', function() {
            likeButton.classList.toggle('btn-primary');
            likeButton.classList.toggle('btn-outline-primary');
            if (likeButton.classList.contains('btn-primary')) {
                likeButton.textContent = 'Curtido';
            } else {
                likeButton.textContent = 'Curtir';
            }
        });

        deleteButton.addEventListener('click', function() {
            postDiv.remove();
        });
    });
});