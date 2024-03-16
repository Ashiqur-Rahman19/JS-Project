// // dummy data

// const posts = [
//     {
//         title: 'This is title 1',
//         body: 'This is body 1'
//     },
//     {
//         title: 'This is title 2',
//         body: 'This is body 2'
//     },
//     {
//         title: 'This is title 3',
//         body: 'This is body 3'
//     },
//     {
//         title: 'This is title 4',
//         body: 'This is body 4'
//     },
//     {
//         title: 'This is title 5',
//         body: 'This is body 5'
//     },
//     {
//         title: 'This is title 6',
//         body: 'This is body 6'
//     },
//     {
//         title: 'This is title 7',
//         body: 'This is body 7'
//     },
//     {
//         title: 'This is title 8',
//         body: 'This is body 8'
//     },
//     {
//         title: 'This is title 9',
//         body: 'This is body 9'
//     },
//     {
//         title: 'This is title 8',
//         body: 'This is body 8'
//     },
//     {
//         title: 'This is title 8',
//         body: 'This is body 8'
//     },
//     {
//         title: 'This is title 8',
//         body: 'This is body 8'
//     }
// ];


// fetch data

const fecthData = async(config) => {
   
    try{
        const res = await axios(config);
        return res.data
    }catch(error) {
        throw Error('Data is not fetched');
    };
 
};




// selection

const postsElement = document.querySelector('.posts');




 const loadAllData = async() => {
    const posts = await fecthData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <h4 class= "post-title">${post.title}</h4>
        <p class= "post-body">${post.body}</p>
        `;
        postsElement.appendChild(postElement);
    });
 };

 loadAllData();


