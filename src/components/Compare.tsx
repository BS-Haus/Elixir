// "How we com-pear" → how Elixir compares. Qualitative, category-level comparisons only.
const cols = ["Elixir", "A G&T", "Sugary mocktails", "Other alcohol-free spirits"];
const rows: [string, string[]][] = [
  ["0% alcohol", ["Yes", "✕", "Yes", "Yes"]],
  ["Bitter, grown-up flavour", ["Yes", "Yes", "✕", "Sometimes"]],
  ["Natural botanicals", ["Yes", "Sometimes", "✕", "Sometimes"]],
  ["Clear head tomorrow", ["Yes", "✕", "Yes", "Yes"]],
  ["30 drinks in one bottle", ["Yes", "✕", "✕", "✕"]],
];

export default function Compare() {
  return (
    <section className="grid border-b border-line md:grid-cols-12">
      <div className="flex flex-col justify-center px-6 py-14 md:col-span-4 md:px-12">
        <h2 className="caps text-2xl md:text-3xl">How we compare.</h2>
        <p className="mt-4 max-w-sm text-[15px] leading-[1.65]">
          All the ritual of a proper drink — bitterness, botanicals, a little ceremony — with none of the
          alcohol and none of the sugar rush.
        </p>
        <a href="#range" className="pill mt-8 self-start bg-ink text-white hover:bg-rust">
          Choose your Elixir
        </a>
      </div>
      <div className="rail overflow-x-auto px-4 pb-10 md:col-span-8 md:px-10 md:py-14">
        <table className="w-full min-w-[620px] border-collapse text-center text-[13px]">
          <thead>
            <tr>
              <th className="w-[28%]" />
              {cols.map((c, i) => (
                <th
                  key={c}
                  className={`px-3 py-4 font-medium ${i === 0 ? "rounded-t-2xl border-x border-t border-rust text-rust" : "text-muted"}`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, vals], r) => (
              <tr key={label} className="border-t border-ink/10">
                <td className="py-4 pr-3 text-left">{label}</td>
                {vals.map((v, i) => (
                  <td
                    key={i}
                    className={`px-3 py-4 ${i === 0 ? `border-x border-rust font-medium text-rust ${r === rows.length - 1 ? "rounded-b-2xl border-b" : ""}` : "text-muted"}`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
