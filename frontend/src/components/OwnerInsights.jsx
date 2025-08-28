import { TrendingUp, Eye, Search, Users } from 'lucide-react'

const OwnerInsights = () => {
  const insights = [
    {
      label: 'Profile views',
      value: '2.1K',
      change: '+12%',
      icon: Eye,
      trend: 'up'
    },
    {
      label: 'Post impressions',
      value: '18.3K',
      change: '+8%',
      icon: TrendingUp,
      trend: 'up'
    },
    {
      label: 'Search appearances',
      value: '847',
      change: '+3%',
      icon: Search,
      trend: 'up'
    }
  ]

  return (
    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <Users className="w-5 h-5" />
        Your Analytics (Last 30 days)
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <div key={index} className="bg-card/50 rounded-xl p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <insight.icon className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{insight.label}</span>
            </div>
            
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">{insight.value}</span>
              <span className={`text-xs font-medium ${
                insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {insight.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OwnerInsights