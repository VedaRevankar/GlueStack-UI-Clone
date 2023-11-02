import Image from "next/image";
import userIcon from "/public/images/user-image.jpeg";

interface userImageProps {
  width?: number;
  height?: number;
}

const UserImage: React.FC<userImageProps> = ({ width, height }) => {
  return (
    <Image
      className="rounded-full overflow-hidden"
      src={userIcon}
      width={width}
      height={height}
      alt="User Image"
      objectFit="cover"
    />
  );
};

export default UserImage;
