import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Banner from './AboveFold';
import About from './About';
// import Download from './Download';
import Team from './Team';
// import Sponsors from './Sponsors';
import Footer from './Footer';
import '../static/style';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Header key="header" />
        <div className="home-page">
          <Banner key="abovefold" />
          <About key="about" />
          <Team key="team" />
          <DocumentTitle title="Lazzzy App - Embrace the Lazzzy You" />
        </div>
        <Footer key="footer" />
      </div>
    );
  }
}
export default Home;
