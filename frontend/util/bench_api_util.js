const fetchBenches = (success) => {
  $.ajax({
    url: '/api/benches.json',
    type: 'GET',
    success,
    error: () => console.log('error')
  });
};

export { fetchBenches };
