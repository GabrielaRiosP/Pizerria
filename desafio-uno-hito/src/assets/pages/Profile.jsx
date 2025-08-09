import { useEffect, useState, useContext} from 'react';
import { UserContext } from '../../context/UserContext';

const Profile = () => {
    const { getProfile, logout } = useContext(UserContext);
    const [profile, setProfile] = useState(null);
    
    useEffect(() => {
        const fetchProfile = async () => {
            const data = await getProfile();
            setProfile(data)
        };

        fetchProfile();
    }, [getProfile])

  return (

    <div className='container mt-5'>
        <h2>Perfil de Usuario</h2>
        {profile ? (
            <>
            <p><strong>Email:</strong> {profile.email}</p>
            <button className='btn btn-danger mt-3' onClick={logout}>
                Cerrar sesión</button>
                </>
        ) : (
            <p>No estas logueado</p>
        )}

    </div>
  )
}

export default Profile