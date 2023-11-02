import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";
import Logo from "/public/images/logo.png";
import Link from "next/link";

import UserImage from "../UserImage/index";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className="flex px-8 py-3 justify-between items-center">
        <div className="flex gap-3">
          <button>
            <MenuIcon />
          </button>
          <Link href="/home">
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-5 text-coolGray-400 items-center text-2xl">
          <NotificationsNoneIcon />
          <SearchIcon />
          <UserImage height={32} width={32} />
        </div>
      </div>
    </header>
  );
};

export default Header;
