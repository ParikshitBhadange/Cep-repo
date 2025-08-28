import { Radio, Calendar } from 'lucide-react'

const SpacesPreview = ({ spaces }) => {
  if (!spaces || spaces.length === 0) return null

  const formatDateTime = (dateString) => {
    const date = new Date(dateString)
    return {
      date: date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      }),
      time: date.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      })
    }
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
        <Radio className="w-5 h-5" />
        Spaces
      </h3>
      
      <div className="space-y-4">
        {spaces.map((space, index) => {
          const { date, time } = formatDateTime(space.scheduled)
          
          return (
            <div key={index} className="border border-border rounded-xl p-4">
              <h4 className="font-medium text-foreground mb-2">{space.title}</h4>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span>{date} at {time}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {space.participants} participants • Hosted by {space.host}
                </div>
                <button className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity focus-ring">
                  Set Reminder
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpacesPreview