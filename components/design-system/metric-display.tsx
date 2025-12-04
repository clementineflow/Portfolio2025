interface MetricDisplayProps {
  value: string
  label: string
  description: string
  subtitle?: string
  className?: string
}

export function MetricDisplay({ value, label, description, subtitle, className = "" }: MetricDisplayProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-black mb-4 text-2xl font-semibold">{value}</div>
      <div className="text-gray-800 mb-2">{label}</div>
      <div className="text-gray-600 mb-1">{description}</div>
      {subtitle && <div className="text-sm text-gray-500 font-light">{subtitle}</div>}
    </div>
  )
}
