"use client";
import Container from "@/elements/container";
import CourseImage1 from "public/images/Images.png";
import CourseImage2 from "public/images/Image.png";
import CourseImage3 from "public/images/Image2.png";

import Text from "@/elements/Text";
import TrendingCourseCard from "./TrendingCourseCard";

interface TrendingCoursesProps {}

const TrendingCourses: React.FC<TrendingCoursesProps> = () => {
  return (
    <Container>
      <Text color="text-coolGray-800" size="text-md" className="font-bold">
        Trending Courses
      </Text>
      <div className="flex gap-4 mt-3 mb-5">
        <TrendingCourseCard courseImage={CourseImage1} />
        <TrendingCourseCard courseImage={CourseImage2} />
        <TrendingCourseCard courseImage={CourseImage3} />
        <TrendingCourseCard courseImage={CourseImage3} />
        <TrendingCourseCard courseImage={CourseImage3} />
      </div>
    </Container>
  );
};

export default TrendingCourses;
