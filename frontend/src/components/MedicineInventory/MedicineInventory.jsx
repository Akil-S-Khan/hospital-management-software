import React, { useState } from "react";
import { FaPlus, FaMinus, FaRegEdit } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, Modal, Form } from "react-bootstrap";

const MedicineInventory = () => {
  const [showModal, setShowModal] = useState(false);  {/*new product m click krege  */}
  const [newProduct, setNewProduct] = useState({    
    name: "",
    type: "",
    price: "",
    stockStatus: "",
    expiry: "",
    manufacturer: "",
    code: "",
  });
  {/**toh new list on hogi */}

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setNewProduct({
      name: "",
      type: "",
      price: "",
      stockStatus: "",
      expiry: "",
      manufacturer: "",
      code: "",
    });
    setShowModal(false);
  };

  return (
    <div
      className="p-3 shadow-lg d-flex flex-column"
      style={{
        background: "white",
        margin: "15px auto",
        width: "95%",
        borderRadius: "12px",
        height: "90%",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5
          className="fw-bold pb-2 pt-3"
          style={{ borderBottom: "3px solid #007bff", width: "fit-content" }}
        >
          Medicine Inventory
        </h5>
        <button
          className="btn d-flex align-items-center gap-2"
          style={{
            background: "#1E6BFF",
            color: "white",
            borderRadius: "10px",
            padding: "8px 18px",
            fontWeight: "500",
          }}
          onClick={() => setShowModal(true)}
        >
          <AiOutlinePlus size={18} /> Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="d-flex flex-wrap gap-3 mb-4">
        <input
          type="text"
          placeholder="Search Product..."
          style={{
            borderRadius: "30px",
            border: "1px solid #ccc",
            padding: "8px 15px",
            width: "200px",
          }}
        />
        <select className="form-select" style={{ borderRadius: "30px", width: "150px" }}>
          <option>Product Type</option>
        </select>
        <select className="form-select" style={{ borderRadius: "30px", width: "150px" }}>
          <option>Stock Status</option>
        </select>
        <input
          type="date"
          className="form-control"
          style={{ borderRadius: "30px", width: "150px" }}
        />
        <select className="form-select" style={{ borderRadius: "30px", width: "180px" }}>
          <option>Manufacturer</option>
        </select>
      </div>

      {/* Table */}
      <div style={{ maxHeight: "60vh", overflowY: "auto", border: "1px solid #eee", borderRadius: "10px" }}>
        <table className="table align-middle" style={{ minWidth: "950px" }}>
          <thead className="bg-light">
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
            {/* ROW 1 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td><strong>Albuterol (salbutamol)</strong><br /><small>ALSXDE0123</small></td>
              <td>Inhaler</td>
              <td>₹28.55</td>
              <td>100 pcs</td>
              <td>2024-06-01</td>
              <td>John's Health Care</td>
              <td className="d-flex gap-2">
                <button className="btn p-2"><FaRegEdit /></button>
                <button className="btn p-2"><FaPlus /></button>
                <button className="btn p-2"><FaMinus /></button>
              </td>
            </tr>

            {/* ROW 2 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td><strong>Amoxicillin 250 mg</strong><br /><small>AMKDE2014</small></td>
              <td>Tablet</td>
              <td>₹40.55</td>
              <td>28 pcs</td>
              <td>2023-07-21</td>
              <td>Patrikson Pvt Ltd</td>
              <td className="d-flex gap-2">
                <button className="btn p-2"><FaRegEdit /></button>
                <button className="btn p-2"><FaPlus /></button>
                <button className="btn p-2"><FaMinus /></button>
              </td>
            </tr>

            {/* ROW 3 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td><strong>Aspirin 300 mg</strong><br /><small>ASPKDE0090</small></td>
              <td>Tablet</td>
              <td>₹28.55</td>
              <td>190 pcs</td>
              <td>2024-06-01</td>
              <td>David's Ltd</td>
              <td className="d-flex gap-2">
                <button className="btn p-2"><FaRegEdit /></button>
                <button className="btn p-2"><FaPlus /></button>
                <button className="btn p-2"><FaMinus /></button>
              </td>
            </tr>

            {/* ROW 4 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td><strong>Benadryl 500 ml</strong><br /><small>SYPCBE00112</small></td>
              <td>Syrup</td>
              <td>₹77.65</td>
              <td>80 pcs</td>
              <td>2025-01-01</td>
              <td>Johnson & Johnson</td>
              <td className="d-flex gap-2">
                <button className="btn p-2"><FaRegEdit /></button>
                <button className="btn p-2"><FaPlus /></button>
                <button className="btn p-2"><FaMinus /></button>
              </td>
            </tr>

            {/* ROW 5 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td><strong>Bufexamac 100 g</strong><br /><small>CRMXCE00123</small></td>
              <td>Cream</td>
              <td>₹70.55</td>
              <td>100 pcs</td>
              <td>2024-11-01</td>
              <td>Mickel's Lab</td>
              <td className="d-flex gap-2">
                <button className="btn p-2"><FaRegEdit /></button>
                <button className="btn p-2"><FaPlus /></button>
                <button className="btn p-2"><FaMinus /></button>
              </td>
            </tr>

            {/* ROW 6 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td><strong>Cefixime 300 mg</strong><br /><small>CAPXUE00D23</small></td>
              <td>Capsule</td>
              <td>₹28.55</td>
              <td>100 pcs</td>
              <td>2025-06-01</td>
              <td>David's Ltd</td>
              <td className="d-flex gap-2">
                <button className="btn p-2"><FaRegEdit /></button>
                <button className="btn p-2"><FaPlus /></button>
                <button className="btn p-2"><FaMinus /></button>
              </td>
            </tr>

            {/* ROW 7 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td><strong>KZ Soap 250 g</strong><br /><small>SOPXUE0D103</small></td>
              <td>Soap</td>
              <td>₹250.00</td>
              <td>150 pcs</td>
              <td>2025-06-01</td>
              <td>John's Health Care</td>
              <td className="d-flex gap-2">
                <button className="btn p-2"><FaRegEdit /></button>
                <button className="btn p-2"><FaPlus /></button>
                <button className="btn p-2"><FaMinus /></button>
              </td>
            </tr>

            {/* ROW 8 */}
            <tr>
              <td><input type="checkbox" /></td>
              <td><strong>Paracetamol 250 mg</strong><br /><small>ALSXCED124</small></td>
              <td>Tablet</td>
              <td>₹28.55</td>
              <td>200 pcs</td>
              <td>2025-06-01</td>
              <td>Joe Industries</td>
              <td className="d-flex gap-2">
                <button className="btn p-2"><FaRegEdit /></button>
                <button className="btn p-2"><FaPlus /></button>
                <button className="btn p-2"><FaMinus /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end gap-2 mt-4">
        <Button size="sm" variant="light">Previous</Button>
        <Button size="sm" variant="light" style={{ background: "#0d6efd", color: "white" }}>1</Button>
        <Button size="sm" variant="light">2</Button>
        <Button size="sm" variant="light">3</Button>
        <Button size="sm" variant="light">Next</Button>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control name="name" value={newProduct.name} onChange={handleChange} placeholder="Enter Product Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Type</Form.Label>
              <Form.Select name="type" value={newProduct.type} onChange={handleChange}>
                <option value="">Select Type</option>
                <option>Tablet</option>
                <option>Capsule</option>
                <option>Syrup</option>
                <option>Inhaler</option>
                <option>Cream</option>
                <option>Soap</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" value={newProduct.price} onChange={handleChange} placeholder="Enter Price" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock Status</Form.Label>
              <Form.Select name="stockStatus" value={newProduct.stockStatus} onChange={handleChange}>
                <option value="">Select Stock Status</option>
                <option>In Stock</option>
                <option>Low Stock</option>
                <option>Out of Stock</option>
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
                <option>John's Health Care</option>
                <option>Patrikson Pvt Ltd</option>
                <option>David's Ltd</option>
                <option>Johnson & Johnson</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Product Code</Form.Label>
              <Form.Control name="code" value={newProduct.code} onChange={handleChange} placeholder="Enter Product code" />
            </Form.Group>
            <Button className="w-100 mt-2" onClick={handleSave}>Save Product</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MedicineInventory;
