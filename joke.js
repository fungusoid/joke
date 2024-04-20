function update_joke()
{
    const url = 'https://v2.jokeapi.dev/joke/Programming?type=single';
    const joke = document.getElementById('joke');

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        joke.textContent = data['joke'];
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

update_joke();