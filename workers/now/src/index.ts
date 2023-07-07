export default {
  async fetch(request: Request) {
    return new Response(new Date().toString());
  },
};
