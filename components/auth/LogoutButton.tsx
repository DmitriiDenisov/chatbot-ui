import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { LogOutIcon } from '@tabler/icons-react';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const logout = () => {
    Cookies.remove('userLoggedIn');
    router.push('/login');
  };

  return (
      <button onClick={logout} className="button-logout">
        <LogOutIcon size={20} />
        Log out
      </button>
    );
};

export default LogoutButton;
