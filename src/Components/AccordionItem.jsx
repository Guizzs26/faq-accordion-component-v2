/* eslint-disable react/prop-types */

export default function AccordionItem({ num, title, text }) {
  function handleToggle() {}

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <h2 className="text">{title}</h2>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
