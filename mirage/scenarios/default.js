export default function(server) {

  server.loadFixtures();

  server.createList('feedback', 20);
}
