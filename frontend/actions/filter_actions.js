
const FilterConstants = {
  UPDATE_BOUNDS: "UPDATE_BOUNDS",
  UPDATE_FILTER: "UPDATE_FILTER"
};

const updateBounds = (bounds) => ({
  type: FilterConstants.UPDATE_BOUNDS,
  bounds
});

const updateFilter = (filter, value) => ({
  type: FilterConstants.UPDATE_FILTER,
  filter,
  value
});

export { FilterConstants, updateBounds, updateFilter };
