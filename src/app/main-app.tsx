import "./main-app.scss";
import "./about-page.scss";
import { Outlet } from "react-router-dom";

export function MainApp() {
  return (
    <div>
      <header className="app-header">
        Welcome to Ghibli Film Shops
        <small className="small-header">Unforgettable Films Await?</small>
      </header>
      
      <Outlet />
    </div>
  );
}

export default MainApp;
