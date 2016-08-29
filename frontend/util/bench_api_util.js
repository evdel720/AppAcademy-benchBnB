const fetchBenches = (filters, success) => {
  $.ajax({
    url: '/api/benches.json',
    type: 'GET',
    data: filters,
    success
  });
};

const createBench = (bench, success, errors) => {
  $.ajax({
    url: '/api/benches.json',
    type: 'POST',
    data: {bench: bench},
    success,
    errors
  });
};

export { fetchBenches, createBench };
