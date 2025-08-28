const Skeleton = ({ className = '' }) => {
  return (
    <div 
      className={`animate-pulse bg-muted/50 ${className}`}
      aria-hidden="true"
    />
  )
}

export default Skeleton