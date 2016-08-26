const selectBenches = (benches) => {
  return Object.keys(benches).map((id) => (benches[id]));
};

export { selectBenches };
