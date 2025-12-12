import React, { useState } from "react";
import { FaPlus, FaMinus, FaRegEdit } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, Modal, Form } from "react-bootstrap";

const MedicineInventory = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [stockFilter, setStockFilter] = useState("");
  const [manufacturerFilter, setManufacturerFilter] = useState("");
  const [expiryFilter, setExpiryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    type: "",
    price: "",
    stockStatus: "",
    expiry: "",
    manufacturer: "",
    code: "",
  });

  const [medicineData, setMedicineData] = useState([
    { name: "Albuterol (salbutamol", type: "Inhaler", price: "₹28.55", stock: "100 pcs", stockStatus: "In Stock", expiry: "2024-06-01", manufacturer: "John's Health Care", code: "ALSXDE0123" },
    { name: "Amoxicillin 250 mg", type: "Tablet", price: "₹40.55", stock: "28 pcs", stockStatus: "Low Stock", expiry: "2023-07-21", manufacturer: "Patrikson Pvt Ltd", code: "AMKDE2014" },
    { name: "Aspirin 300 mg", type: "Tablet", price: "₹28.55", stock: "190 pcs", stockStatus: "In Stock", expiry: "2024-06-01", manufacturer: "David's Ltd", code: "ASPKDE0090" },
    { name: "Benadryl 500 ml", type: "Syrup", price: "₹77.65", stock: "80 pcs", stockStatus: "In Stock", expiry: "2025-01-01", manufacturer: "Johnson & Johnson", code: "SYPCBE00112" },
    { name: "Bufexamac 100 g", type: "Cream", price: "70.55", stock: "100 pcs", stockStatus: "In Stock", expiry: "2024-11-01", manufacturer: "Mickel's Lab", code: "CRMXCE00123" },
    { name: "Cefixime 300 mg", type: "Capsule", price: "₹28.55", stock: "100 pcs", stockStatus: "In Stock", expiry: "2025-06-01", manufacturer: "David's Ltd", code: "CAPXUE00D23" },
    { name: "KZ Soap 250 g", type: "Soap", price: "250.00", stock: "150 pcs", stockStatus: "In Stock", expiry: "2025-06-01", manufacturer: "John's Health Care", code: "SOPXUE0D103" },
    { name: "Paracetamol 250 mg", type: "Tablet", price: "₹28.55.00", stock: "200 pcs", stockStatus: "In Stock", expiry: "2025-06-01", manufacturer: "Joe Industries", code: "ALSXCED124" },
  ]);

  const itemsPerPage = 5;

  const filteredData = medicineData
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => (typeFilter ? item.type === typeFilter : true))
    .filter((item) => (stockFilter ? item.stockStatus === stockFilter : true))
    .filter((item) => (manufacturerFilter ? item.manufacturer === manufacturerFilter : true))
    .filter((item) => (expiryFilter ? item.expiry === expiryFilter : true));

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Add new product to medicineData
    setMedicineData([
      ...medicineData,
      { ...newProduct, stock: "0 pcs" } // stock default 0 pcs
    ]);
    setShowModal(false);
    setNewProduct({ name: "", type: "", price: "", stockStatus: "", expiry: "", manufacturer: "", code: "" });
  };

  return (
    <div
      className="p-3 shadow-lg d-flex flex-column"
      style={{ background: "white", margin: "15px auto", width: "95%", borderRadius: "12px", height: "90%" }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold pb-2 pt-3" style={{ borderBottom: "3px solid #007bff", width: "fit-content" }}>
          Medicine Inventory
        </h5>

        <button
          className="btn d-flex align-items-center gap-2"
          style={{ background: "#1E6BFF", color: "white", borderRadius: "10px", padding: "8px 18px", fontWeight: "500" }}
          onClick={() => setShowModal(true)}
        >
          <AiOutlinePlus size={18} /> Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="d-flex flex-wrap gap-3 mb-4">
        <div className="d-flex align-items-center px-3" style={{ background: "#F5F7FA", borderRadius: "30px", height: "45px" }}>
          <input type="text" placeholder="Search Product..." onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} style={{ border: "none", background: "transparent", outline: "none" }} />
        </div>

        <select className="form-select" style={{ borderRadius: "30px", width: "150px", height: "40px" }} value={typeFilter} onChange={(e) => { setTypeFilter(e.target.value); setCurrentPage(1); }}>
          <option value="">Product Type</option>
          <option value="Tablet">Tablet</option>
          <option value="Capsule">Capsule</option>
          <option value="Syrup">Syrup</option>
          <option value="Inhaler">Inhaler</option>
          <option value="Cream">Cream</option>
          <option value="Soap">Soap</option>
        </select>

        <select className="form-select" style={{ borderRadius: "30px", width: "150px", height: "40px" }} value={stockFilter} onChange={(e) => { setStockFilter(e.target.value); setCurrentPage(1); }}>
          <option value="">Stock Status</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>

        <input type="date" className="form-control" style={{ borderRadius: "30px", width: "150px", height: "40px" }} value={expiryFilter} onChange={(e) => { setExpiryFilter(e.target.value); setCurrentPage(1); }} />

        <select className="form-select" style={{ borderRadius: "30px", width: "180px", height: "40px" }} value={manufacturerFilter} onChange={(e) => { setManufacturerFilter(e.target.value); setCurrentPage(1); }}>
          <option value="">Manufacturer</option>
          <option value="John's Health Care">John's Health Care</option>
          <option value="Patrikson Pvt Ltd">Patrikson Pvt Ltd</option>
          <option value="David's Ltd">David's Ltd</option>
          <option value="Johnson & Johnson">Johnson & Johnson</option>
        </select>
      </div>

      {/* Scrollable Table */}
      <div style={{ maxHeight: "60vh", overflowY: "auto", borderRadius: "10px", border: "1px solid #eee" }}>
        <table className="table align-middle" style={{ minWidth: "950px", marginBottom: 0 }}>
          <thead className="bg-light" style={{ position: "sticky", top: 0, zIndex: 10 }}>
            <tr className="text-secondary">
              <th></th>
              <th>Product Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>In Stock</th>
              <th>Expiry Date</th>
              <th>Manufacturer</th>
              <th>User Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td><strong>Albuterol (salbutamol</strong><br /><small className="text-secondary">ALSXDE0123</small></td>
              <td>Inhaler</td>
              <td>₹28.55</td>
              <td>100 pcs</td>
              <td>2024-06-01</td>
              <td>John's Health Care</td>
              <td className="d-flex gap-2">
                <button className="btn p-2"><FaRegEdit size={16} /></button>
                <button className="btn p-2"><FaPlus size={16} /></button>
                <button className="btn p-2"><FaMinus size={16} /></button>
              </td>
            </tr>

            {/* Add manually new products below */}
            {medicineData.slice(1).map((item, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td><strong>{item.name}</strong><br /><small className="text-secondary">{item.code}</small></td>
                <td>{item.type}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <td>{item.expiry}</td>
                <td>{item.manufacturer}</td>
                <td className="d-flex gap-2">
                  <button className="btn p-2"><FaRegEdit size={16} /></button>
                  <button className="btn p-2"><FaPlus size={16} /></button>
                  <button className="btn p-2"><FaMinus size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end align-items-center gap-2 mt-4">
        <Button size="sm" variant="light" style={{ padding: "6px 20px", fontSize: "13px" }} onClick={handlePrev}>Previous</Button>
        <Button size="sm" variant="light" style={{ background: "#0d6efd", color: "white", padding: "4px 12px", fontSize: "13px" }}>1</Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>2</Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }}>3</Button>
        <Button size="sm" variant="light" style={{ padding: "4px 12px", fontSize: "13px" }} onClick={handleNext}>Next</Button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter product name" name="name" value={newProduct.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Type</Form.Label>
              <Form.Select name="type" value={newProduct.type} onChange={handleChange}>
                <option value="">Select Type</option>
                <option value="Tablet">Tablet</option>
                <option value="Capsule">Capsule</option>
                <option value="Syrup">Syrup</option>
                <option value="Inhaler">Inhaler</option>
                <option value="Cream">Cream</option>
                <option value="Soap">Soap</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Enter price" name="price" value={newProduct.price} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Stock Status</Form.Label>
              <Form.Select name="stockStatus" value={newProduct.stockStatus} onChange={handleChange}>
                <option value="">Select Stock Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Low Stock">Low Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="date" name="expiry" value={newProduct.expiry} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Select name="manufacturer" value={newProduct.manufacturer} onChange={handleChange}>
                <option value="">Select Manufacturer</option>
                <option value="John's Health Care">John's Health Care</option>
                <option value="Patrikson Pvt Ltd">Patrikson Pvt Ltd</option>
                <option value="David's Ltd">David's Ltd</option>
                <option value="Johnson & Johnson">Johnson & Johnson</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Product Code</Form.Label>
              <Form.Control type="text" placeholder="Enter product code" name="code" value={newProduct.code} onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" style={{ marginTop: "-10px" }} onClick={handleSave}>
              Save Product
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MedicineInventory;
