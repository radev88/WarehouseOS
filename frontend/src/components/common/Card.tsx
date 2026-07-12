type CardProps = {
  title?: string
  children: React.ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-xl border bg-white shadow-sm p-6">
      {title && (
        <h2 className="mb-4 text-lg font-semibold">
          {title}
        </h2>
      )}

      {children}
    </div>
  )
}

export default Card