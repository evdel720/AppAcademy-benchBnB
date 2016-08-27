const fetchBenches = (filters, success) => {
  $.ajax({
    url: '/api/benches.json',
    type: 'GET',
    data: { bounds: filters },
    success,
    error: () => console.log('error')
  });
};

export { fetchBenches };
