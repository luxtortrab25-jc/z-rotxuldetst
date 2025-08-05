import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialBar from "@/components/layout/social-bar";
import ServicesSection from "@/components/sections/services-section";

export default function ServiciosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <SocialBar />
      <main className="flex-1">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
