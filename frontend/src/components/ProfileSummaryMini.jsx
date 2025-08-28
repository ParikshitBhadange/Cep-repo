import { MapPin } from 'lucide-react'
import Avatar from './Avatar'

const ProfileSummaryMini = ({ profile }) => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="text-center">
        <Avatar src={profile.avatar} alt={profile.name} size="md" className="mx-auto mb-3" />
        <h3 className="font-semibold text-foreground">{profile.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">@{profile.username}</p>
        
        {profile.location && (
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{profile.location}</span>
          </div>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="font-semibold text-foreground">{profile.stats.followers >= 1000 ? `${(profile.stats.followers / 1000).toFixed(1)}K` : profile.stats.followers}</div>
            <div className="text-xs text-muted-foreground">Followers</div>
          </div>
          <div>
            <div className="font-semibold text-foreground">{profile.stats.following}</div>
            <div className="text-xs text-muted-foreground">Following</div>
          </div>
          <div>
            <div className="font-semibold text-foreground">{profile.posts?.length || 0}</div>
            <div className="text-xs text-muted-foreground">Posts</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSummaryMini