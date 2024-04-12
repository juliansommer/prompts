export default function extractUsername(email) {
  const username = email.split("@")[0] // Split the email by '@' and take the first part
  return username.replace(/\s+/g, "").toLowerCase() // Remove spaces if any and convert to lowercase
}
