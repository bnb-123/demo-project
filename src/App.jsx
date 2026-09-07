import { useRoutes } from "react-router-dom"
import './style.css'
import { CreatePost } from "./components/presentational/CreatePost";
import { EditPost } from "./components/presentational/EditPost";
import { Post } from "./components/presentational/Post";
import Home from "./components/presentational/Home";

function App() {

  const route = [
    {
        path:"/" ,
        element: <Home />
    },
    {
        path:"/post",
        element: <CreatePost />
    },
    {
        path:"/post/:id" ,
        element:<Post />
    },
    {
        path:"post/edit/:id" ,
        element:<EditPost />
    }
  ]
  
  
  

  return (

  
         useRoutes(route)
  )
}

export default App
