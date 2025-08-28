import { useState, useEffect } from 'react'
import LayoutShell from './components/LayoutShell'
import ProfileHeader from './components/ProfileHeader'
import ProfileTabs from './components/ProfileTabs'
import RightRail from './components/RightRail'
import DarkModeToggle from './components/DarkModeToggle'
import Toast from './components/Toast'
import Skeleton from './components/Skeleton'
import profileData from './data/profile.json'

function App() {
  const [profile, setProfile] = useState(null)
  const [activeTab, setActiveTab] = useState('posts')
  const [isOwner, setIsOwner] = useState(true)
  const [toastMessage, setToastMessage] = useState('')
  const [followState, setFollowState] = useState({
    isFollowing: false,
    isConnected: false,
    hasSentMessage: false
  })
  const [loading, setLoading] = useState(true)

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setProfile(profileData)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => setToastMessage(''), 3000)
  }

  const handleFollow = () => {
    setFollowState(prev => ({
      ...prev,
      isFollowing: !prev.isFollowing
    }))
    showToast(followState.isFollowing ? 'Unfollowed' : 'Following!')
  }

  const handleConnect = () => {
    setFollowState(prev => ({
      ...prev,
      isConnected: !prev.isConnected
    }))
    showToast(followState.isConnected ? 'Connection removed' : 'Connection request sent!')
  }

  const handleMessage = () => {
    setFollowState(prev => ({
      ...prev,
      hasSentMessage: true
    }))
    showToast('Message sent!')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <LayoutShell>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-64 w-full rounded-2xl mb-6" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Skeleton className="h-32 w-full rounded-2xl" />
                <Skeleton className="h-48 w-full rounded-2xl" />
                <Skeleton className="h-48 w-full rounded-2xl" />
              </div>
              <div className="space-y-6">
                <Skeleton className="h-40 w-full rounded-2xl" />
                <Skeleton className="h-40 w-full rounded-2xl" />
              </div>
            </div>
          </div>
        </LayoutShell>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <LayoutShell>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dark mode toggle - fixed position */}
          <div className="fixed top-4 right-4 z-50">
            <DarkModeToggle />
          </div>

          {/* Profile Header */}
          <ProfileHeader 
            profile={profile}
            isOwner={isOwner}
            followState={followState}
            onFollow={handleFollow}
            onConnect={handleConnect}
            onMessage={handleMessage}
          />

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left/Main Content */}
            <div className="lg:col-span-2">
              <ProfileTabs 
                profile={profile}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isOwner={isOwner}
                showToast={showToast}
              />
            </div>

            {/* Right Rail */}
            <div className="lg:col-span-1">
              <RightRail profile={profile} />
            </div>
          </div>
        </div>

        {/* Toast Notifications */}
        {toastMessage && <Toast message={toastMessage} />}
      </LayoutShell>
    </div>
  )
}

export default App