import { getMessaging, getToken } from 'firebase/messaging';
import app from "../config";
import localforage from "localforage";

export default async function getFCMToken() {
    try {
        const messaging = app.messaging();
        const tokenInLocalForage = await localforage.getItem<String>("fcm_token");

        // Return the token if it is alredy in our local storage
        if (tokenInLocalForage !== null) {
            return tokenInLocalForage;
        }

        // Request the push notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === "granted") {
            // Get new token from Firebase
            const fcm_token = await getToken<String>(messaging, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY });

            // Set token in our local storage
            if (fcm_token) {
                localforage.setItem("fcm_token", fcm_token);
                return fcm_token;
            }
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}