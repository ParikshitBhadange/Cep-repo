const ProfileStats = ({ stats }) => {
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return (
    <div className="flex gap-6 text-sm">
      <button className="hover:underline focus-ring rounded transition-colors">
        <span className="font-semibold text-foreground">
          {formatNumber(stats.following)}
        </span>
        <span className="text-muted-foreground ml-1">Following</span>
      </button>
      
      <button className="hover:underline focus-ring rounded transition-colors">
        <span className="font-semibold text-foreground">
          {formatNumber(stats.followers)}
        </span>
        <span className="text-muted-foreground ml-1">Followers</span>
      </button>
      
      <button className="hover:underline focus-ring rounded transition-colors">
        <span className="font-semibold text-foreground">
          {formatNumber(stats.connections)}
        </span>
        <span className="text-muted-foreground ml-1">Connections</span>
      </button>
    </div>
  )
}

export default ProfileStats