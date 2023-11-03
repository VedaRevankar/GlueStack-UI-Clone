"use client";
import Image from "next/image";
import Pencil from "/public/images/20_20.png";
import UserImage from "../UserImage";
import Text from "@/elements/Text";

const UserInfo: React.FC = () => {
  return (
    <div className="pt-10 pb-4 flex flex-col items-center border-b border-gray-200 px-[84px]">
      <UserImage width={140} height={140} />
      <div className="flex items-center justify-center gap-2 pt-3">
        <Text
          color="text-coolGray-800"
          size="lg"
          font=""
          align="center"
          className="font-bold"
        >
          Jane Doe
        </Text>
        <Image src={Pencil} alt="pencil" />
      </div>
      <Text
        color="text-coolGray"
        size="sm"
        font=""
        align="center"
        className="pt-1"
      >
        janedoe2@mydomain.com
      </Text>
    </div>
  );
};

export default UserInfo;
