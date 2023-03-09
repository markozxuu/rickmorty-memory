interface CongratsMessageProps {
  turns: number;
}

const CongratsMessage = ({ turns }: CongratsMessageProps) => {
  console.log(turns);
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: 'blue',
      }}
    >
      <h1>felcidades</h1>
    </section>
  );
};

export default CongratsMessage;
