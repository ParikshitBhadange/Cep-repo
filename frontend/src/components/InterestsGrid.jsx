const InterestsGrid = ({ interests }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {interests.map((interest, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-muted/80 transition-colors cursor-pointer"
        >
          {interest}
        </span>
      ))}
    </div>
  )
}

export default InterestsGrid