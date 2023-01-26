const requests = {
  fetchTrending: `/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
};

export default requests;
