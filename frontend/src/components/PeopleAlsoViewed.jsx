import { Eye, UserPlus } from 'lucide-react'
import Avatar from './Avatar'

const PeopleAlsoViewed = () => {
  const suggestions = [
    {
      name: "Sarah Chen",
      username: "sarahc_ux",
      role: "Senior UX Designer at Meta",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      mutualConnections: 5
    },
    {
      name: "Rahul Singh",
      username: "rahul_tech",
      role: "Frontend Lead at Stripe",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      mutualConnections: 12
    },
    {
      name: "Emily Johnson",
      username: "emily_codes",
      role: "Full Stack Developer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      mutualConnections: 8
    }
  ]

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <Eye className="w-5 h-5" />
        People Also Viewed
      </h3>
      
      <div className="space-y-4">
        {suggestions.map((person, index) => (
          <div key={index} className="flex items-start gap-3">
            <Avatar src={person.avatar} alt={person.name} size="sm" />
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground truncate">{person.name}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">{person.role}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {person.mutualConnections} mutual connections
              </p>
            </div>
            
            <button className="p-1.5 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity focus-ring flex-shrink-0">
              <UserPlus className="w-3 h-3" />
            </button>
          </div>
        ))}
        
        <button className="w-full text-sm text-primary hover:underline py-2 focus-ring rounded">
          Show more suggestions
        </button>
      </div>
    </div>
  )
}

export default PeopleAlsoViewed