"use client";
import Container from "@/elements/container";
import Text from "@/elements/Text";
import Category from "./Category";

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div className="bg-white">
      <Container>
        <Text color="text-coolGray-800" size="text-md" className="font-bold">
          Categories
        </Text>
        <div className="flex mt-4 gap-8 mb-5">
          <Category categoryIcon={"ic:baseline-plus"} categoryName="Maths" />
          <Category categoryIcon={"ion:bulb-outline"} categoryName="Physics" />
          <Category
            categoryIcon={"mingcute:flask-line"}
            categoryName="Chemistry"
          />
          <Category
            categoryIcon={"material-symbols:coronavirus"}
            categoryName="Biology"
          />
          <Category categoryIcon={"mdi:tennis-ball"} categoryName="Sports" />
          <Category
            categoryIcon={"ic:round-psychology"}
            categoryName="Psychology"
          />
          <Category
            categoryIcon={"ic:baseline-business-center"}
            categoryName="Business"
          />
          <Category categoryIcon={"ri:more-2-fill"} categoryName="More" />
        </div>
      </Container>
    </div>
  );
};

export default Categories;
