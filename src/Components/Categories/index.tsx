"use client";
import Container from "@/elements/container";
import Image from "next/image";

import { Icon } from "@iconify/react";

import Text from "@/elements/Text";
import Heading from "@/elements/Heading";

interface ResumeCoursesProps {}

const ResumeCourses: React.FC<ResumeCoursesProps> = () => {
  return (
    <div className="bg-white mt-6 pb-5 border-b border-gray-200 ">
      <Container>
        <Text color="text-coolGray-800" size="text-md" className="font-bold">
          Categories
        </Text>
        <div className="flex justify-between mt-3 gap-8"></div>
      </Container>
    </div>
  );
};

export default ResumeCourses;
