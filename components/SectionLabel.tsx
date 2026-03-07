interface SectionLabelProps {
  num: string;
  label: string;
}

export default function SectionLabel({ num, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-xs md:text-sm font-semibold text-white/60">{num}</span>
      <h3 className="text-xs md:text-sm font-semibold tracking-widest text-white/60 uppercase">
        {label}
      </h3>
    </div>
  );
}
