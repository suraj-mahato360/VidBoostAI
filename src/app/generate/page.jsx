"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "@/components/Card";
import {
  vidGenData,
  vidGenThumbImg,
} from "@/api";

const Page = () => {
    const [blobUrl, setBlobUrl] = useState(null);
  const [text, setText] = useState('web development');
  const [data, setData] = useState(null);

  const prompt = `You are a expert youtube content writer. Provide a youtube video title, Description, Tags for increasing videos reach, and Script of video,  with the given input of Video Idea. That is the input ${text}. Give this data in JSON format for example like this {"title":"web developer tech jobs in current market", "Description":"something something", and other remaining mentioned parameters}`;

  const generateHandle = ()=> {
    vidGenData(prompt).then((data) => setData(data));
  }
  useEffect(() => {
    vidGenThumbImg(text)
      .then((result) => {
        const url = URL.createObjectURL(result);
        setBlobUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]);
  useEffect(() => {
    return () => URL.revokeObjectURL(blobUrl);
  }, [blobUrl]);

  
  return (
    <div className='flex flex-col w-full justify-center items-center min-h-[80vh] bg-black relative z-20'>
        <div className="despriction text-center text-[2rem] max-w-[700px]">
            <h2 className='text-white mt-5'>Generate great content with Topic/Domain only</h2>
        </div>
        <div className="input-section flex justify-center items-center mt-5">
            <div className="input ">
                <input onChange={(e)=>setText(e.target.value)} value={text} className=' p-2  border-[#f7c520] border-[1px] rounded-b-md rounded-t-md active:border-[2px] active:border-[#f7c520]' type='text' placeholder='Enter Topic for content' />
            </div>
            <div className="btn p-2">
                <button onClick={generateHandle} className='bg-[#f7c520] p-2 rounded-md'>Generate</button>
            </div>
        </div>

      <div className="h-screen w-[90%] mt-8 text-white">
        <div className="grid grid-cols-2 grid-rows-3 md:grid-rows-4 md:grid-cols-4 gap-2 md:gap-4 h-screen">
          <div className="title bg-slate-600 col-span-3 md:col-span-2 rounded-b-md rounded-t-md border-2 border-yellow-300 ">
            <span className="pl-1 pt-1 text-lg">Title</span>
            {data && (
                <Card title={'title'} data={data.title}/>
              )}
          </div>
          <div className="Script bg-slate-600 col-span-3 md:col-span-2 rounded-b-md rounded-t-md border-2 border-yellow-300 ">
            <span className="pl-1 pt-1 text-lg">Video Script</span>
            {data && (
                <Card title={'script'} data={data.script}/>
              )}
          </div>
          <div className="Description bg-slate-600 col-span-3 md:col-span-2 rounded-b-md rounded-t-md border-2 border-yellow-300 ">
            <span className="pl-1 pt-1 text-lg">Description</span>
            {data && (
                <Card title={'desc'} data={data.description}/>
              )}
          </div>
          <div className="Tags bg-slate-600 col-span-3 md:col-span-2 rounded-b-md rounded-t-md border-2 border-yellow-300 ">
            <span className="pl-1 pt-1 text-lg">Keywords</span>
            {data && (
                <Card title={'Tags'} data={data.tags[0]}/>
              )}
          </div>
          <div className="bg-slate-600 rounded-b-md rounded-t-md border-2 border-yellow-300">
            <span className="pl-1 pt-1 text-lg">Unlock Full Access ✨</span>
            <p>price</p>
          </div>
          <div className="flex flex-col justify-center bg-slate-600 rounded-b-md rounded-t-md border-2 border-yellow-300 col-span-1 md:col-span-2">
            <div className="text-center">
              <span className="pl-1 pt-1 text-lg">Thumbnail</span>
            </div>
            <div className="flex justify-center">
              {blobUrl && (
                <Image
                  className="w-72 h-44"
                  src={blobUrl}
                  alt="thumbnail"
                  width={200}
                  height={150}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
