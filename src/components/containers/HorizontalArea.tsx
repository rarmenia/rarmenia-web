const HorizontalArea = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-full max-w-full overflow-x-hidden">
      <div className="overflow-x-auto">
        {children}
      </div>
    </div>
  )
}

export default HorizontalArea;

