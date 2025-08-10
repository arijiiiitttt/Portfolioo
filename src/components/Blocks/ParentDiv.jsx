import { useState } from 'react';
import Calendar from '../otherElements/Calendar';
import Clock from '../otherElements/Clock';
import MoodTracker from '../otherElements/MoodTracker';
import BatteryAndImage from '../otherElements/BatteryAndImage';
import MusicPlayer from '../otherElements/MusicPlayer';
import ImageScrollBig from '../otherElements/ImageScrollBig';
import ImageScrollOne from '../otherElements/ImageScroll0ne';
import ImageScrollTwo from '../otherElements/ImageScrollTwo';

const ParentDiv = ({ onBackgroundChange }) => {
  const [showBgOptions, setShowBgOptions] = useState(false);

  const backgroundOptions = [
    { name: 'Default', path: './bg/bgfrontpg.jpg' },
    { name: 'Mountain', path: './bg/bgfrontpg02.jpg' },
    { name: 'Beach', path: './bg/bgfrontpg03.jpg' },
    { name: 'Forest', path: './bg/bgfrontpg04.jpg' },
    { name: 'City', path: './bg/bgfrontpg05.jpg' },
  ];

  return (
    <div className="h-135 flex flex-row justify-center items-center w-4/5">
      <div className='h-135 gap-y-3 flex flex-col justify-center items-center w-1/3'>
        <Clock />
        <Calendar />
        <BatteryAndImage />

        <div></div>
      </div>
      <div className='h-135 flex flex-col pt-10 w-3/4 '>

        <div className='flex flex-row justify-center items-center gap-x-5'> {/* Added justify-center and items-center */}
       <a href='/notfound'><img src="./logos/a.png" alt="icon" className="w-18 h-18 hover:" /></a>
          {/* Background Changer Button */}
          <div className="relative">
            <button
              onClick={() => setShowBgOptions(!showBgOptions)}
              className="rounded-full bg-opacity-20 hover:bg-opacity-40 transition-all"
              aria-label="Change background"
            >
              <img
                src="" // Replace with the actual path to your image
                alt="icon"
                className="w-12 h-12"
              />
            </button>

            {showBgOptions && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 border border-gray-200 dark:border-gray-700">
                <div className="py-1">
                  <p className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                    Backgrounds
                  </p>
                  {backgroundOptions.map((bg) => (
                    <button
                      key={bg.name}
                      onClick={() => {
                        onBackgroundChange(bg.path);
                        setShowBgOptions(false);
                      }}
                      className="flex items-center w-full px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {bg.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href='/underprocess'>
            <img src="./icons/youtube.webp" alt="icon" href='/underprocess' className=" bg-white  rounded-xl w-12 h-12 hover:" />
          </a>
          <a href='/underprocess'>
          <img src="./icons/gmail.png" alt="icon" className="h-12 w-12 rounded-lg bg-white hover:" />
          </a>
          <a href='/underprocess'>
          <img src="./icons/facebook.png" alt="icon" className=" w-12 h-12 hover:" />
          </a>
          <a href='/underprocess'>
          <img src="./icons/folder.png" alt="icon" className="h-12 w-12 hover:" />
          </a>
          <a href='/underprocess'>
          <img src="./icons/instagram.png" alt="icon" className="  w-12 h-12 hover:" />
          </a>
          <a href='/underprocess'>
          <img src="./icons/linkedin.png" alt="icon" className="h-12 w-12  hover:" />
          </a>
          <a href='/underprocess'>
          <img src="./icons/music.png" alt="icon" className=" w-12 h-12 hover:" />
</a>
        </div>
        <div className='flex flex-row'>
          <a href='/underprocess'><img src="./icons/notion.png" alt="icon" className="h-12 w-20 hover:" /></a>
                  <a href='https://leetcode.com/u/realarijiiiittttroyyyy/' target='_blank'><img src="./icons/LeetCode.png" alt="icon" className="h-12 w-12 rounded-lg bg-white p-1 hover:" /></a>
        </div>
      </div>
    </div>
  );
};

export default ParentDiv;
