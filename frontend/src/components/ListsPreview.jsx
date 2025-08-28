import { List } from 'lucide-react'

const ListsPreview = ({ lists }) => {
  if (!lists || lists.length === 0) return null

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <List className="w-5 h-5" />
        Lists
      </h3>
      
      <div className="space-y-3">
        {lists.map((list, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-foreground">{list.name}</h4>
              {list.description && (
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {list.description}
                </p>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                {list.count} members
              </p>
            </div>
            <button className="px-3 py-1 text-xs bg-muted hover:bg-muted/80 rounded-full transition-colors focus-ring">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListsPreview