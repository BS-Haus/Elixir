const values = [
  "0% alcohol",
  "30 serves per bottle",
  "Organic botanicals",
  "Vegan & gluten free",
  "Free UK delivery over £40",
];

/** Trust strip directly under the hero. */
export default function Values() {
  return (
    <section className="border-b border-line bg-paper">
      <ul className="rail mx-auto flex max-w-[1440px] gap-10 overflow-x-auto px-5 py-5 md:justify-between md:px-10">
        {values.map((v) => (
          <li key={v} className="label shrink-0 text-muted">
            {v}
          </li>
        ))}
      </ul>
    </section>
  );
}
