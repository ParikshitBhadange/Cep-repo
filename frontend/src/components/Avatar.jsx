const Avatar = ({ src, alt, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  }

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full bg-muted"
        loading="lazy"
      />
    </div>
  )
}

export default Avatar