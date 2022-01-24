
const TeamBarHeader = () => {
  const teamOptionEvent = () => {
    alert('option event!');
  };
  return (
    <div className="team-header">
      Betti!
      <img
        className="option-icon"
        src="assets/option.png"
        onClick={teamOptionEvent}
      />
    </div>
  );
};

export default TeamBarHeader;
