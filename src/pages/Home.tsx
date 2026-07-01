import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import LiveBracket from "../components/LiveBracket";
import UpcomingEvents from "../components/UpcomingEvents";
import PastResults from "../components/PastResults";
import UserJourney from "../components/UserJourney";
import AboutBotLeague from "../components/AboutBotLeague";
import SportsPage from "../components/SportsPage";
import RegisterAdvantage from "../components/RegisterAdvantage";
import JoinEcosystem from "../components/JoinEcosystem";
import Footer from "../components/Footer";

export default function Home(){

return(

<div className="bg-black text-white">

<Navbar/>

<HeroSection/>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 py-8 max-w-6xl mx-auto">

<LiveBracket/>

<UpcomingEvents/>

<PastResults/>

</div>

<UserJourney/>

<AboutBotLeague/>

<SportsPage/>

<RegisterAdvantage/>

<JoinEcosystem/>

<Footer/>

</div>

)

}