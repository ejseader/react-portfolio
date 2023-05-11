import { faUserTie, faAddressCard, faPalette, faFile }  from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <SideBarIcon icon={<faUserTie size="28" />} text='About' />
      <SideBarIcon icon={<faAddressCard size="28" />} text='Contact' />
      <SideBarIcon icon={<faPalette size="28" />} text='Portfolio' />
      <SideBarIcon icon={<faFile size="28" />} text='Resume' />
    </div>
  )};

  const SideBarIcon = ({ icon, text }) => (
    <div className="sidebar-icon group">
      {icon}

      <span class="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );

  export default Sidebar;