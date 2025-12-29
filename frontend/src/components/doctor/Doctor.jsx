                                                                                                                                                    
import React, { useEffect, useState } from "react";
import { TbMessageCircleFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoInformationSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";

const Doctor = () => {
    const [showModal, setShowModal] = useState(false);
    
        const [newDoctor, setNewDoctor] = useState({
            name: "",
            qualifications: "",
            specialist: "",
            experience: "",
            contact: "",
            email: "",
        });
    
         // 🔴 CHANGED: doctors list state (table data)
        const [doctors, setDoctors] = useState([]);

        // 🔴 CHANGED: fetch doctors on page load
        useEffect(() => {
            fetchDoctors();
        }, []);

        // 🔴 CHANGED: GET API
        const fetchDoctors = async () => {
            const res = await fetch("http://localhost:8080/api/doctor");
            const data = await res.json();
            setDoctors(data.data);
        };

        // 🔴 CHANGED: form change handler
        const handleChange = (e) => {
            setNewDoctor({
            ...newDoctor,
            [e.target.name]: e.target.value,
            });
        };

        // 🔴 CHANGED: Save doctor → POST + GET
        const handleSaveDoctor = async () => {
            console.log("Save Button Clicked");

            await fetch("http://localhost:8080/api/add-doctor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newDoctor),
            });

            console.log("API CALLED");

            fetchDoctors();          // 🔴 CHANGED: DB se fresh data
            setShowModal(false);     // 🔴 CHANGED: modal close
        };
        // const handleChange = (e) => {
        //     setNewDoctor({
        //         ...newDoctor,
        //         [e.target.name]: e.target.value,
        //     });
        // };

    return (
        <div className="w-100 shadow-sm rounded p-4 ms-2 bg-white">

            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">Doctors Detail</h5>
                <button 
                    className="btn btn-primary"
                    onClick={() => setShowModal(true)}    
                >+ Add Doctor</button>
            </div>

            <hr />

                        {/* Search + Filter */}
            <div className="d-flex gap-3 mt-3">

                {/* Search Bar */}
                <div 
                    className="d-flex align-items-center px-3"
                    style={{
                        background: "#eef6ff",
                        borderRadius: "50px",
                        width: "300px",
                        border: "1px solid #d7e8ff"
                    }}
                >
                    <i className="bi bi-search me-2" style={{ color: "#7a9cc4" }}></i>
                    <input
                        type="text"
                        placeholder="Search Doctor"
                        className="form-control border-0 bg-transparent shadow-none"
                        style={{ outline: "none" }}
                    />
                </div>

                {/* Filter by Date */}
                <div
                    className="d-flex align-items-center px-3"
                    style={{
                        border: "2px solid #4da3ff",
                        borderRadius: "50px",
                        width: "200px",
                        cursor: "pointer"
                    }}
                >
                    <input
                        type="date"
                        className="form-control border-0 shadow-none"
                        style={{ background: "transparent", cursor: "pointer" }}
                    />
                </div>
            </div>

            {/* New Doctor Modal */}
            {showModal && (
                <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                        <h5 className="modal-title">Add New Patient</h5>
                        <button className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>

                        <div className="modal-body">
                        <input
                            className="form-control mb-2"
                            name="name"
                            placeholder="Doctor Name"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-2"
                            name="qualifications"
                            placeholder="Qualification"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-2"
                            name="specialist"
                            placeholder="Specialist"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-2"
                            name="experience"
                            placeholder="Experience"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-2"
                            name="contact"
                            placeholder="contact Number"
                            type="number"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-2"
                            name="email"
                            placeholder="Email Id"
                            onChange={handleChange}
                        />
                        </div>

                        <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </button>
                        <button className="btn btn-primary" onClick={handleSaveDoctor}>
                            Save Doctor
                        </button>
                        </div>

                    </div>
                    </div>
                </div>
            )}



            {/* Table */}
            <div className="table-responsive mt-4">
                <table className="table table-hover mt-3 align-middle">

                    <thead className="table-light">
                        <tr>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Specialist</th>
                            <th scope="col">Experience</th>
                            <th scope="col">Contact No</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">User Action</th>
                        </tr>
                    </thead>

                    <tbody className="align-items-center">

                        {doctors.map((doc) => (
                            <tr key={doc._id}>
                                <td><IoPersonCircleOutline size={25}  className="me-2" /> {doc.name}</td>
                                <td>{doc.qualifications}</td>
                                <td>{doc.specialist}</td>
                                <td>{doc.experience}</td>
                                <td>{doc.contact}</td>
                                <td>{doc.email}</td>
                                <td className="d-flex gap-3">
                                    <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                    <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                    <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                                </td>
                            </tr>
                        ))}
                        
                        {/* Row 1 */}
                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Dr.Fazal Vanjara
                            </td>
                            <td>MBBS, MD(Medicine)</td>
                            <td style={{color: "blue"}}>Physician</td>
                            <td>10 Years</td>
                            <td>+919309565440</td>
                            <td>fazalv@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Afzal vanjara
                            </td>
                            <td>MBBS.MS(Ortho)</td>
                            <td style={{color: "blue"}}>Orthopedic</td>
                            <td>7 Years</td>
                            <td>+919309688741</td>
                            <td>afzalv@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        {/* SAME ROWS CONTINUE (unchanged) */}
                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Dr.Safiya 
                            </td>
                            <td>BDS,MDS</td>
                            <td style={{color: "blue"}}>Dentist</td>
                            <td>5 Year</td>
                            <td>+919258746398</td>
                            <td>safiya@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Dr.Talha Motlani
                            </td>
                            <td>MBBS,MD(Pediatrics)</td>
                            <td style={{color: "blue"}}>Child Specialist</td>
                            <td>8 Year</td>
                            <td>+919385647289</td>
                            <td>talham@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Dr.Jannat Motlani
                            </td>
                            <td>MBBS,MD(Dematology)</td>
                            <td style={{color: "blue"}}>Skin Specialist</td>
                            <td>6 Year</td>
                            <td>+919865428738</td>
                            <td>jannatm@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Dr.Mahi Motlani
                            </td>
                            <td>MBBS,DM(Cardiology)</td>
                            <td style={{color: "blue"}}>Cardiology</td>
                            <td>12 Year</td>
                            <td>+919309455698</td>
                            <td>mahim@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Dr.Saniya
                            </td>
                            <td>MBBS</td>
                            <td style={{color: "blue"}}>All Over</td>
                            <td>12 15 Year</td>
                            <td>+919365874256</td>
                            <td>saniya@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Doctor;