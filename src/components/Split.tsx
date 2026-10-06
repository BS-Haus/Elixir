import Image from "next/image";

/** Half text / half image block with a centred uppercase heading and a pill CTA. */
export default function Split({
  id,
  title,
  children,
  img,
  alt,
  cta = "Shop now →",
  href = "#range",
  flip = false,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  img: string;
  alt: string;
  cta?: string;
  href?: string;
  flip?: boolean;
}) {
  return (
    <section id={id} className="grid scroll-mt-24 border-b border-line md:grid-cols-2">
      <div className={`flex items-center justify-center px-6 py-16 md:px-16 md:py-24 ${flip ? "md:order-2 md:border-l md:border-line" : "md:border-r md:border-line"}`}>
        <div className="max-w-md text-center">
          <h2 className="caps text-xl md:text-2xl">{title}</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.65]">{children}</div>
          <a href={href} className="pill mt-8 bg-ink text-white hover:bg-rust">
            {cta}
          </a>
        </div>
      </div>
      <div className={`relative min-h-[60svh] ${flip ? "md:order-1" : ""}`}>
        <Image src={img} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
    </section>
  );
}
