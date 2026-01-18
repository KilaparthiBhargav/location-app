import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

export default function MapView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snap) => {
      setUsers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  return (
    <MapContainer center={[20, 78]} zoom={5} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {users.map(u => (
        <Marker key={u.id} position={[u.lat, u.lng]}>
          <Popup>{u.id}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
