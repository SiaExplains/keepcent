import Navigation from "../Navigation/Navigation";
import ContentContainer from "./ContentContainer";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <div className="et-app">
      <Header />
      <Navigation />
      <div className="et-body" id="et-body">
        <div className="et-body__center">
          <ContentContainer>{children}</ContentContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
