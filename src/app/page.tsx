import Banner from "@/Components/HomePage/Banner";
import ResumeCourses from "@/Components/HomePage/ResumeCourses";
import Categories from "@/Components/HomePage/Categories";
import TrendingCourses from "@/Components/HomePage/TrendingCourses";

export default function Home() {
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
