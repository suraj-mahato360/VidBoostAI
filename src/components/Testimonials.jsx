import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-black">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl">
          What our <span className="text-yellow-300 ">clients</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
        Hear from Vidboost AI users! Learn how our features, including Script Generation and Keyword & Thumbnail Generation, are shaping success stories. Join the community and elevate your YouTube content effortlessly!
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          <TestimonialCard
            imageSrc="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            quote="Vidboost AI has revolutionized my content creation process. The Script Generation feature turns my ideas into polished scripts in no time, saving me hours of brainstorming. It's a game-changer for anyone looking to produce engaging YouTube content effortlessly!"
            name="Robbert"
            title="CTO, Robert Consultency"
          />

          <TestimonialCard
            imageSrc="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            quote="Thumbnail Generation by Vidboost AI is a graphic designer's dream. The tool creates visually stunning thumbnails that not only catch the eye but also resonate with my video content. It's like having a professional designer at my fingertips without the need for advanced graphic design skills."
            name="Mia Brown"
            title="Marketing Manager at Stech"
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ imageSrc, quote, name, title }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
      <p className="leading-loose text-gray-500 dark:text-gray-300">{quote}</p>

      <div className="flex items-center mt-6">
        <img className="object-cover rounded-full w-14 h-14" src={imageSrc} alt={name} />

        <div className="mx-4">
          <h1 className="font-semibold text-yellow-300">{name}</h1>
          <span className="text-sm text-gray-500 dark:text-gray-300">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;