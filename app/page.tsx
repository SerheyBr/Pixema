import Image from "next/image";
import SortingBtn from "@/components/SortingBtn";
import UserLogo from "@/components/UserLogo";
import SearchInput from "@/components/SearchInput";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <SortingBtn text={"Button"} />
      <UserLogo img={"image"} email={"email"} />
      <SearchInput />
      <Card
        img={"img"}
        title={"film-title"}
        rating={"5,5"}
        gengres={"horror, triller, navel"}
      />
    </div>
  );
}
