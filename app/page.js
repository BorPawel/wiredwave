import AudioGallery from "@/components/AudioGallery/AudioGallery";
import IntersectionHeader from "@/components/IntersectionHeader/IntersectionHeader";
import ZoomParallax from "@/components/ZoomParallax/ZoomParallax";
import Banner from "@/components/banner/Banner";
import CategoriesHomepage from "@/components/categoriesHomepage/CategoriesHomepage";
import SaleBanner from "@/components/saleBanner/SaleBanner";

export default async function Home() {
  return (
    <main className="m-auto w-full flex flex-col justify-center items-center ">
      <Banner />

      <CategoriesHomepage />
      <IntersectionHeader />
      <ZoomParallax />
      {/* <AudioGallery /> */}
      <SaleBanner />
    </main>
  );
}
