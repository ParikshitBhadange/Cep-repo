import { useState, useEffect } from 'react'
import PinnedPost from './PinnedPost'
import PostCard from './PostCard'
import AboutCard from './AboutCard'
import ExperienceList from './ExperienceList'
import EducationList from './EducationList'
import SkillsEndorsements from './SkillsEndorsements'
import FeaturedCarousel from './FeaturedCarousel'
import RecommendationsList from './RecommendationsList'
import OwnerInsights from './OwnerInsights'

const ProfileTabs = ({ profile, activeTab, setActiveTab, isOwner, showToast }) => {
  const [posts, setPosts] = useState(profile.posts || [])
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const tabs = [
    { id: 'posts', label: 'Posts', count: posts.length },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'media', label: 'Media', count: posts.filter(p => p.type === 'image').length },
    { id: 'likes', label: 'Likes', count: profile.likedPosts?.length || 0 }
  ]

  const loadMorePosts = () => {
    if (loading || !hasMore) return
    
    setLoading(true)
    // Simulate loading more posts
    setTimeout(() => {
      const morePosts = [...posts, ...profile.posts] // Duplicate for demo
      setPosts(morePosts)
      setLoading(false)
      if (morePosts.length > 20) setHasMore(false)
    }, 1000)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (activeTab === 'posts' && 
          window.innerHeight + document.documentElement.scrollTop 
          >= document.documentElement.offsetHeight - 1000) {
        loadMorePosts()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeTab, loading, hasMore])

  const handlePostAction = (postId, action) => {
    setPosts(prevPosts => 
      prevPosts.map(post => {
        if (post.id === postId) {
          switch (action) {
            case 'like':
              return {
                ...post,
                isLiked: !post.isLiked,
                likes: post.isLiked ? post.likes - 1 : post.likes + 1
              }
            case 'repost':
              return {
                ...post,
                isReposted: !post.isReposted,
                reposts: post.isReposted ? post.reposts - 1 : post.reposts + 1
              }
            default:
              return post
          }
        }
        return post
      })
    )
    showToast(`Post ${action}${action === 'like' ? 'd' : 'ed'}!`)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return (
          <div className="space-y-6">
            {/* Pinned Post */}
            {profile.pinnedPostId && (
              <PinnedPost
                post={posts.find(p => p.id === profile.pinnedPostId)}
                onAction={handlePostAction}
              />
            )}

            {/* Owner Analytics */}
            {isOwner && <OwnerInsights />}

            {/* Regular Posts */}
            {posts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                onAction={handlePostAction}
              />
            ))}

            {/* Load More */}
            {loading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              </div>
            )}
          </div>
        )

      case 'about':
        return (
          <div className="space-y-6">
            <AboutCard bio={profile.bio} interests={profile.interests} />
            <FeaturedCarousel featured={profile.featured} posts={posts} />
            <RecommendationsList recommendations={profile.recommendations} />
          </div>
        )

      case 'experience':
        return (
          <div className="space-y-6">
            <ExperienceList experience={profile.experience} />
            <EducationList education={profile.education} />
            <SkillsEndorsements skills={profile.skills} />
          </div>
        )

      case 'media':
        const mediaPosts = posts.filter(post => post.type === 'image')
        return (
          <div className="space-y-6">
            {mediaPosts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                onAction={handlePostAction}
              />
            ))}
            {mediaPosts.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                No media posts yet
              </div>
            )}
          </div>
        )

      case 'likes':
        return (
          <div className="space-y-6">
            {profile.likedPosts?.map(post => (
              <PostCard
                key={post.id}
                post={post}
                onAction={handlePostAction}
                showAuthor
              />
            )) || (
              <div className="text-center py-12 text-muted-foreground">
                No liked posts yet
              </div>
            )}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div>
      {/* Tab Navigation */}
      <div className="border-b border-border mb-6">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors focus-ring rounded-t ${
                activeTab === tab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-2 text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {renderTabContent()}
      </div>
    </div>
  )
}

export default ProfileTabs