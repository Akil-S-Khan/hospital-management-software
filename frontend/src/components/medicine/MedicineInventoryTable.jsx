import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Medicines = () => {
  const [medicineData, setMedicineData] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [expiry, setExpiry] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [medicineId, setMedicineId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getMedicines();
  }, []);

  const getMedicines = () => {
    axios
      .get(`http://localhost:8000/api/medicines`)
      .then((res) => {
        setMedicineData(res.data?.medicines || res.data || []);
      })
      .catch((err) => console.log(err));
  };

  const addMedicines = () => {
    axios
      .post(`http://localhost:8000/api/add-medicines`, {
        name,
        type,
        price,
        stock,
        expiry,
        manufacturer,
        status,
      })
      .then(() => {
        getMedicines();
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  const editMedicines = () => {
    axios
      .put(`http://localhost:8000/api/edit-medicines`, {
        id: medicineId,
        name,
        type,
        price,
        stock,
        expiry,
        manufacturer,
        status,
      })
      .then(() => {
        getMedicines();
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  const deleteMedicines = (id) => {
    axios
      .delete(`http://localhost:8000/api/delete-medicines`, {
        params: { _id: id },
      })
      .then(() => getMedicines())
      .catch((err) => console.log(err));
  };

  const resetForm = () => {
    setName("");
    setType("");
    setPrice("");
    setStock("");
    setExpiry("");
    setManufacturer("");
    setStatus("");
    setMedicineId(null);
    setIsEdit(false);
  };

  const handleEdit = (med) => {
    setMedicineId(med._id);
    setName(med.name);
    setType(med.type);
    setPrice(med.price);
    setStock(med.stock);
    setExpiry(med.expiry);
    setManufacturer(med.manufacturer);
    setStatus(med.status);
    setIsEdit(true);
  };

  const filteredMedicines = medicineData
    .filter(
      (med) =>
        med.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        med.type?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    ?.filter((item) =>
      type == "" ? item : item?.type?.toLowerCase().includes(type)
    )
    ?.filter((item) =>
      status == "" ? item : item?.status?.toLowerCase().includes(status)
    );
  return (
    <>
      <div className="container-fluid py-3">
        <div className="shadow-lg rounded bg-white p-4 overflow-auto">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0 fw-semibold">Medicine Inventory</h5>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#medicineModal"
              type="button"
              onClick={resetForm}
            >
              <FaPlus size={20} className="me-1" /> New Inventory
            </button>
          </div>
          <hr />

          {/* Search */}
          <div className="row g-2 mb-3">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by Name or Type"
                style={{ borderRadius: "25px" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="col-md-2">
              <select
                className="form-select"
                style={{ borderRadius: "25px" }}
                onChange={(e) => setType(e.target.value)}
              >
                <option value={""}>Product Type</option>
                <option value={"tablet"}>Tablet</option>
                <option value={"capsule"}>Capsule</option>
                <option value={"syrup"}>Syrup</option>
                <option value={"cream"}>Cream</option>
                <option value={"inhaler"}>Inhaler</option>
              </select>
            </div>

            <div className="col-md-2">
              <select
                className="form-select"
                style={{ borderRadius: "25px" }}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={""}>In Stock</option>
                <option value={"available"}>Available</option>
                <option value={"out of stock"}>Out of Stock</option>
              </select>
            </div>

            <div className="col-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="Expiry Date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                style={{ borderRadius: "25px" }}
              />
            </div>

            <div className="col-md-3">
              <select className="form-select" style={{ borderRadius: "25px" }}>
                <option>Manufacturer</option>
                <option>Patrikson Pvt Ltd</option>
                <option>David's Ltd</option>
                <option>Johnson & Johnson</option>
                <option>Mickel's Lab</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Medicine Name</th>
                  <th>Type</th>
                  <th>Price (₹)</th>
                  <th>Stock</th>
                  <th>Expiry Date</th>
                  <th>Manufacturer</th>
                  <th>Stock status</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMedicines.length > 0 ? (
                  filteredMedicines.map((med) => (
                    <tr key={med._id}>
                      <td>{med.name}</td>
                      <td>{med.type}</td>
                      <td>{med.price}</td>
                      <td>{med.stock}</td>
                      <td>{med.expiry}</td>
                      <td>{med.manufacturer}</td>
                      <td>{med.status}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-outline-success btn-sm mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#medicineModal"
                          onClick={() => handleEdit(med)}
                        >
                          <FaEdit size={20} />
                        </button>

                        <button
                          className="btn btn-outline-danger btn-sm mx-1"
                          onClick={() => deleteMedicines(med._id)}
                        >
                          <IoMdClose size={20} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center text-muted py-3">
                      No medicines found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="medicineModal"
        tabIndex="-1"
        aria-labelledby="medicineModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="medicineModalLabel">
                {isEdit ? "Edit Medicine" : "Add New Medicine"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetForm}
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Medicine Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter medicine name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Type</label>
                  <input
                    type="text"
                    className="form-control"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    placeholder="Tablet / Syrup / Injection"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Price (₹)</label>
                  <input
                    type="number"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter price"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    placeholder="Enter stock quantity"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Manufacturer</label>
                  <input
                    type="text"
                    className="form-control"
                    value={manufacturer}
                    onChange={(e) => setManufacturer(e.target.value)}
                    placeholder="Manufacturer name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Stock Status</label>
                  <div className="col-md-2">
                    <select
                      className="form-select rounded"
                      onChange={(e) => setStatus(e.target.value)}
                      style={{ width: "150px" }}
                    >
                      <option value={"Available"}>Available</option>
                      <option value={"Out of Stock"}>Out of Stock</option>
                    </select>
                  </div>
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
                data-bs-dismiss="modal"
                onClick={isEdit ? editMedicines : addMedicines}
              >
                {isEdit ? "Update Medicine" : "Add Medicine"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medicines;
