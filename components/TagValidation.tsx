interface TagValidationProps {
  job: ('Developers' | 'Designers')[]
  title: string
  subtitle: string
}

export function TagValidation({ job, title, subtitle }: TagValidationProps) {
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {job.map((j, index) => (
          <div
            key={index}
            className={`inline-flex px-2 py-0.5 rounded justify-center items-center ${
              j === 'Developers'
                ? 'bg-red-50 text-red-800'
                : 'bg-green-50 text-green-800'
            } font-normal text-sm`}
          >
            {j}
          </div>
        ))}
      </div>
      <p className="text-3xl mt-3 font-bold text-black">{title}</p>
      <p className="text-grey-500 mt-2">{subtitle}</p>
    </div>
  )
}
