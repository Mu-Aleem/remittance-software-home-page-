import Navbar from './components/layout/Navbar';
import PartnerLogos from './features/partners/PartnerLogos';
import WorkingProcess from './features/process/WorkingProcess';
import TeamSection from './features/team/TeamSection';

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <WorkingProcess />
          <TeamSection />
          <PartnerLogos />
        </main>
      </div>
    </>
  );
}

export default App;
