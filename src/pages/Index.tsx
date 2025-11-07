import HeroSlideshow from "@/components/HeroSlideshow";
import QuickServices from "@/components/QuickServices";
import Announcements from "@/components/Announcements";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSlideshow />
      <QuickServices />
      <Announcements />
    </div>
  );
};

export default Index;
