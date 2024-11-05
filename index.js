console.log('Before');
getUser(1, getRepo);
console.log('After');

function displayCommits(commits){
    console.log(commits);
}

function getCommits(repo){
    getCommits(repo, displayCommits);
}

function getRepo(user){
    getRepos(user.gitHubUsername, getCommits);
}

function fetchUser(id, callback){
    setTimeout(() => {
        console.log('Reading user details from database!!!');
        callback({ id: id, gitHubUsername: 'karthik' });
    }, 2000);
}

function fetchRepos(username, callback){
    setTimeout(() => {
        console.log(`Fetching repositories under the username ${username}!!!`);
        callback(['repo 1', 'repo 2', 'repo 3']);
    }, 2000);

}