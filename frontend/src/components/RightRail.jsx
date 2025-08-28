import ProfileSummaryMini from './ProfileSummaryMini'
import PeopleAlsoViewed from './PeopleAlsoViewed'
import ListsPreview from './ListsPreview'
import SpacesPreview from './SpacesPreview'
import MutualFollowersRow from './MutualFollowersRow'

const RightRail = ({ profile }) => {
  return (
    <div className="space-y-6">
      {/* Mini Profile Summary */}
      <ProfileSummaryMini profile={profile} />
      
      {/* Mutual Connections */}
      <MutualFollowersRow mutuals={profile.mutuals} />
      
      {/* Lists */}
      <ListsPreview lists={profile.lists} />
      
      {/* Spaces */}
      <SpacesPreview spaces={profile.spaces} />
      
      {/* People Also Viewed */}
      <PeopleAlsoViewed />
    </div>
  )
}

export default RightRail