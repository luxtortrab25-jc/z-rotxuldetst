import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialBar from "@/components/layout/social-bar";
import GallerySection from "@/components/sections/gallery-section";

export default function GaleriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <SocialBar />
      <main className="flex-1">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
