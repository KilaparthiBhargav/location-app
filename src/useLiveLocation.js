import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export function startTracking(userId) {
  navigator.geolocation.watchPosition((pos) => {
    setDoc(doc(db, "users", userId), {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
      updatedAt: Date.now()
    });
  });
}
    