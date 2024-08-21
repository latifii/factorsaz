import { Outlet } from "react-router";

const LayoutApp: React.FC = () => {
  return (
    <div>
      <header>هدر</header>
      <Outlet />
      <footer>فوتر</footer>
    </div>
  );
};

export default LayoutApp;
