import { faqs } from "./data/dataFaqs";

import Accordion from "./Components/Accordion";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
