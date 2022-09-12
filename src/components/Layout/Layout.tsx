//import useSWR from 'swr'
import { GlobalProvider } from '../../context/GlobalState';
import Navigation from '../Navigation/Navigation';
import ContentContainer from './ContentContainer';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: any) {
  // const { data, error } = useSWR('/api/navigation', fetcher)
  //  if (error) return <div>Failed to load</div>
  //  if (!data) return <div>Loading...</div>

  return (
    <GlobalProvider>
      <div className="et-app">
        <Header />
        <Navigation />
        <div className="et-body" id="et-body">
          <div className="et-body__center">
            {/* <Sidebar /> */}
            <ContentContainer>{children}</ContentContainer>
          </div>
        </div>
        <Footer />
      </div>
    </GlobalProvider>
  );
}
