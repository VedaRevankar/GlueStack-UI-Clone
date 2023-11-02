import Image from "next/image";
import RootLayout from "./layout";
import Banner from "@/Components/Banner";
import ResumeCourses from "@/Components/ResumeCourses";

export default function Home() {
  return (
    <>
      <Banner />
      <ResumeCourses />
    </>
  );
}
