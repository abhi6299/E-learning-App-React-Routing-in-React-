import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter"
import Page404 from "./pages/misc/Page404/Page404"
function App() {
  const ROUTE = createBrowserRouter([
    {path:"/",element:<Nav/>, errorElement:<Page404/>, children:[
        {index:true,element:<Hero/>},
        {path:"courses",children:[
          {index:true, element:<Courses/>},
          {path:':courseId', element:<Details/>}
        ]},
        {path:"/learn/:courseId",element:<Learn/>,children:[
            {path:"chapter/:chapterId",element:<Chapter/>}
        ]}
    ]}
  ])
  return (
      <>
          <RouterProvider router={ROUTE}/>
      </>
  );
}

export default App;
