console.log('Before');
// getUser(1, (user) => {
//     getRepo(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });

console.log('After');

getUser(1)
    .then(user => getRepo(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log('error', err.message));

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching commits for repo");
            resolve(['commit 1', 'commit 2', 'commit 3']);
        }, 100);
    });
}

function getUser(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user details from database!!!');
            resolve({ id: id, gitHubUsername: 'karthik' });
        }, 100);

    });
}

function getRepo(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching repositories under the username ${username}!!!`);
            resolve(['repo 1', 'repo 2', 'repo 3']);
        }, 2000);
    });
}
