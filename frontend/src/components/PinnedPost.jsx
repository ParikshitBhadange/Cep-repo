import { Pin } from 'lucide-react'
import PostCard from './PostCard'

const PinnedPost = ({ post, onAction }) => {
  if (!post) return null

  return (
    <div className="relative">
      {/* Pin indicator */}
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2 px-4">
        <Pin className="w-4 h-4" />
        <span>Pinned Post</span>
      </div>
      
      <PostCard post={post} onAction={onAction} isPinned />
    </div>
  )
}

export default PinnedPost