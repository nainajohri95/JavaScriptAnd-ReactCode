import { useState } from "react";
import Child1 from "./component/Child1";
import Child2 from "./component/Child2";
import Counter from "./component/Counter";
import Fruits from "./component/Fruits";
import Notes from "./component/Notes";
import UserForm from "./forms and hooks/UserForm";
import UseEffectHook from "./forms and hooks/UseEffectHook";
import NewsApp from "./component/NewsApp";
import Converter from "./component/Converter";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Navigation from "./component/Navigation";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import FreePricing from "./pages/FreePricing";
import PremiumPricing from "./pages/PremiumPricing";
import Freemium from "./pages/Freemium";
import ForPrime from "./pages/ForPrime";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const [countInParent, setCountInParent] = useState(0);

  function updateCountInParent(count) {
    setCountInParent(count);
  }

  function uploadData() {
    console.log("I will start uploading the data now");
  }
  return (
    <div>
      {/* <Counter/> */}
      {/* <Fruits /> */}
      {/* <Notes /> */}
      {/* <p>Inside the parent: {countInParent}</p>
      <Child1 onCountUpdate={updateCountInParent} />
      <Child2 countFromParent={countInParent} uploadData={uploadData} />  */}
      {/* <UserForm /> */}
      {/* <UseEffectHook /> */}
      {/* <NewsApp /> */}
      {/* <Converter /> */}
      <Navigation />
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/user/:userId/" element={<Profile />}></Route>
        <Route path="/user/:userId/:projectId" element={<Project />}></Route>
        {/* here : tell that this userId is not a part of route this is something dynamic(this is url parameter) */}

        <Route element={<ProtectedRoute />}>
          <Route path="/prime" element={<ForPrime />}></Route>
        </Route>

        <Route path="/pricing" element={<Pricing />}>
          <Route path="free" element={<FreePricing />}></Route>
          <Route path=" premium" element={<PremiumPricing />}></Route>
          <Route path=" freemium" element={<Freemium />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//onCountUpdate is the name of the prop paasing from parent to child

//countFromParent is also the prop passing from parent to child2 ...when setCountInParent fun update the value of countInParent in child1 it also get updated in child2
// It is simplily a child to child and parent to child communication
