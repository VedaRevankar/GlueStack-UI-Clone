import Image from "next/image";
import Banner from "@/Components/Banner";
import ResumeCourses from "@/Components/ResumeCourses";
import Categories from "@/Components/Categories";
import TrendingCourses from "@/Components/TrendingCourses";

export default function home() {
  return (
    <>
      <Banner />
      <div className="rounded-md bg-white mt-6">
        <ResumeCourses />
        <hr className="bg-coolGray-200" />
        <Categories />
        <hr className="bg-coolGray-200" />
        <TrendingCourses />
      </div>
    </>
  );
}
