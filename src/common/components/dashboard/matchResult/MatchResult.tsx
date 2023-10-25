import FormationSection from './components/FormationSection';

function MatchResult() {
  return (
    <div className="grid grid-cols-12 gap-1">
      {/* left section */}
      <div className="col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 mt-1">
        <FormationSection />
      </div>
    </div>
  );
}

export default MatchResult;
