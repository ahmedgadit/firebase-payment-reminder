import app from "@/firebase/config";

export default async function handler(req, res) {
  // Query the payments collection for payments that are due today and have not been paid
  const today = new Date();
  const paymentsRef = app.firestore().collection("payments");
  const snapshot = await paymentsRef.where("due_date", "==", today).where("paid", "==", false).get();

  // Retrieve the user information of the users who created those payments
  const usersRef = app.firestore().collection("users");
  const userIds = Array.from(new Set(snapshot.docs.map((doc) => doc.data().userId)));
  const userSnapshot = await usersRef.where(app.firestore.FieldPath.documentId(), "in", userIds).get();

  // Use a notification library to send a push notification reminding the user to make the payment
  const tokens = userSnapshot.docs.map((doc) => doc.data().token);
  const notification = {
    title: "Payment Reminder",
    body: "Your payment is due today. Please make the payment as soon as possible.",
  };
  await sendNotification(tokens, notification);

  res.status(200).end();
}

async function sendNotification(tokens, notification) {
  // Use a notification library to send the push notification
  // Here, we're using the next-pwa-amp-notifications library as an example
  await navigator.serviceWorker.ready;
  await navigator.serviceWorker.getRegistration().showNotification(notification.title, {
    body: notification.body,
    vibrate: [200, 100, 200],
    tag: "payment-reminder",
    data: { url: "/payments" },
    actions: [{ action: "open_url", title: "View Payments" }],
    icon: "/icons/icon-512x512.png",
    badge: "/icons/badge-72x72.png",
    image: "/images/payment-reminder.jpg",
  });
}
