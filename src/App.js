import './App.css';
import Toggle from './components/Toggle/Toggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <div className="container mx-auto px-4 mt-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl mb-2 border-b-2 border-fuchsia-600 inline">Delivery</h1>

          <div>
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
              <Toggle toggleId="toggle"></Toggle>
              <h1 className="ml-3 mt-2 font-bold text-base text-gray-500">
                <FontAwesomeIcon icon={faPen} />
              </h1>
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1">
          <div>
            <h1 className="font-bold text-base">Min Order</h1>
            <p>10</p>
            <h1 className="font-bold text-base">Delivery Charges</h1>
            <p>2.00</p>
            <h1 className="font-bold text-base">Delivery Area Limit</h1>
            <p>1 Mile</p>

            <div className="flex w-full">
              <label htmlFor="toggleA" className="flex items-center cursor-pointer">
                <Toggle toggleId="toggleA"></Toggle>
                <h1 className="ml-3 mt-2 font-bold text-base">
                  Collection
                </h1>
              </label>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-base">Discount</h1>
            <p>10%</p>
            <h1 className="font-bold text-base">Delivery Time</h1>
            <p>45 Minutes</p>

            <div className="flex w-full">
              <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                <Toggle toggleId="toggleB"></Toggle>
                <h1 className="ml-3 mt-2 font-bold text-base">
                  Free Delivery
                </h1>
              </label>
            </div>

            <div className="flex w-full">
              <label htmlFor="toggleC" className="flex items-center cursor-pointer">
                <Toggle toggleId="toggleC"></Toggle>
                <h1 className="ml-3 mt-2 font-bold text-base">
                  Dine-In
                </h1>
              </label>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-base">Discount Type</h1>
            <p>Off</p>
            <h1 className="font-bold text-base">Collection Time</h1>
            <p>20 Minutes</p>

            <div className="flex w-full">
              <label htmlFor="toggleD" className="flex items-center cursor-pointer">
                <Toggle toggleId="toggleD"></Toggle>
                <h1 className="ml-3 mt-2 font-bold text-base">
                  Rider Services
                </h1>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
