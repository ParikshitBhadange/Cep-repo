import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react'

const PostActions = ({ post, onAction }) => {
  const formatCount = (count) => {
    if (count === 0) return ''
    if (count < 1000) return count.toString()
    return `${(count / 1000).toFixed(1)}K`
  }

  const actions = [
    {
      icon: MessageCircle,
      count: post.replies,
      onClick: () => onAction(post.id, 'reply'),
      label: 'Reply'
    },
    {
      icon: Repeat2,
      count: post.reposts,
      onClick: () => onAction(post.id, 'repost'),
      label: post.isReposted ? 'Undo repost' : 'Repost',
      active: post.isReposted,
      activeColor: 'text-green-500'
    },
    {
      icon: Heart,
      count: post.likes,
      onClick: () => onAction(post.id, 'like'),
      label: post.isLiked ? 'Unlike' : 'Like',
      active: post.isLiked,
      activeColor: 'text-red-500'
    },
    {
      icon: Share,
      count: 0,
      onClick: () => onAction(post.id, 'share'),
      label: 'Share'
    }
  ]

  return (
    <div className="flex items-center justify-between pt-3 border-t border-border">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all duration-200 hover:bg-muted focus-ring group ${
            action.active ? action.activeColor : 'text-muted-foreground hover:text-foreground'
          }`}
          aria-label={action.label}
        >
          <action.icon 
            className={`w-4 h-4 transition-transform group-hover:scale-110 ${
              action.active && action.icon === Heart ? 'fill-current' : ''
            }`} 
          />
          {action.count > 0 && (
            <span className="text-xs font-medium">
              {formatCount(action.count)}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default PostActions