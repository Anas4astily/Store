import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Website/Homepage";
import LogIn from "./Pages/Auth/AuthOperations/LogIn";
import Register from "./Pages/Auth/AuthOperations/Register";
import Users from "./Pages/Dashboard/User/Users";
import Googlecallback from "./Pages/Auth/AuthOperations/Googlecallback";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Auth/Protecting/RequireAuth";
import User from "./Pages/Dashboard/User/User";
import AddUser from "./Pages/Dashboard/User/AddUser";
import Writer from "./Pages/Dashboard/User/Writer";
import Err404 from "./Pages/Error/404";
import RequireBack from "./Pages/Auth/Protecting/RequireBack";
import Categories from "./Pages/Dashboard/Category/Categories";
import AddCategory from "./Pages/Dashboard/Category/AddCategory";
import Category from "./Pages/Dashboard/Category/Category";
import Products from "./Pages/Dashboard/Product/Products";
import AddProduct from "./Pages/Dashboard/Product/AddProduct";
import Product from "./Pages/Dashboard/Product/Product";
import WebsiteCategories from "./Pages/Website/WebsiteCategories";
import Helpfetchdata from "./Pages/Website/Helpfetchdata";
import SingleProduct from "./Pages/SingleProducts/SingleProduct";
import About from "./Pages/Website/About";
import Team from "./Pages/Website/Team";
function App() {
  return (
    <div className="App">
      {/*Public Routes */}
      <Routes>
        <Route element={<Helpfetchdata />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<WebsiteCategories />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route element={<RequireBack />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Protected Routes */}
        <Route path="/auth/google/callback" element={<Googlecallback />} />
        <Route path="/*" element={<Err404 />} />
        <Route element={<RequireAuth allowedRole={["1996", "1995", "1999"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth allowedRole={["1995"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<User />} />
              <Route path="user/add" element={<AddUser />} />
            </Route>
            <Route element={<RequireAuth allowedRole={["1999", "1995"]} />}>
              {/*Categories */}
              <Route path="categories" element={<Categories />} />
              <Route path="categories/:id" element={<Category />} />
              <Route path="category/add" element={<AddCategory />} />
              {/*Products */}
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="product/add" element={<AddProduct />} />
            </Route>
            <Route element={<RequireAuth allowedRole={["1996", "1995"]} />}>
              <Route path="writer" element={<Writer />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
