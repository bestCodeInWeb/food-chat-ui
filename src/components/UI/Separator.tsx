const Separator = () => {
  return (
    <div className="flex items-center justify-center gap-3 mb-10">
      <div className="flex-1 h-[2px] bg-primary"></div>
      <span className="flex items-center justify-center leading-none text-primary">OR</span>
      <div className="flex-1 h-[2px] bg-primary"></div>
    </div>
  )
}

export default Separator;
