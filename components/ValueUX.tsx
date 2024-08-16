interface CardValueUXProps {
  imageCover: string
  title: string
  description: string
}

export function CardValueUX({
  imageCover,
  title,
  description,
}: CardValueUXProps) {
  return (
    <div>
      <img src={imageCover} alt="" />
      <h4 className="text-lg font-bold mt-5 text-grey-900">{title}</h4>
      <p className="text-base font-normal text-grey-500 mt-1">{description}</p>
    </div>
  )
}
