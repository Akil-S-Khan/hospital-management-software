import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { TbMessageCircleFilled } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { BsInfoLg } from "react-icons/bs";
import EducationContentTableRow from './EducationContentTableRow';
import axios from "axios";
import variables from "../../utils/variables";
import { Modal } from "bootstrap";

const EducationContent = () => {
    const [educationContentData, setEducationContentData] = useState([]);

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [description, setDescription] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    // for first time data load
    useEffect(() => {
        GetEducationContent();
    }, [])

    const InformationModal = (_id, title, createdBy, description) => {
        setId(_id);
        setTitle(title);
        setCreatedBy(createdBy);
        setDescription(description);
    }

    const resetForm = () => {
        setId("");
        setTitle("");
        setCreatedBy("");
        setDescription("");
        setIsEdit(false);
    }

    const GetEducationContent = () => {
        axios
            .get(`${variables.base_url}/api/education-content`)
            .then((res) => {
                console.log(res.data.educationContents);
                setEducationContentData(res.data.educationContents);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const AddEducationContent = () => {
        axios
            .post(`${variables.base_url}/api/add-education-content`, {
                title: title,
                createdBy: createdBy,
                description: description,
            })
            .then((res) => {
                console.log(res.data);
                GetEducationContent();
                resetForm();
            })
            .catch((err) => {
                console.log(err);
                resetForm();
            });
    };

    const EditEducationContent = () => {
        console.log("Edit education runs here.")
        axios
            .put(`${variables.base_url}/api/edit-education-content`, {
                id: id,
                title: title,
                createdBy: createdBy,
                description: description,
            })
            .then((res) => {
                GetEducationContent();
                resetForm();
            })
            .catch((err) => {
                console.log(err);
                resetForm();
            });
    }

    const DeleteEducationContent = (id) => {
        axios
            .delete(`${variables.base_url}/api/delete-education-content`, {
                params: {
                    _id: id
                }
            })
            .then((res) => {
                console.log(res.data)
                GetEducationContent();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="w-100 h-100 shadow-lg rounded pt-4 px-4 ms-2 bg-white">
            <div className="d-flex justify-content-between align-items-center">
                <h5>Education Content</h5>
                <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#educationModal"
                    type="button"
                >
                    <FaPlus /> Add Education Content
                </button>
            </div>

            <hr />

            <div className='overflow-auto' style={{ height: "80%" }}>
                <table className="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th scope="col" style={{ width: "10%" }}>
                                Content
                            </th>
                            <th scope="col" style={{ width: "50%" }}>
                                Title
                            </th>
                            <th scope="col" style={{ width: "20%" }}>
                                Creator
                            </th>
                            <th scope="col" style={{ width: "20%" }}>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            educationContentData?.map((eduContent) =>
                                <EducationContentTableRow
                                    key={eduContent._id}
                                    _id={eduContent._id}
                                    title={eduContent.title}
                                    createdBy={eduContent.createdBy}
                                    description={eduContent.description}
                                    onInfo={InformationModal}
                                    onDelete={DeleteEducationContent}
                                    setEditState={setIsEdit}
                                />
                            )
                        }
                    </tbody>
                </table>

                {/* Modal for education content information */}
                <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-light">
                                <h5 className="modal-title" id="staticBackdropLabel">
                                    Education Content
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                    onClick={resetForm} />
                            </div>
                            <div className="modal-body">
                                <div className='education-content-info-modal-img-container d-flex justify-content-center align-items-center'>
                                    <img src="https://images.pexels.com/photos/1105166/pexels-photo-1105166.jpeg?cs=srgb&dl=pexels-janetrangdoan-1105166.jpg&fm=jpg"
                                        alt="Diet Plan"
                                        className='education-content-info-modal-img rounded m-auto' />
                                </div>
                                <div>
                                    <div className='fw-bold mt-2 fs-5'>
                                        {title}
                                    </div>
                                    <div className='mt-1'>
                                        Created by {createdBy}
                                    </div>
                                    <div className='mt-3'>
                                        {description}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary" data-bs-dismiss="modal"
                                    onClick={resetForm}
                                >
                                    Close
                                </button>
                                {/* <button type="button" className="btn btn-primary">Understood</button> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Add education content modal */}
            <div
                className="modal fade"
                id="educationModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="educationModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-light">
                            <h5 className="modal-title" id="educationModalLabel">Education Content</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={resetForm}
                            />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="educationTitle" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="educationTitle"
                                        aria-describedby="educationTitle"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="createdBy" className="form-label">Created by</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="createdBy"
                                        value={createdBy}
                                        onChange={(e) => setCreatedBy(e.target.value)} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="description"
                                        rows={5}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}></textarea>
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={resetForm}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {
                                    isEdit ? EditEducationContent() :
                                        AddEducationContent();
                                }}
                                data-bs-dismiss="modal"
                            >
                                {isEdit ? "Edit Content" : "Add Content"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EducationContent
