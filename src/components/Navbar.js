import { BsFillSunFill, BsMoon } from 'react-icons/bs';

export function Navbar(props) {
  return (
    <nav className='py-10 mb-5 flex justify-between items-center 2xl:pt-16'>
      <h1 className='text-xl md:text-3xl xl:text-4xl'>sjoerdwol</h1>
      <ul className='flex items-center'>
        <li>{props.dark ? <BsMoon className='cursor-pointer text-3xl md:text-5xl' /> : <BsFillSunFill className='cursor-pointer text-3xl md:text-5xl' />}</li>
        <li className='text-white bg-black px-4 py-2 rounded-3xl ml-5 md:px-6 md:py-3 md:ml-10 md:font-semibold xl:px-8 xl:py-4 xl:ml-16'>Resume</li>
      </ul>
    </nav>
  );
}