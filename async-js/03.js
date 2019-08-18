let unorderList = document.querySelector('ul');

function getGithubUserRepositories() {
    let username = document.getElementsByName('username')[0].value;

    if (!username) return;

    showLoading();

    axios.get(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            showGithubUserRepositories(response.data);
        })
        .catch((error) => {
            showError(error);
        })
}

function showLoading() {
    unorderList.innerHTML = "";
    let listItemValue = document.createTextNode('Carregando...');
    let listItem = document.createElement('li');
    listItem.appendChild(listItemValue);
    unorderList.appendChild(listItem);
}

function showGithubUserRepositories(repositories) {
    unorderList.innerHTML = "";

    for (var repo of repositories) {
        listItemValue = document.createTextNode(repo.name);
        listItem = document.createElement('li');
        listItem.appendChild(listItemValue);
        unorderList.appendChild(listItem);
    }
}

function showError(error) {
    unorderList.innerHTML = "";
    let listItemValue = document.createTextNode('Sorry! Try another username');
    let listItem = document.createElement('li');
    listItem.appendChild(listItemValue);
    unorderList.appendChild(listItem);
}
