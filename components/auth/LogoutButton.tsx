import { IconLogout } from '@tabler/icons-react';
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
    <button
    // flex items-center space-x-2 w-full text-left px-3 py-2
    // flex items-center space-x-2 w-full pl-2
      className="flex items-center space-x-2 w-full pl-2"
      onClick={logout}
    >
      <IconLogout size={18} />
      <span>Log out</span>
    </button>
  );
};

export default LogoutButton;
