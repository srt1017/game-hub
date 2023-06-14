import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../entities/Platform";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <>
      <HStack
        flexWrap="wrap"
        display="flex"
        justify="space-between"
        marginY={5}
      >
        {platforms.map((platform) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            boxSize="1em"
            color="gray.500"
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
