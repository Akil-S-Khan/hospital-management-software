import React from 'react'
import { BsInfoLg } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const EducationContentTableRow = ({ _id, title, createdBy, description, onInfo, onDelete, setEditState }) => {
    return (
        <>
            <tr>
                <td>
                    <img
                        style={{ width: 30, height: 30, borderRadius: 50 }}
                        src="https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?cs=srgb&dl=pexels-janetrangdoan-1105166.jpg&fm=jpg"
                        alt="Diet Plan"
                    />
                </td>
                <td>{title}</td>
                <td>{createdBy}</td>
                <td className="d-flex align-items-center">
                    <button
                        className="btn btn-outline-success mx-1"
                        title='Edit'
                        data-bs-toggle="modal"
                        data-bs-target="#educationModal"
                        onClick={() => {
                            onInfo(_id, title, createdBy, description);
                            setEditState(true);
                        }}
                    >
                        <FaEdit size={20} />
                    </button>

                    <button
                        className="btn btn-outline-danger mx-1"
                        title='Delete'
                        onClick={() => onDelete(_id)}
                    >
                        <IoMdClose size={20} />
                    </button>

                    <button
                        type='button'
                        title='Information'
                        className="btn btn-outline-primary mx-1"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => onInfo(_id, title, createdBy, description)}
                    >
                        <BsInfoLg size={20} />
                    </button>


                </td>
            </tr>
        </>
    )
}

export default EducationContentTableRow
