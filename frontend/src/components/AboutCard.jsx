import InterestsGrid from './InterestsGrid'

const AboutCard = ({ bio, interests }) => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
      
      <div className="space-y-6">
        <div>
          <p className="text-foreground leading-relaxed">{bio}</p>
        </div>

        {interests && interests.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Interests</h3>
            <InterestsGrid interests={interests} />
          </div>
        )}
      </div>
    </div>
  )
}

export default AboutCard