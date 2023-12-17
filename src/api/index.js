export const vidGenThumbImg = async (data) => {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/segmind/Segmind-Vega",
		{
			headers: { Authorization: `Bearer ${process.env.hugging_face_api}`},
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
    console.log(process.env.OpenAPI)
	return result;
}


export const vidGenData = async (res)=> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${process.env.OpenAPI}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role: 'user', content:`${res}`}],
            temperature: 0.5,
        })
    })
       const data = await response.json();
       await storeData(data.choices[0].message.content);
       return data;
}
export const storeData = async (data) => {
    try {
      await localForage.setItem("myDataKey", data);
      console.log("Data stored successfully!");
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };

export const vidGenDescription = async (res)=> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${process.env.OpenAPI}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role: 'user', content:`${res}`}],
            temperature: 0.5,
        })
    })
       const data = await response.json();
       return data
}

export const vidGenScript = async (res)=> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${process.env.OpenAPI}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role: 'user', content:`${res}`}],
            temperature: 0.5,
        })
    })
       const data = await response.json();
       return data
}
export const vidGenTags = async (res)=> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${process.env.OpenAPI}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages:[{role: 'user', content:`${res}`}],
            temperature: 0.5,
        })
    })
       const data = await response.json();
       return data
}