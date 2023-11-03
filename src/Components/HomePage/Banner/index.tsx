"use client";
import Container from "@/elements/container";
import Image from "next/image";
import BannerImage from "/public/images/illustration.png";

import { Icon } from "@iconify/react";

import Text from "@/elements/Text";
import Heading from "@/elements/Heading";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="rounded-md bg-primary-900">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <Icon
              icon={"teenyicons:arrow-left-solid"}
              height={24}
              width={24}
              className="text-white"
            />
            <div className="pt-8">
              <Heading priority="3" color="text-white">
                Welcome John
              </Heading>
              <Text
                color="text-primary-300"
                size="text-md"
                className="max-w-[291px] w-full pt-2 pb-8"
              >
                Choose a goal and start learning from Top Educators
              </Text>
            </div>
          </div>
          <Image src={BannerImage} alt="banner-image" className="pb-1" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
