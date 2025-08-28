import { useState } from 'react'
import { MapPin, Link2, Calendar, MoreHorizontal, Edit, MessageCircle, UserPlus, UserCheck } from 'lucide-react'
import Avatar from './Avatar'
import CoverImage from './CoverImage'
import VerifiedBadge from './VerifiedBadge'
import Badges from './Badges'
import ContactButtons from './ContactButtons'
import ProfileStats from './ProfileStats'

const ProfileHeader = ({ profile, isOwner, followState, onFollow, onConnect, onMessage }) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  return (
    <div className="bg-card rounded-2xl shadow-md border border-border overflow-hidden animate-fade-in">
      {/* Cover Image */}
      <div className="relative">
        <CoverImage src={profile.coverImage} alt={`${profile.name}'s cover`} />
        
        {/* Avatar positioned over cover */}
        <div className="absolute -bottom-16 left-6">
          <Avatar 
            src={profile.avatar} 
            alt={profile.name}
            size="lg"
            className="ring-4 ring-card"
          />
        </div>
      </div>

      {/* Header Content */}
      <div className="px-6 pt-20 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          {/* Name and Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold text-foreground">{profile.name}</h1>
              {profile.isVerified && <VerifiedBadge />}
            </div>
            
            <p className="text-muted-foreground mb-1">@{profile.username}</p>
            
            <h2 className="text-lg font-semibold text-foreground mb-3 text-balance">
              {profile.headline}
            </h2>

            {/* Badges */}
            {profile.badges && profile.badges.length > 0 && (
              <Badges badges={profile.badges} />
            )}

            {/* Bio */}
            <p className="text-foreground mb-4 text-balance leading-relaxed">
              {profile.bio}
            </p>

            {/* Location, Website, Joined */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              {profile.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
              )}
              
              {profile.website && (
                <div className="flex items-center gap-1">
                  <Link2 className="w-4 h-4" />
                  <a 
                    href={profile.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline focus-ring rounded"
                  >
                    {profile.website.replace('https://', '')}
                  </a>
                </div>
              )}
              
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Joined {formatDate(profile.joined)}</span>
              </div>
            </div>

            {/* Stats */}
            <ProfileStats stats={profile.stats} />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:flex-col sm:items-end">
            <div className="relative">
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="p-2 rounded-full hover:bg-muted transition-colors focus-ring"
                aria-label="More options"
              >
                <MoreHorizontal className="w-5 h-5" />
              </button>
              
              {showMoreMenu && (
                <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg py-1 z-10 min-w-[150px]">
                  <button className="w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors">
                    Share profile
                  </button>
                  <button className="w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors">
                    Copy link
                  </button>
                </div>
              )}
            </div>

            <ContactButtons
              isOwner={isOwner}
              followState={followState}
              onFollow={onFollow}
              onConnect={onConnect}
              onMessage={onMessage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader