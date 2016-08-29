const BenchConstants = {
  RECEIVE_BENCHES: "RECEIVE_BENCHES",
  REQUEST_BENCHES: "REQUEST_BENCHES",
  CREATE_BENCH: "CREATE_BENCH",
  RECEIVE_BENCHE: "RECEIVE_BENCHE"
};

const createBench = (bench) => ({
  type: BenchConstants.CREATE_BENCH,
  bench
});

const receiveBench = (bench) => ({
  type: BenchConstants.RECEIVE_BENCHE,
  bench
});

const receiveBenches = (benches) => ({
  type: BenchConstants.RECEIVE_BENCHES,
  benches
});

const requestBenches = () => ({
  type: BenchConstants.REQUEST_BENCHES
});

export { BenchConstants, receiveBenches, requestBenches,
  createBench, receiveBench };
