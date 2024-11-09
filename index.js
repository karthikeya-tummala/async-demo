console.log('Before');
displayCommits();
console.log('After');

async function displayCommits(){
    try {
        const user = await getUser(1);
        const repos = await getRepos(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err){
        console.log('Error:', err.message);
    }
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching commits for repo");
            // resolve(['commit 1', 'commit 2', 'commit 3']);
            reject(new Error('Could not get the repos'));
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

function getRepos(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetching repositories under the username ${username}!!!`);
            resolve(['repo 1', 'repo 2', 'repo 3']);
        }, 2000);
    });
}
