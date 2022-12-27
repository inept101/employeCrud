 const parseAndSend=(
  res,
  status = true,
  statusCode = 500,
  message,
  data
)=> {
  return res.status(statusCode).send({ status, statusCode, message, data });
}
export default parseAndSend