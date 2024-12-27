import imageUrl from './src/Profile.jpg'
function ProfilePicture(){

    imageUrl='Profile.jpg';
    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture;
