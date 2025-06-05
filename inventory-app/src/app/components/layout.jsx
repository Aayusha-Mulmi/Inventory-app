import Sidebar from './Sidebar';
import Navbar from './Navbar';


export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="ml-[18rem]">
        <Navbar />
        <main className=" p-6 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}

