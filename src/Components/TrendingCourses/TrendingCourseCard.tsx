import Image from "next/image";
// import Text from "@/elements/Text";

interface TrendingCourseCardProps {
  courseImage: any;
  // chapterNumber: number;
  // courseName: string;
}

const TrendingCourseCard: React.FC<TrendingCourseCardProps> = ({
  courseImage,
  // chapterNumber,
  // courseName,
}) => {
  return (
    <div className="bg-coolGray-100">
      <Image src={courseImage} alt={courseImage} className="rounded-lg" />
    </div>
  );
};

export default TrendingCourseCard;
