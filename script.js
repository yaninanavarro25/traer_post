const url = 'https://jsonplaceholder.typicode.com/posts';
let parrafos = document.getElementById('post-data');


const getPosts = async () => {
        try {
            const response = await fetch(url);
            const datos = await response.json();
        
            datos.forEach(element => {
                if (element.id <= 4) {
                    parrafos.innerHTML += `<li><strong>${element.title}</strong><br>${element.body}</li><br>`
                }
            });
        } catch (error) {
            console.log(error);
            
        }
}