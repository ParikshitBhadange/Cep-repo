import { GraduationCap } from 'lucide-react'

const EducationList = ({ education }) => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <GraduationCap className="w-5 h-5" />
        Education
      </h2>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4">
            {edu.logo && (
              <div className="w-12 h-12 rounded-lg bg-muted flex-shrink-0 overflow-hidden">
                <img
                  src={edu.logo}
                  alt={`${edu.school} logo`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{edu.school}</h3>
              <p className="text-muted-foreground font-medium">{edu.degree}</p>
              <p className="text-sm text-muted-foreground">
                {edu.start} - {edu.end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationList