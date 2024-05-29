import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ListBlogs from '../views/listBlogs'
import PostBlog from '../views/postBlog'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListBlogs />,
  },
  {
    path: "PostBlog/:id",
    element: <PostBlog />,
  },
]);

function Router() {
  return <RouterProvider router={router} />
}
export default Router