import Textbox from "@/app/components/Textbox"
import ProfilePicture from "@/app/components/ProfilePicture"
import Banner from "@/app/components/Banner";

//<ProfilePicture src={userProfilePic}/>
export default function UserMain({ params }) {
  const userProfilePic = "/logo.png";
  const images = [
    { src: 'https://picsum.photos/id/1018/1000/600', alt: 'Image 1' },
    { src: 'https://picsum.photos/id/1015/1000/600', alt: 'Image 2' },
    { src: 'https://picsum.photos/id/1019/1000/600', alt: 'Image 3' },
  ];
  return (
    <div>
      <div  className="flex justify-center">
        
        <Banner images={images}/>
      </div>
      <h1 className="text-white">{params.user}</h1>
      <Textbox />
    </div>
  )
}