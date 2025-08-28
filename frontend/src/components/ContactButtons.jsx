import { Edit, MessageCircle, UserPlus, UserCheck } from 'lucide-react'

const ContactButtons = ({ isOwner, followState, onFollow, onConnect, onMessage }) => {
  if (isOwner) {
    return (
      <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity focus-ring">
        <Edit className="w-4 h-4" />
        Edit profile
      </button>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onMessage}
        className="flex items-center gap-2 px-4 py-2 border border-border rounded-full font-medium hover:bg-muted transition-colors focus-ring"
        disabled={followState.hasSentMessage}
      >
        <MessageCircle className="w-4 h-4" />
        {followState.hasSentMessage ? 'Sent' : 'Message'}
      </button>

      <button
        onClick={onConnect}
        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors focus-ring ${
          followState.isConnected
            ? 'bg-muted text-foreground hover:bg-muted/80'
            : 'bg-primary text-primary-foreground hover:opacity-90'
        }`}
      >
        {followState.isConnected ? (
          <UserCheck className="w-4 h-4" />
        ) : (
          <UserPlus className="w-4 h-4" />
        )}
        {followState.isConnected ? 'Connected' : 'Connect'}
      </button>

      <button
        onClick={onFollow}
        className={`px-4 py-2 rounded-full font-medium transition-colors focus-ring ${
          followState.isFollowing
            ? 'bg-muted text-foreground hover:bg-muted/80 border border-border'
            : 'bg-foreground text-background hover:opacity-90'
        }`}
      >
        {followState.isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  )
}

export default ContactButtons