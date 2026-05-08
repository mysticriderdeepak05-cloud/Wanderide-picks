import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { VehicleSections } from "@/components/site/VehicleSections";
import { ProductsSection } from "@/components/site/ProductsSection";
import { Categories } from "@/components/site/Categories";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { BuyingGuide } from "@/components/site/BuyingGuide";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { DisclosureBar } from "@/components/site/Disclosure";

const Index = () => (
  <div className="min-h-screen bg-background">
    <DisclosureBar />
    <Header />
    <main>
      <Hero />
      <ProductsSection />
      <VehicleSections />
      <Categories />
      <ComparisonTable />
      <BuyingGuide />
      <FAQ />
    </main>
    <Footer />
  </div>
);

export default Index;
