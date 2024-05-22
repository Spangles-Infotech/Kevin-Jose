import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

function ExpenseAdd() {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        date: '',
        category: '',
        subcategory: '',
        description: '',
        amount: '',
        status: '',
    });
    const [errors, setErrors] = useState({
        date: '',
        category: '',
        subcategory: '',
        description: '',
        amount: '',
        status: '',
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        let formIsValid = true;
        Object.keys(employee).forEach((key) => {
            if (employee[key].trim() === '') {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required`,
                }));
                formIsValid = false;
            }
        });

        if (formIsValid) {
            try {
                const formData = new FormData();
                Object.entries(employee).forEach(([key, value]) => {
                    formData.append(key, value);
                });
                navigate("/Expense");
                const response = await axios.post("http://127.0.0.1:8000/api/create_expense/", formData);

                if (response.data.Status) {
                    navigate("/Expense");
                } else {
                    console.log("response.data", response.data);
                }
            } catch (error) {
                console.error("Error adding expense:", error);
                if (error.response) {
                    navigate("/Expense");
                }
            }
        }
    };

    const handleCancel = () => {
        navigate("/Expense");
    };

    return (
        <Container>
            <div className='card col-lg-12' style={{ margin: '1%', borderColor: 'red', width: '98%' }} >
                <div className='row m-4'>
                    <div className='col-sm-6'>
                        <Form.Floating>
                            <Form.Control
                                required
                                id="date"
                                type="date"
                                placeholder="date"
                                name="date"
                                value={employee.date}
                                onChange={(e) =>
                                    setEmployee({ ...employee, date: e.target.value })
                                }
                            />
                            <label htmlFor="date">Date</label>
                            <Form.Control.Feedback type="value" style={{ color: 'red' }}>{errors.date}</Form.Control.Feedback>
                        </Form.Floating>
                    </div>
                    <div className='col-sm-6'>
                        <Form.Floating>
                            <Form.Control
                                required
                                id="category"
                                type="text"
                                placeholder="category"
                                name="category"
                                value={employee.category}
                                onChange={(e) =>
                                    setEmployee({ ...employee, category: e.target.value })
                                }
                            />
                            <label htmlFor="category">Category</label>
                            <Form.Control.Feedback type="value" style={{ color: 'red' }}>{errors.category}</Form.Control.Feedback>
                        </Form.Floating>
                    </div>
                </div>
                <div className='row m-4'>
                    <div className='col-sm-6'>
                        <Form.Floating>
                            <Form.Control
                                required
                                id="subcategory"
                                type="text"
                                placeholder="Sub Category"
                                name="subcategory"
                                value={employee.subcategory}
                                onChange={(e) =>
                                    setEmployee({ ...employee, subcategory: e.target.value })
                                }
                            />
                            <label htmlFor="subcategory">Sub Category</label>
                            <Form.Control.Feedback type="value" style={{ color: 'red' }}>{errors.subcategory}</Form.Control.Feedback>
                        </Form.Floating>
                    </div>
                    <div className='col-sm-6'>
                        <Form.Floating>
                            <Form.Control
                                required
                                id="amount"
                                type="number"
                                placeholder="amount"
                                name="amount"
                                value={employee.amount}
                                onChange={(e) =>
                                    setEmployee({ ...employee, amount: e.target.value })
                                }
                            />
                            <label htmlFor="amount">Amount</label>
                            <Form.Control.Feedback type="value" style={{ color: 'red' }}>{errors.amount}</Form.Control.Feedback>
                        </Form.Floating>
                    </div>
                </div>

                <div className='row m-4'>
                    <div className='col'>
                        <Form.Floating>
                            <Form.Control
                                required
                                as="textarea"
                                id="description"
                                name='description'
                                style={{ height: '100px' }}
                                className='form-control'
                                placeholder="description"
                                value={employee.description}
                                onChange={(e) =>
                                    setEmployee({ ...employee, description: e.target.value })
                                }
                            />
                            <label htmlFor="Description">Description </label>
                            <Form.Control.Feedback type="value" style={{ color: 'red' }}>{errors.description}</Form.Control.Feedback>
                        </Form.Floating>
                    </div>
                </div>

                <div className='row m-4 d-flex'>
                    <div className='col-sm-5'>
                        <div className="form-check form-check-inline">
                            <Form.Group className="d-flex">
                                <Form.Label className="form-check-label" htmlFor="inlineRadio1" style={{ fontSize: '30px', marginRight: '20px',fontFamily:'Poppins' }}>Status</Form.Label>
                                <Form.Check
                                    required
                                    type="radio"
                                    name="status"
                                    id="status"
                                    value="paid"
                                    label="Paid"
                                    checked={employee.status === 'paid'}
                                    onChange={(e) =>
                                        setEmployee({ ...employee, status: e.target.value })
                                    }
                                    style={{color:'green',marginLeft:'10px',marginTop:'10px',fontFamily:'Poppins'}}
                                />
                                <Form.Check
                                    required
                                    type="radio"
                                    name="status"
                                    id="status"
                                    value="unpaid"
                                   
                                    label="Unpaid"
                                    checked={employee.status === 'unpaid'}
                                    onChange={(e) =>
                                        setEmployee({ ...employee, status: e.target.value })
                                    }
                                    style={{color:'red',marginLeft:'10px',marginTop:'10px',fontFamily:'Poppins'}}
                                />
                                <Form.Control.Feedback type="value" style={{ color: 'red',marginTop:'10px', marginLeft:'10px'}}>{errors.status}</Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-end'>
                    <div>
                        <button
                            type="button"
                            className="btn btn-danger"
                            style={{ width: '200px', margin: '20px' }}
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-success"
                            style={{ width: '200px', margin: '20px' }}
                            onClick={handleSubmit}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ExpenseAdd;
