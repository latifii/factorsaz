import { Outlet } from "react-router";

const LayoutPanel: React.FC = () => {
  return (
    <>
      <header> پنل هدر</header>
      <Outlet />
      <footer>فوتر پنل </footer>
    </>
  );
};

export default LayoutPanel;
