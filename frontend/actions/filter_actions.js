
const FilterConstants = {
  UPDATE_BOUNDS: "UPDATE_BOUNDS"
};

const updateBounds = (bounds) => ({
  type: FilterConstants.UPDATE_BOUNDS,
  bounds
});

export { FilterConstants, updateBounds };
