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
        <Route path="/abut" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/user/:userId/:projectId" element={<Profile />}></Route>
        {/* here : tell that this userId is not a part of route this is something dynamic(this is url parameter) */}
      </Routes>
    </div>
  );
}

export default App;

//onCountUpdate is the name of the prop paasing from parent to child

//countFromParent is also the prop passing from parent to child2 ...when setCountInParent fun update the value of countInParent in child1 it also get updated in child2
// It is simplily a child to child and parent to child communication
