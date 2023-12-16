export const vidGenData = async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
}