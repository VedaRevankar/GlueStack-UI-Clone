import Text from "@/elements/Text";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface CategoryProps {
  categoryIcon: any;
  categoryName: string;
}

const Category: React.FC<CategoryProps> = ({ categoryIcon, categoryName }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-primary-900 bg-primary-100 rounded-full p-4">
        <Icon icon={categoryIcon} height={24} width={24} />
      </div>
      <Link href="/home">
        <Text
          color="text-coolGray"
          size="text-sm"
          className="pt-2"
          align="center"
        >
          {categoryName}
        </Text>
      </Link>
    </div>
  );
};

export default Category;
