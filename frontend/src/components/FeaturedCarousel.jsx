import { ExternalLink, FileText } from 'lucide-react'

const FeaturedCarousel = ({ featured, posts }) => {
  if (!featured || featured.length === 0) return null

  const renderFeaturedItem = (item, index) => {
    if (item.type === 'post') {
      const post = posts.find(p => p.id === item.postId)
      if (!post) return null

      return (
        <div key={index} className="flex-shrink-0 w-80 bg-card border border-border rounded-2xl p-4">
          <div className="flex items-start gap-2 mb-2">
            <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-medium text-foreground line-clamp-2">
                Featured Post
              </h3>
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.content}
          </p>
        </div>
      )
    }

    return (
      <a
        key={index}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-80 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors focus-ring group"
      >
        {item.thumb && (
          <div className="aspect-video bg-muted">
            <img
              src={item.thumb}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-4">
          <div className="flex items-start gap-2">
            <div className="flex-1">
              <h3 className="font-medium text-foreground line-clamp-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          </div>
        </div>
      </a>
    )
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">Featured</h2>
      
      <div className="flex gap-4 overflow-x-auto pb-2">
        {featured.map((item, index) => renderFeaturedItem(item, index))}
      </div>
    </div>
  )
}

export default FeaturedCarousel