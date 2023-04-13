export default function UserMain({ params }) {
  return (
    <div className="flex justify-center">
      <h1 className="text-white">{params.user}</h1>
    </div>
  )
}