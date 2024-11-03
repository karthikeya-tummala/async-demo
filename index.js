console.log('Before');
fetchUser(1, user => {
    // console.log('User', user);
    fetchRepos(user.gitHubUsername, repos => {
        console.log('Repos', repos);
    });
});
console.log('After');

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