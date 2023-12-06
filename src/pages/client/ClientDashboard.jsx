import { jwtDecode } from "jwt-decode"
import getAuthToken from "../../utils/auth"

export default function ClientDashboard() {
    const user = jwtDecode(getAuthToken().token); 
    console.log(user);
    return (
        <>
        <h1 style={{ display: 'inline-block' }}>Hi, {user.sub}!</h1><span>{`[${user.roles}]`}</span>
        <p>{user.email}</p>
        </>

    )
    
}