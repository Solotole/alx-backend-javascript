class AppController {
  static getHomepage(request, response) {
    response.statusCode(200).end('Hello Holberton School!');
}
export default AppController;
