import { InfoCard } from "./InfoCard";

export function CardContainer(props) {
  const contentArray = props.contentArray;

  return (
    <div className='mt-5 md:mt-10 2xl:flex 2xl:flex-row 2xl:justify-around 2xl:flex-wrap gap-5'>
      {contentArray.map((item, index) => <InfoCard key={index} content={item} />)}
    </div>
  );
}
