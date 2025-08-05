import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialBar from "@/components/layout/social-bar";
import TestimonialsSection from "@/components/sections/testimonials-section";

export default function TestimoniosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <SocialBar />
      <main className="flex-1">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
