/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.savePokemon = (req, res) => {
  let message = req.body || 'Pokemon não encontrado!';
  res.status(200).send(message);
};
