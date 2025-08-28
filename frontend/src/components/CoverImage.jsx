const CoverImage = ({ src, alt }) => {
  return (
    <div className="w-full h-48 sm:h-64 bg-muted overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  )
}

export default CoverImage