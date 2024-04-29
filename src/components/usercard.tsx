type Data = {
  username: string;
};

const Usercard = ({ username }: Data) => {
  return (
    <div
      style={{
        width: "50%",
        height: "180px",
        border: "10px solid red",
      }}
    >
      <h1>{username}</h1>
    </div>
  );
};

export default Usercard;
