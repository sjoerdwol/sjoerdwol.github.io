import { BsMoonFill } from 'react-icons/bs';

export function Navbar(props) {
  return (
    <nav className='py-10 mb-5 flex justify-between items-center 2xl:pt-16'>
      <h1 className='text-xl text-darkjunglegreen-500 dark:text-platinum-500 md:text-3xl xl:text-4xl'>sjoerdwol</h1>
      <ul className='flex items-center'>
        <li><BsMoonFill className='cursor-pointer text-3xl text-darkjunglegreen-500 dark:text-platinum-500 md:text-4xl xl:text-5xl' onClick={() => props.setDark(!props.dark)} /></li>
        <li className='font-semibold text-platinum-500 bg-darkjunglegreen-500 dark:bg-platinum-500 dark:text-darkjunglegreen-500 px-4 py-2 rounded-3xl ml-5 md:px-6 md:py-3 md:ml-10 xl:px-8 xl:py-4 xl:ml-16 xl:text-lg 3xl'>Resume</li>
      </ul>
    </nav>
  );
}