import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SocialBar from "@/components/layout/social-bar";
import BlogSection from "@/components/sections/blog-section";

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <SocialBar />
      <main className="flex-1">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
