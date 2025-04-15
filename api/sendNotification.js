// pages/api/sendNotification.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { apiKey, phoneNumber, message } = req.body;

    // Check if all necessary data is provided
    if (!apiKey || !phoneNumber || !message) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    // Call the CallMeBot API to send the WhatsApp notification
    const response = await fetch(
      `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${message}&apikey=${apiKey}`,
      { method: "GET" }
    );

    // If the API request was successful
    if (response.ok) {
      return res.status(200).json({ success: true, message: "Notification sent" });
    } else {
      return res.status(500).json({ error: "Failed to send notification" });
    }
  } else {
    // Handle any non-POST requests
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
