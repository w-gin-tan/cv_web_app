import { useState } from 'react';
import '../../../styles/App.css';
import '../../../styles/contact.css';

export default function ContactForm() {
    // do I need to declare type of useState variables?
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");


    function updateFullName(name: string) {
        setFullName(name);
    }

    function updateEmail(email: string) {
        setEmail(email);
    }

    function updateNumber(phoneNum: string) {
        setNumber(phoneNum);
    }

    return (
        <>
            <div className="form-box">
                <h2>Contact</h2>
                <label>
                    Name
                    <br />
                    <input 
                        value={fullName}
                        onChange={
                            (e) => 
                            updateFullName(e.target.value)
                        }
                    />
                </label>
                <br />
                <label>
                    Email
                    <br />
                    <input 
                        type="email"
                        value={email}
                        onChange={
                            (e) => 
                            updateEmail(e.target.value)
                        }
                    />
                </label>
                <br />
                <label>
                    Phone Number
                    <br />
                    <input 
                        type="number"
                        value={number}
                        onChange={
                            (e) => 
                            updateNumber(e.target.value)
                        }
                    />
                </label>
            </div>
        </>
    )
}