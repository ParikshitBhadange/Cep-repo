import { Users } from 'lucide-react'
import Avatar from './Avatar'

const MutualFollowersRow = ({ mutuals }) => {
  if (!mutuals || mutuals.length === 0) return null

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <Users className="w-5 h-5" />
        Mutual Connections
      </h3>
      
      <div className="space-y-3">
        {mutuals.slice(0, 3).map((mutual, index) => (
          <div key={index} className="flex items-center gap-3">
            <Avatar src={mutual.avatar} alt={mutual.name} size="sm" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{mutual.name}</p>
              <p className="text-sm text-muted-foreground truncate">@{mutual.username}</p>
            </div>
            <button className="px-3 py-1 text-xs bg-muted hover:bg-muted/80 rounded-full transition-colors focus-ring">
              View
            </button>
          </div>
        ))}
        
        {mutuals.length > 3 && (
          <button className="w-full text-sm text-primary hover:underline py-2 focus-ring rounded">
            View all {mutuals.length} connections
          </button>
        )}
      </div>
    </div>
  )
}

export default MutualFollowersRow