import Navbar from "./components/Navbar.tsx";
import About from "./components/About.tsx";
import Services from "./components/Services.tsx";
import Blog from "./components/Blog.tsx";
import Development from "./components/Development.tsx";
import Contact from "./components/Contact.tsx";

export default function App(): React.JSX.Element {
  return (
    <div className="font-sans">
      
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