const TEST_KEY = "f95bcb11ec0493840d69f8825a34686a";

const requests = {
  // fetchTrending: `/trending/all/week?api_key=${TEST_KEY}&language=en-USlanguage=en-US&page=1`,
  fetchTrending: `/popular?api_key=${TEST_KEY}&language=en-USlanguage=en-US&page=1`,
  // fetchTrending: `/trending/all/day?api_key=${TEST_KEY}&language=en-USlanguage=en-US&page=1`,
};

export default requests;
