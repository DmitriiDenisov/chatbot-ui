import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
// import { LogoutIcon } from '@tabler/icons-react';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove('isLoggedIn');
    router.push('/login');
  };

  return (
      <button onClick={logout} className="button-logout">
        {/* <LogoutIcon size={20} /> */}
        Log out
      </button>
    );
};

export default LogoutButton;
