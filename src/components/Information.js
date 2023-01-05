import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';
import picture from './data/images/sjoerd_picture.jpg';

export function Information(props) {
  return (
    <div className='text-center p-8 md:px-10'>
      <h2 className='text-3xl font-semibold text-darkjunglegreen-500 dark:text-platinum-500 md:text-5xl'>Sjoerd Wolters</h2>
      <h3 className='text-xl py-2 text-darkjunglegreen-500 dark:text-platinum-500 md:text-2xl md:py-5'>Software Engineer and Hobby-Developer</h3>
      <div className='flex text-4xl justify-center gap-3 py-2 md:text-6xl md:gap-4'>
        <a href='https://www.linkedin.com/in/sjoerdwol/'><AiFillLinkedin className='text-darkjunglegreen-500 dark:text-platinum-500' alt='LinkedIn' title='LinkedIn' /></a>
        <a href='https://twitter.com/realwatsn'><AiOutlineTwitter className='text-darkjunglegreen-500 dark:text-platinum-500' alt='Twitter' title='Twitter' /></a>
        <a href='https://github.com/sjoerdwol'><AiFillGithub className='text-darkjunglegreen-500 dark:text-platinum-500' alt='GitHub' title='GitHub' /></a>
      </div>
      <img src={picture} alt='Sjoerd Wolters' className='mx-auto rounded-full mt-5 -rotate-45 w-3/5 border-4 border-darkjunglegreen-500 dark:border-platinum-500 md:mt-12 lg:w-2/5 xl:w-1/3 2xl:w-1/4 3xl:w-1/5 4xl:w-1/6' />
    </div>
  );
}