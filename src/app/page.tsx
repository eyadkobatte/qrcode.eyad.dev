import Navbar from "./components/navbar";
import Home from "./components/home";

export default function Page() {
  return (
    <main className="container px-20 py-4 min-w-full">
      <Navbar></Navbar>
      <Home></Home>
    </main>
  );
}
