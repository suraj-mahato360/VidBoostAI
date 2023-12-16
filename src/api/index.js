export const vidGenThumbImg = async (data) => {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/segmind/Segmind-Vega",
		{
			headers: { Authorization: `Bearer ${process.env.hugging_face_api} `},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}


export const vidGenData = async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET'
    });
    return await res.json();
}
export const vidGenDescription = async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET'
    });
    return await res.json();
}

export const vidGenScript = async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET'
    });
    return await res.json();
}
export const vidGenTags = async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET'
    });
    return await res.json();
}