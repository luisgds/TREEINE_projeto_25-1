import { Footer } from "../_components/footer";
import { NavBar } from "../_components/navbar";
import { LoginCard } from "../_components/login/loginCard";
import { LoginInfo } from "../_components/login/loginInfoText";
import { ExploreSection } from "../_components/login/loginExploreText";
import { AboutSection } from "../_components/login/aboutUs";

export default function LoginPage() {
  return (
    <main className="bg-purple-50 overflow-x-hidden">
      <NavBar />
      <div className="px-4 py-20">
        <LoginInfo />
        <div className="mb-24 flex justify-center">
          <LoginCard />
        </div>
        <ExploreSection />
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
