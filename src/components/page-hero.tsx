import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  meta?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  meta,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" />
      <div className="media-shade" />
      <div className="shell page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-lead">{description}</p>
        {meta ? <p className="page-meta">{meta}</p> : null}
      </div>
    </section>
  );
}

