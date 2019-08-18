function getGithubUserRepositories() {
    let username = document.getElementsByName('username')[0].value;
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            console.log(response.data);
            showGithubUserRepositories(username, response.data);
        })
        .catch((error) => {
            console.warn(error);
        })
}

function showGithubUserRepositories(username, repositories) {
    let unorderList = document.querySelector('ul');
    let listItemValue = document.createTextNode(`${username.toUpperCase()} REPOSITORIES`);
    let listItem = document.createElement('li');
    listItem.appendChild(listItemValue);
    unorderList.appendChild(listItem);

    for (var repo of repositories) {
        listItemValue = document.createTextNode(repo.name);
        listItem = document.createElement('li');
        listItem.appendChild(listItemValue);
        unorderList.appendChild(listItem);
    }

    listItemValue = document.createTextNode('======================================================');
    listItem = document.createElement('li');
    listItem.appendChild(listItemValue);
    unorderList.appendChild(listItem);
}

