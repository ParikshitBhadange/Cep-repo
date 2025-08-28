import { Award, Plus } from 'lucide-react'

const SkillsEndorsements = ({ skills }) => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Award className="w-5 h-5" />
        Skills & Endorsements
      </h2>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-foreground">{skill.name}</h3>
              <button className="p-1 rounded-full hover:bg-muted transition-colors focus-ring">
                <Plus className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(skill.endorsements / 100 * 100, 100)}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground font-medium">
                {skill.endorsements}
              </span>
            </div>
            
            {skill.endorsements > 0 && (
              <p className="text-xs text-muted-foreground mt-1">
                {skill.endorsements} {skill.endorsements === 1 ? 'endorsement' : 'endorsements'}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsEndorsements