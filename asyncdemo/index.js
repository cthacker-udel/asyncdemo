console.log('Starting code..');
/*
getUser(1,(theUser) => {
    getRepositories(theUser,(repos) => {
        console.log(`The repos : ${JSON.stringify(repos)}`);
        getCommits(repos,new Promise((resolve,reject) => {
            resolve()
        }))
    });
});
*/
/*
const p = getUser(1);

p.then(user => getRepositories(user.githubusername))
.then(repos => getCommits(repos))
.then(commits => console.log(commits))
.catch(err => console.log(`Error : ${err.message}`));
*/
// async and await approach

async function displayCommits(){
    try{
        const user = await getUser(1);
        const repos = await getRepositories(user.githubusername);
        const commits = await getCommits(repos);
        console.log(`commits = ${commits}`);
    }
    catch(err){
        console.log(err.message);
    }
}

displayCommits();


/*
p.then((userobj) => {
    getRepositories(userobj.githubusername).then((repos) => {
        getCommits(repos).then((commits) => {
            console.log(commits);
        })
        .catch((err) => console.log(new Error(err).message));
    })
    .catch((err) => console.log(new Error(err).message));
})
.catch((err) => console.log(new Error(err).message));
*/



function getUser(id){

    return new Promise((resolve,reject) => {
        
        setTimeout(() => {
            resolve({id: id, githubusername: 'cthacker-udel'});
        },2000);

    });

}

function getRepositories(username){

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            resolve({repos: [username, 'repo1', 'repo2', 'repo3']});
        },3000);

    })
}

function getCommits(repo){

    const commits = {

        repo1: ['commit1','commit2','commit3'],
        repo2: ['refactor1','refactor2','refactor3'],
        repo3: ['implement1','implement2','implement3']

    }

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            resolve(commits[repo.repos[2]]);
        },3000);

    })

}