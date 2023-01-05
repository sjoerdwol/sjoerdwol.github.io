import { CardContainer } from "./CardContainer";
import { projectsData } from "./data/projectsData";

export function Projects() {
  return (
    <div className='py-8 px-5 md:py-10 md:px-10'>
      <h3 className='text-2xl font-medium text-darkjunglegreen-500 dark:text-platinum-500 md:text-4xl'>Projects</h3>
      <CardContainer contentArray={projectsData} />
    </div>
  );
}