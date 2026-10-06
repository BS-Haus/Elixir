import { faqs } from "@/lib/content";
import { Signup } from "./Signup";

/** FAQ (native disclosure) beside the newsletter. */
export default function Questions() {
  return (
    <section className="grid border-b border-line md:grid-cols-2">
      <div className="border-b border-line px-6 py-14 md:border-r md:border-b-0 md:px-12">
        <h2 className="caps text-xl md:text-2xl">Questions.</h2>
        <div className="mt-8 border-t border-ink/15">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-ink/15">
              <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[15px] font-medium">
                {f.q}
                <span className="transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 text-[14px] leading-[1.7] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center bg-shell px-6 py-14 md:px-12">
        <h2 className="caps text-xl md:text-2xl">No weekends wasted.</h2>
        <p className="mt-4 max-w-md text-[15px] leading-[1.65]">
          The Good Energy Guide, every Friday: where we&rsquo;re dancing, plans that aren&rsquo;t dinner, and
          Sundays well spent. Plus 10% off your first order.
        </p>
        <div className="mt-8">
          <Signup tag="good-energy-guide" cta="Sign up →" />
        </div>
      </div>
    </section>
  );
}
