console.log('Starting code..');
getUser(1,userFunc);

function displayCommits(commits) {
    console.log(commits);
}

function passRepos(repos){
    getCommits(repos,displayCommits);
}

function userFunc(theUser){
    getRepositories(theUser,passRepos);
}



function getUser(id,callback){

    setTimeout(() => {
        console.log('Getting user from database');
        callback({id: id, githubUsername: 'cthacker-udel'});
    },2000);

}

function getRepositories(username,callback){
    setTimeout(() => {
        callback({repos: [username,'repo1','repo2','repo3']});
    },3000);
}

function getCommits(repo,callback){

    const commits = {

        repo1: ['commit1','commit2','commit3'],
        repo2: ['refactor1','refactor2','refactor3'],
        repo3: ['implement1','implement2','implement3']

    }

    setTimeout(() => {
        callback(commits[repo.repos[1]]);
    },3000);

}