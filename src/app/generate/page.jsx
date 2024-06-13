"use client";
import React from "react";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'
const Card = dynamic(() => import('@/components/Card'))
import {
  vidGenThumbImg,
  geminiVidGenData
} from "@/api";

const Page = () => {

  const [blobUrl, setBlobUrl] = useState(null);
  const [text, setText] = useState('');
  const [data, setData] = useState(null);

  const prompt = `You are a expert youtube content writer. Provide a youtube video title, Description, Tags for increasing videos reach, and Script of video,  with the given input of Video Idea. That is the input ${text}. Give this data only in JSON format as output no extra text beyound json for example like this {"title":"web developer tech jobs in current market", "Description":"something something", and other remaining mentioned parameters}`;


  const generateHandle = ()=> {
    if(text.length>2){
    geminiVidGenData(prompt).then((data) => setData(data));
    }
  }

  useEffect(() => {
    if(data){
    vidGenThumbImg(text)
      .then((result) => {
        const url = URL.createObjectURL(result);
        setBlobUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }, [data]);

  useEffect(() => {
    return () => URL.revokeObjectURL(blobUrl);
  }, [blobUrl]);

  
  return (
    <div className='flex flex-col w-full justify-center items-center min-h-[80vh] bg-black'>
      <div className="mt-36">
        <div className="despriction text-center text-[3rem] max-w-[700px]">
            <h2 className='text-white font-extrabold mt-5'>Enter <span className="text-yellow-400">Anything</span>  to Generate whole content on it</h2>
        </div>
        <div className="input-section flex justify-center flex-wrap items-center mt-5">
            <div className="input ">
                <input onChange={(e)=>setText(e.target.value)} value={text} className='p-2 max-w-sm min-w-[300px] h-12 relative z-20 border-[#f7c520] border-[1px] rounded-b-md rounded-t-md active:border-[0px] focus:border-[#f7c520]' type='text' placeholder='Enter Topic for content' />
            </div>
            <div className="btn p-2">
                <button onClick={generateHandle} className='bg-[#f7c520] p-3 rounded-md hover:bg-yellow-300  relative z-20'>Generate</button>
            </div>
        </div>
        </div>
      <div className="flex justify-evenly mt-8 text-white">
        <div className=" grid grid-cols-1 mt-4 m-4 lg:grid-cols-2">

          <div className="m-4">
            {data && (
                <Card title={'title'} data={data.title}/>
              )}
          </div>
          <div className="m-4">
            {data && (
                <Card title={'Tags'} data={data.tags}/>
              )}
          </div>
          
          <div className="m-4">
            {data && (
                <Card title={'script'} data={data.script}/>
              )}
          </div>
          <div className="m-4">
            {data && (
                <Card title={'desc'} data={data.description}/>
              )}
          </div>
          
            </div>
              {blobUrl && (
                <card
                  url={blobUrl}
                  title={'Thumbnail'}
                />
              )}
      </div>
    </div>
  );
};

export default Page;
