import Home from "./pages/Home";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
