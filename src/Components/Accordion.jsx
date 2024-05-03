/* eslint-disable react/prop-types */

import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem num={i} title={el.title} text={el.text} key={el.title} />
      ))}
    </div>
  );
}
