import { useState, useEffect } from "react";
import Login from "./Login";
import MapView from "./MapView";
import { startTracking } from "./useLiveLocation";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user) startTracking(user);
  }, [user]);

  return user ? <MapView /> : <Login onLogin={setUser} />;
}
