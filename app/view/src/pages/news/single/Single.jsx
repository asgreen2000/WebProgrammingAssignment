import Navbar from "../../../components/common/Header/Navbar";
import SinglePost from "../../../components/news/singlePost/SinglePost";
import Footer from "../../../components/common/Footer/Footer";

import "./single.css";

export default function Single() {
  return (
    <>
      <Navbar />
      <div className="single">
        <SinglePost />
      </div>
      <Footer/>
    </>
  );
}
