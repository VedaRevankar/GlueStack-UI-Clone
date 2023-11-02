import Image from "next/image";
import Text from "@/elements/Text";

import PlayButton from "public/images/IconButton.png";
import Avatargroup from "public/images/Avatargroup.png";

interface CourseCardProps {
  courseImage: any;
  chapterNumber: number;
  courseName: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  courseImage,
  chapterNumber,
  courseName,
}) => {
  return (
    <div className="rounded-lg bg-coolGray-100 mb-5">
      <Image src={courseImage} alt={courseName} className="rounded-lg" />

      <div className="flex items-start justify-between p-3">
        <div>
          <Text color="text-coolGray-800" size="text-xs">
            Chapter {chapterNumber}
          </Text>
          <Text
            color="text-coolGray-800"
            size="text-sm"
            className="font-bold pt-1"
          >
            {courseName}
          </Text>

          <div className="flex items-center pt-2 gap-1">
            <Text color="text-coolGray-800" size="text-xs">
              Active Users
            </Text>
            <Image src={Avatargroup} alt="Avatargroup" />
          </div>
        </div>

        <button>
          <Image src={PlayButton} alt="PlayButton" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
