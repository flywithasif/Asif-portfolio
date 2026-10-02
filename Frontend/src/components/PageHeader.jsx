export default function PageHeader({
  number,
  label,
  title,
  highlight,
  description,
}) {
  return (
    <div className="max-w-[920px] pb-16 md:pb-20">
      <div className="section-index">
        <span className="text-[#c9a15a]">{number}</span>

        <span className="h-px w-10 bg-[#c9a15a]/60" />

        <span>{label}</span>
      </div>

      <h1 className="mt-7 font-sans text-5xl font-semibold leading-[0.97] tracking-[-0.065em] md:text-7xl lg:text-[88px]">
        {title}
        <br />
        <span className="font-serif font-medium text-[#c9a15a]">
          {highlight}
        </span>
      </h1>

      {description && (
        <p className="mt-7 max-w-[610px] text-sm leading-8 text-[#858079] md:text-[15px]">
          {description}
        </p>
      )}
    </div>
  );
}
