export const vidGenThumbImg = async (data) => {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/dataautogpt3/OpenDalleV1.1",
		{
			headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_API}`},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
}

export const vidGenData = async (res)=> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPEN_API}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role: 'user', content:`${res}`}],
            temperature: 0.5,
        })
    })
       const data = await response.json();
        const innerData =JSON.parse(data.choices[0].message.content);
       return innerData;
}



// export const vidGenThumbImg = async (data) => {
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/segmind/Segmind-Vega",
// 		{
// 			headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_API}`},
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.blob();
//     console.log(process.env.OpenAPI)
// 	return result;
// }