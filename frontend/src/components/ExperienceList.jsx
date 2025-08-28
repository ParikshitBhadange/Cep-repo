import { Briefcase } from 'lucide-react'

const ExperienceList = ({ experience }) => {
  const formatDateRange = (start, end) => {
    const startDate = new Date(start)
    const endDate = end ? new Date(end) : null
    
    const formatMonth = (date) => 
      date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    
    return `${formatMonth(startDate)} - ${endDate ? formatMonth(endDate) : 'Present'}`
  }

  const calculateDuration = (start, end) => {
    const startDate = new Date(start)
    const endDate = end ? new Date(end) : new Date()
    
    const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                        (endDate.getMonth() - startDate.getMonth())
    
    if (diffInMonths < 12) {
      return `${diffInMonths} ${diffInMonths === 1 ? 'month' : 'months'}`
    }
    
    const years = Math.floor(diffInMonths / 12)
    const months = diffInMonths % 12
    
    let duration = `${years} ${years === 1 ? 'year' : 'years'}`
    if (months > 0) {
      duration += ` ${months} ${months === 1 ? 'month' : 'months'}`
    }
    
    return duration
  }

  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Briefcase className="w-5 h-5" />
        Experience
      </h2>
      
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="flex gap-4">
            {exp.logo && (
              <div className="w-12 h-12 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{exp.role}</h3>
              <p className="text-muted-foreground font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-2">
                {formatDateRange(exp.start, exp.end)} · {calculateDuration(exp.start, exp.end)}
              </p>
              {exp.desc && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceList