//import { Outlet } from 'react-router-dom'

//export function HomePage() {
 // return (
   // <>
   //   Home! <Outlet />
   // </>
 // )
//}

import { Outlet } from 'react-router-dom';

export function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Outlet /> {/* This will render any nested routes defined in the 'Home' route */}
    </div>
  );
}

