'use client';
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export default function Home() {

  const [message, setMessage] = useState([
    "You are destined for greatness!",
    "A big surprise is coming your way soon!",
    "You have a hidden talent waiting to shine!",
    "Someone special is thinking about you right now.",
    "Your hard work will soon pay off!",
    "A new opportunity will open doors for you.",
    "Luck is on your side—take a chance!",
    "You will soon meet someone who changes your life.",
    "Happiness and success are in your future!",
    "Your kindness will bring you unexpected rewards.",
    "A secret admirer has feelings for you!",
    "You will soon achieve something you once thought impossible.",
    "A new adventure is waiting for you!",
    "Good news will come your way very soon!",
    "You have a strong intuition—trust it!",
    "A financial boost is on the horizon.",
    "Your dreams are closer than you think!",
    "A heartfelt conversation will bring you clarity.",
    "You will experience a moment of pure joy soon!",
    "A long-lost connection will return to your life.",
    "Your creativity will lead to a great opportunity!",
    "You will soon receive a meaningful compliment.",
    "An exciting journey is ahead—embrace it!",
    "You will make someone’s day with your kindness.",
    "A positive change is about to happen in your life.",
    "Something you’ve been waiting for will finally arrive.",
    "Your energy attracts good things—keep shining!",
    "A small risk will bring big rewards.",
    "You are stronger than you realize—keep going!",
    "A moment of clarity will help you make an important decision.",
    "You will find joy in the smallest moments.",
    "A cherished memory will bring a smile to your face.",
    "Your efforts will inspire others around you.",
    "A peaceful moment is just around the corner.",
    "You will discover a new passion that excites you.",
    "A thoughtful gesture will be greatly appreciated.",
    "Your resilience will be rewarded in unexpected ways.",
    "An old friend will reconnect with you soon.",
    "You will make a positive impact on someone’s life.",
    "A beautiful surprise is waiting for you.",
    "Your curiosity will lead to a valuable discovery.",
    "You will feel a sense of accomplishment soon.",
    "A kind word will brighten your day.",
    "Your determination will lead to success.",
    "An unexpected gift will bring you joy.",
    "You will find inspiration in everyday moments.",
    "A new friendship will blossom in your life.",
    "Your generosity will create a ripple effect of kindness.",
    "You will overcome a challenge with grace.",
    "A peaceful resolution is on the horizon.",
    "Your positive energy will attract wonderful opportunities.",
    "You will experience a moment of pure happiness.",
    "A creative idea will come to you at the perfect time.",
    "Your patience will be rewarded.",
    "An uplifting message will bring you comfort.",
    "You will discover strength you didn’t know you had.",
    "A heartfelt compliment will make your day.",
    "Your perseverance will lead to great achievements.",
    "A new chapter in your life is about to begin.",
    "You will find joy in helping others.",
    "A moment of laughter will brighten your day.",
    "Your dreams will become a reality.",
    "An unexpected encounter will bring you happiness.",
    "You will feel a sense of fulfillment soon.",
    "A thoughtful gesture will touch your heart.",
    "Your kindness will be remembered.",
    "A special moment will create a lasting memory.",
    "You will achieve something you’ve been working hard for.",
    "A positive mindset will attract good things.",
    "You will receive good news in the coming days.",
    "Your compassion will make a difference.",
    "A joyful experience is headed your way.",
    "You will feel a sense of peace and contentment.",
    "A helpful hand will be extended to you.",
    "Your talents will be recognized.",
    "A new perspective will bring you clarity.",
    "You will feel a surge of motivation and energy.",
    "A supportive friend will offer you encouragement.",
    "You will make progress towards your goals.",
    "A kind smile will brighten your day.",
    "Your hard work will be acknowledged.",
    "A sense of accomplishment will fill your heart.",
    "You will discover a new opportunity.",
    "A heartfelt thank you will mean the world to you.",
    "Your positive attitude will attract positivity.",
    "An unexpected joy will come into your life.",
    "You will feel a sense of pride in your achievements.",
    "A caring gesture will warm your heart.",
    "Your creativity will be celebrated.",
    "An exciting project will come your way.",
    "You will experience a moment of serenity.",
    "Your kindness will create a chain reaction of goodness.",
    "A new adventure will bring excitement into your life.",
    "You will find strength in a supportive community.",
    "An uplifting conversation will boost your spirits.",
    "Your determination will lead to great rewards.",
    "A sense of gratitude will fill your heart.",
    "You will receive a compliment that makes your day.",
    "A positive change is coming your way.",
    "Your efforts will be appreciated.",
    "A moment of clarity will guide your path.",
    "Your talents will open doors for you."
  ]);
  
  const [data, setData] = useState({
    name: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`https://checkyourluckserverbyjotirmoy.vercel.app/data`, data);

        const result = response.data; 
        console.log(result.message);
        console.log(response.status);
        const random = Math.floor(Math.random() * message.length);
        toast.success(`${message[random]}`);
    } catch (error) {
        console.error('There was a problem with the Axios operation:', error);
        toast.error(`Failed to submit. Please try again. Error: ${error.message}`);
    }
};

  
  return (
    <section className="bg-white h-screen text-black px-5">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mt-40">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-t-900 dark:text-black"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-t-50 border border-t-300 text-t-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-t-700 dark:border-t-600 dark:placeholder-t-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jotirmoy"
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-7">
          <label
            htmlFor="number"
            className="block mb-2 text-sm font-medium text-t-900 dark:text-black"
          >
            Your Lucky Number
          </label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="69"
            onChange={handleChange}
            className="bg-t-50 border border-t-300 text-t-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-t-700 dark:border-t-600 dark:placeholder-t-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </section>
  );
}
