import contact from '../utils/contact-book.png';
import bar from '../utils/bar-chart.png';
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="flex border-r-2">
        <div className="flex flex-col p-3 bg-slate-400 shadow w-20 sm:w-60 h-screen">
          <div className="space-y-3">
           
            <div className="flex-1">
              <ul className="mt-14 pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm ">
                  <Link to="/" className="flex items-center p-2 space-x-3 rounded-md">
                    <img src={contact} />
                    <span className="hidden sm:inline text-lg font-medium hover:text-yellow-900">Contacts</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link to="/dashboard" className="flex items-center p-2 space-x-3 rounded-md">
                    <img src={bar} alt="" />
                    <span className="hidden sm:inline text-lg font-medium hover:text-yellow-900">Charts And Maps</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}