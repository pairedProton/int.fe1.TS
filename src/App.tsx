import Navbar from "./components/Navbar.tsx";
import About from "./sections/About.tsx";
import Services from "./sections/Services.tsx";
import Blog from "./sections/Blog.tsx";
import Development from "./sections/Development.tsx";
import Contact from "./sections/Contact.tsx";

export default function App(): React.JSX.Element {
  return (
    <div className="font-sans  bg-[#f7f7f9]">
      
      <Navbar />
      <main>
        <About />
        <Services />
        <Blog />
        <Development />
        <Contact />
      </main>
    </div>
  );
} 