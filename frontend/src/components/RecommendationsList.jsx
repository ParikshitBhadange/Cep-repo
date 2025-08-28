import { Quote } from 'lucide-react'
import Avatar from './Avatar'

const RecommendationsList = ({ recommendations }) => {
  if (!recommendations || recommendations.length === 0) return null

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Quote className="w-5 h-5" />
        Recommendations
      </h2>
      
      <div className="space-y-6">
        {recommendations.map((rec, index) => (
          <div key={index} className="border border-border rounded-xl p-4">
            <div className="flex items-start gap-3 mb-3">
              <Avatar 
                src={rec.avatar} 
                alt={rec.from} 
                size="sm" 
              />
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{rec.from}</h3>
                {rec.role && (
                  <p className="text-sm text-muted-foreground">{rec.role}</p>
                )}
              </div>
            </div>
            
            <blockquote className="text-muted-foreground italic leading-relaxed">
              "{rec.text}"
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendationsList