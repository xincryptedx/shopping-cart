/* eslint-disable react/prop-types */
function HelpModalContent({ setHelpModalOpen }) {
  return (
    <>
      <p>-Tap every card once.</p>
      <p>-Tap the same card twice and you lose!</p>
      <p>-New round starts when all cards tapped.</p>
      <button onClick={() => setHelpModalOpen(false)} autoFocus={true}>
        OK
      </button>
    </>
  );
}

export default HelpModalContent;
