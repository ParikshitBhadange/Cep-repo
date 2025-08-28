import { CheckCircle } from 'lucide-react'

const VerifiedBadge = () => {
  return (
    <CheckCircle 
      className="w-5 h-5 text-blue-500 fill-current" 
      aria-label="Verified account"
    />
  )
}

export default VerifiedBadge