import AudioGallery from "@/components/AudioGallery/AudioGallery";
import IntersectionHeader from "@/components/IntersectionHeader/IntersectionHeader";
import Banner from "@/components/banner/Banner";
import CategoriesHomepage from "@/components/categoriesHomepage/CategoriesHomepage";
import SaleBanner from "@/components/saleBanner/SaleBanner";
import { getData } from "@/lib/getData/getData";


export default async function Home() {
  const data = await getData('banner', 'product', 'sale');
 
  
  return (
    <main className="m-auto w-full max-w-[1600px]">
      <Banner banner={data.banner && data.banner[0]} />
      <CategoriesHomepage products={data.product && data.product} />
      <IntersectionHeader/>
      <AudioGallery products={data.product} />
      <SaleBanner sale={data.sale && data.sale} />
    </main>
  );
}
