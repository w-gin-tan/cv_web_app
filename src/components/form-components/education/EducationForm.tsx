import { useState } from 'react';
import '../../../styles/App.css';
import '../../../styles/form-group.css';

export default function EducationForm() {
    const [school, setSchool] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState(new Date());

    function updateSchool(school: string) {
        setSchool(school);
    }

    function updateTitle(title: string) {
        setTitle(title);
    }

    function updateDate(date: Date) {
        setDate(date);
    }

    return (
        <>
            <div className="form-box">
                <h2>Education</h2>
                <label>
                    School Name
                    <br />
                    <input 
                        value={school}
                        onChange={
                            (e) => 
                            updateSchool(e.target.value)
                        }
                    />
                </label>
                <br />
                <label>
                    Title of Study
                    <br />
                    <input 
                        value={title}
                        onChange={
                            (e) => 
                            updateTitle(e.target.value)
                        }
                    />
                </label>
                <br />
                <label>
                    Date of Study
                    <br />
                    <input 
                        type="date"
                        value={date.toISOString().split("T")[0]}
                        onChange={
                            (e) => 
                            updateDate(new Date(e.target.value))
                        }
                    />
                </label>
            </div>
        </>
    )
}