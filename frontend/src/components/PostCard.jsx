import { Heart, MessageCircle, Repeat2, Share, ExternalLink } from 'lucide-react'
import Avatar from './Avatar'
import PostActions from './PostActions'

const PostCard = ({ post, onAction, isPinned = false, showAuthor = false }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'now'
    if (diffInHours < 24) return `${diffInHours}h`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d`
    return date.toLocaleDateString()
  }

  const renderPostContent = () => {
    switch (post.type) {
      case 'image':
        return (
          <div className="space-y-3">
            <p className="text-foreground leading-relaxed">{post.content}</p>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={post.images[0]}
                alt="Post image"
                className="w-full h-auto max-h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        )
        
      case 'link':
        return (
          <div className="space-y-3">
            <p className="text-foreground leading-relaxed">{post.content}</p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-colors focus-ring"
            >
              <div className="aspect-[1.91/1] bg-muted">
                {post.thumb && (
                  <img
                    src={post.thumb}
                    alt={post.title || 'Link preview'}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground line-clamp-2">
                      {post.title}
                    </h3>
                    {post.description && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {post.description}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      {new URL(post.url).hostname}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                </div>
              </div>
            </a>
          </div>
        )
        
      default:
        return (
          <p className="text-foreground leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
        )
    }
  }

  return (
    <article className={`bg-card rounded-2xl border border-border p-6 transition-all duration-200 hover:shadow-md ${isPinned ? 'ring-2 ring-primary/20' : ''}`}>
      {/* Author info (for liked posts or reposts) */}
      {showAuthor && post.author && (
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
          <Avatar src={post.avatar} alt={post.author} size="sm" />
          <div>
            <p className="font-medium text-foreground">{post.author}</p>
            <p className="text-sm text-muted-foreground">@{post.username}</p>
          </div>
        </div>
      )}

      {/* Post header */}
      <div className="flex items-center justify-between mb-4">
        <time className="text-sm text-muted-foreground">
          {formatDate(post.createdAt)}
        </time>
        
        {post.isReposted && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Repeat2 className="w-3 h-3" />
            <span>You reposted</span>
          </div>
        )}
      </div>

      {/* Post content */}
      <div className="mb-4">
        {renderPostContent()}
      </div>

      {/* Post actions */}
      <PostActions
        post={post}
        onAction={onAction}
      />
    </article>
  )
}

export default PostCard