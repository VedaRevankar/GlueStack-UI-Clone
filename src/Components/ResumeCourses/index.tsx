"use client";
import Container from "@/elements/container";
import CourseImage1 from "public/images/Images.png";
import CourseImage2 from "public/images/Image.png";
import CourseImage3 from "public/images/Image2.png";

import Text from "@/elements/Text";
import CourseCard from "./CourseCard";

interface ResumeCoursesProps {}

const ResumeCourses: React.FC<ResumeCoursesProps> = () => {
  return (
    <Container>
      <Text color="text-coolGray-800" size="text-md" className="font-bold">
        Resume your course
      </Text>
      <div className="flex justify-between mt-3 mb-5">
        <CourseCard
          courseImage={CourseImage1}
          courseName="Theory of relativity"
          chapterNumber={1}
        />
        <CourseCard
          courseImage={CourseImage2}
          courseName="Big Data Engineer Program"
          chapterNumber={5}
        />
        <CourseCard
          courseImage={CourseImage3}
          courseName="Data Scientist Program"
          chapterNumber={12}
        />
      </div>
    </Container>
  );
};

export default ResumeCourses;
