import { jwtDecode } from "jwt-decode";
import { useState } from "react";

export default function Dashboard({ token }) {
  const [user, setUser] = useState("");

  if (!token) {
    throw new Response(
      JSON.stringify({
        message: "You do not have permission to access this page.",
      }),
      { status: 403 }
    );
  } else {
    setUser(jwtDecode(token));
  }

  return <div>{user ? user.email : ""}</div>;
}
