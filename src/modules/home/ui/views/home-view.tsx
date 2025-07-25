import {
  PageTransitionContainer,
  PageTransitionItem,
} from "@/components/page-transition";
import { CitySetsSection } from "../sections/city-sets-section";
import ProfileCard from "@/modules/home/ui/components/profile-card";
import LatestTravelCard from "@/modules/home/ui/components/latest-travel-card";
import Footer from "@/modules/home/ui/components/footer";
import { ImageSliderSection } from "../sections/image-slider-section";

interface Props {
  photos: string[]; // 🔸 Bu satırı ekle
}

export const HomeView = ({ photos }: Props) => {
  return (
    <PageTransitionContainer className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* LEFT CONTENT - Fixed */}
      <PageTransitionItem className="w-full lg:w-1/2 h-[70vh] lg:fixed lg:top-0 lg:left-0 lg:h-screen p-0 lg:p-3 rounded-xl">
        <ImageSliderSection photos={photos} /> {/* 🔸 buraya gönder */}
      </PageTransitionItem>

      {/* Spacer for fixed left content */}
      <div className="hidden lg:block lg:w-1/2" />

      {/* RIGHT CONTENT - Scrollable */}
      <PageTransitionContainer className="w-full mt-3 lg:mt-0 lg:w-1/2 space-y-3 pb-3">
        <PageTransitionItem>
          <ProfileCard />
        </PageTransitionItem>

        <PageTransitionItem>
          <LatestTravelCard />
        </PageTransitionItem>

        <PageTransitionItem>
          <CitySetsSection />
        </PageTransitionItem>

        <PageTransitionItem>
          <Footer />
        </PageTransitionItem>
      </PageTransitionContainer>
    </PageTransitionContainer>
  );
};
