
import AudioGallery from "@/components/AudioGallery/AudioGallery";
import IntersectionHeader from "@/components/IntersectionHeader/IntersectionHeader";
import Banner from "@/components/banner/Banner";
import CategoriesHomepage from "@/components/categoriesHomepage/CategoriesHomepage";
import SaleBanner from "@/components/saleBanner/SaleBanner";



export default async function Home() {


  return (
    <main className="m-auto w-full">
      <Banner/>
      <CategoriesHomepage/>
      <IntersectionHeader/>
      <AudioGallery />
      <SaleBanner  />
    </main>
  );
}
