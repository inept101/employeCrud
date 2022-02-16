export default function parseAndSend(
  res,
  status = true,
  statusCode = 500,
  message,
  data
) {
  return res.status(statusCode).json({ status, statusCode, message, data });
}
