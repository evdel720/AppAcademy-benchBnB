const BenchConstants = {
  RECEIVE_BENCHES: "RECEIVE_BENCHES",
  REQUEST_BENCHES: "REQUEST_BENCHES"
};

const receiveBenches = (benches) => ({
  type: BenchConstants.RECEIVE_BENCHES,
  benches
});

const requestBenches = () => ({
  type: BenchConstants.REQUEST_BENCHES
});

export { BenchConstants, receiveBenches, requestBenches };
