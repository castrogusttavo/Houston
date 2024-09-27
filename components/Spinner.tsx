export function Spinner() {
  return (
    <div className="flex items-center justify-center h-4 w-4">
      <svg className="animate-spin w-16 h-16" viewBox="0 0 50 50">
        <circle
          className="stroke-current text-gray-500"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="150"
          strokeDashoffset="40"
        />
      </svg>
    </div>
  )
}
