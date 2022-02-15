export function parseAndSend(
  response,
  status = true,
  statusCode,
  message,
  data
) {
  return response
    .status(statusCode)
    .json({ status, statusCode, message, data });
}
