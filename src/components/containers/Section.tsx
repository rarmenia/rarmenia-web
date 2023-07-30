const Section = ({ children, title }: { children?: React.ReactNode, title?: string }) => {
  return (
    <div className="flex flex-col gap-2 min-w-full w-full overflow-hidden bg-black/5 py-4">
      {title && <div className="font-sans text-white/40 italic ml-4">{title}</div>}
      {children && <div className="w-full">
        {children}
      </div>}
    </div>
  );
}

export default Section;
