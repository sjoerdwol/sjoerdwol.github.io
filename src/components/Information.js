import { AiOutlineLinkedin, AiFillLinkedin, AiOutlineTwitter, AiFillTwitterSquare } from 'react-icons/ai';
import picture from './data/images/sjoerd_picture.jpg';

export function Information(props) {
  return (
    <div className='text-center p-8 md:px-10'>
      <h2 className='text-3xl font-semibold md:text-5xl'>Sjoerd Wolters</h2>
      <h3 className='text-xl py-2 md:text-2xl md:py-5'>Software Engineer and Hobby-Developer</h3>
      <div className='flex text-4xl justify-center gap-3 py-2 md:text-6xl md:gap-4'>
        {props.dark ? <AiOutlineLinkedin /> : <AiFillLinkedin />}
        {props.dark ? <AiOutlineTwitter /> : <AiFillTwitterSquare />}
      </div>
      <img src={picture} alt='Sjoerd Wolters' className='mx-auto rounded-full mt-5 -rotate-45 w-3/5 md:mt-12 lg:w-2/5 xl:w-1/3 2xl:w-1/4 3xl:w-1/5 4xl:w-1/6' />
    </div>
  );
}