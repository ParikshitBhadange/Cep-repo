import { CheckCircle } from 'lucide-react'

const Toast = ({ message }) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-card border border-border rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 max-w-sm">
        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
        <p className="text-sm font-medium text-foreground">{message}</p>
      </div>
    </div>
  )
}

export default Toast