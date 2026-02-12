const IndexPage = () => {
  return (
    <div>
      {new Array(1000).fill("").map(() => (
        <div>index</div>
      ))}
    </div>
  );
};

export default IndexPage;
