const findClosestValue = (input: number, data: number[]) => {
  return data.reduce((closest, current) =>
    Math.abs(current - input) < Math.abs(closest - input) ? current : closest
  );
};

export default findClosestValue;
