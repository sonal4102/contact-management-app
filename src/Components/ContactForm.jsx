import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
function ContactForm() {


    const dispatch = useDispatch()

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active"
    })

    const handleChange = (e) => {


        setForm({
            ...form,
            [e.target.name]: e.target.value
        })


    }

    
    function handleSave() {
        dispatch(addContact(form))
        window.location.href = '/';
    }
    
    return (
        <div className="w-1/2 md:w-1/2 lg:w-1/3 mx-auto my-24 md:pt-16 lg:pt-8 xl:pt-4">

          
            <div className="mb-4">
                <label className="text-left block font-bold mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="text-left block font-bold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="text-left block font-bold mb-2" htmlFor="last-name">
                    Mobile Number
                </label>
                <input
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="last-name"
                    type="number"
                    name="mob"
                    min='10'
                    max='10'
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="text-left block font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border border-gray-400 p-2 rounded-md"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value={'active'}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                </select>
            </div>
            <button
                className="bg-orange-600 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}


export default ContactForm