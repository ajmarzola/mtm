import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Container from "./components/Container";
import Footer from "./components/Footer";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/post" element={<Post />}></Route>
                    <Route path="/categories" element={<Categories />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;