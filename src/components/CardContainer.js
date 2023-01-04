import { InfoCard } from "./InfoCard";

export function CardContainer(props) {
  const contentArray = props.contentArray;

  return (
    <div className='mt-5 md:mt-10'>
      {contentArray.map((item, index) => <InfoCard key={index} content={item} />)}
    </div>
  );
}
