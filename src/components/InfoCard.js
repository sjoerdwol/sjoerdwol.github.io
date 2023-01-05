export function InfoCard(props) {
  const content = props.content;

  return (
    <div className=' text-center border-2 border-htmlgray-500 border-opacity-40 rounded-xl p-3 mb-5 last:m-0 2xl:basis-2/5 2xl:m-0' >
      <h4 className='pb-4 font-semibold text-darkjunglegreen-500 dark:text-platinum-500 md:text-2xl'>{content.title}</h4>
      <p className='break-words px-5 text-darkjunglegreen-500 dark:text-platinum-500 md:px-10 md:text-xl h-auto xl:px-20 xl:break-all '>{content.description}</p>
      {content.icons && <div className='pt-6 flex flex-wrap justify-center text-2xl gap-4 text-darkjunglegreen-500 dark:text-platinum-500 md:text-5xl md:gap-8'>
        {content.icons.map(icon => { return icon })}
      </div>}
    </div>
  );
}