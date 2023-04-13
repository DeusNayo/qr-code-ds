const ProfilePicture = ({ src }) => {
  return (
    <div className="w-32 h-32 rounded-full overflow-hidden">
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  )
}

export default ProfilePicture;