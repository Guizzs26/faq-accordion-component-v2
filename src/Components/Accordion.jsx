/* eslint-disable react/prop-types */
import { useState } from "react";

import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          num={i}
          title={el.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}
