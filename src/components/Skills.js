import { CardContainer } from "./CardContainer";
import { skillsData } from "./data/skillsData";

export function Skills() {
  return (
    <div className='py-8 px-5 md:py-10 md:px-10'>
      <h3 className='text-2xl font-semibold font-WorkSans text-darkjunglegreen-500 dark:text-platinum-500 md:text-4xl'>Skills & Tech Stack</h3>
      <CardContainer contentArray={skillsData} />
    </div>
  );
}