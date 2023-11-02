import Image from "next/image";
import Text from "@/elements/Text";

interface CourseCardProps {
  categoryIcon: any;
  categoryName: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  categoryIcon,
  categoryName,
}) => {
  return (
    <div className="">
      <Image src={categoryIcon} alt={categoryName} className="rounded-lg" />
      <Text color="text-coolGray" size="text-sm" className="font-bold pt-2">
        {categoryName}
      </Text>
    </div>
  );
};

export default CourseCard;
