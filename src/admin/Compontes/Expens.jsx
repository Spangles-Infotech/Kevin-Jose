
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { FiPlus } from 'react-icons/fi';
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import '../Style/Employeeprofile.css';
import { IconContext } from 'react-icons';
import { MdOutlineCurrencyRupee } from "react-icons/md";

function Pagination({ currentPage, totalPages, handlePageChange }) {
    const pageNumbers = [];
    const maxPageLinks = 4;
    const totalPagesToShow = Math.min(totalPages, maxPageLinks);

    let startIndex = currentPage - Math.floor(maxPageLinks / 2);
    startIndex = Math.max(startIndex, 1);

    for (let i = startIndex; i < startIndex + totalPagesToShow; i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                <li>
                    <button
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="page-link"
                    >
                        <FaAnglesLeft style={{ color: 'red' }} />
                    </button>
                </li>
                {startIndex > 1 && ( // Display ellipsis if startIndex is greater than 1
                    <li>
                        <span className="page-link">...</span>
                    </li>
                )}
                {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
                        <button
                            onClick={() => handlePageChange(pageNumber)}
                            className="page-link"
                            style={{ backgroundColor: pageNumber === currentPage ? 'red' : 'inherit' }}
                        >
                            {pageNumber}
                        </button>
                    </li>
                ))}
                {startIndex + maxPageLinks <= totalPages && ( // Display ellipsis if endIndex is less than totalPages
                    <li>
                        <span className="page-link">...</span>
                    </li>
                )}
                <li>
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="page-link"
                    >
                        <FaAnglesRight style={{ color: 'red' }} />
                    </button>
                </li>
            </ul>
        </nav>
    );
}
function Expens() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [paidAmount, setPaidAmount] = useState(0);
    const [unpaidAmount, setUnpaidAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [toDate, setToDate] = useState('');
    const [fromDate, setFromDate] = useState('');
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('access_token');
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/get_expenses/?fromDate=${fromDate}&toDate=${toDate}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }
                );
                setUsers(response.data);
                setFilteredUsers(response.data);
            } catch (error) {
                handleError(error);
            }
        };

        fetchData();
    }, [fromDate, toDate]);
    const handleError = (error) => {
        if (error.response?.status === 401) {
            console.error('User unauthorized. Redirecting to login page...');
            navigate('/login');
        } else {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const fetchExpenseSummary = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/get_expense_summary/?fromDate=${fromDate}&toDate=${toDate}`);
                const { paid_amount, unpaid_amount, total_amount } = response.data;

                setPaidAmount(paid_amount);
                setUnpaidAmount(unpaid_amount);
                setTotalAmount(total_amount);
            } catch (error) {
                console.error('Error fetching expense summary:', error);
            }
        };
        fetchExpenseSummary();
    }, [toDate, fromDate]);
    useEffect(() => {
        const fromDateObj = new Date(fromDate);
        const toDateObj = new Date(toDate);
        // Filter users based on search and date range
        const filtered = users.filter(user => {
            const userDate = new Date(user.date);
            // Check if the user date falls between From Date and To Date
            return user.description.toLowerCase().includes(search.toLowerCase()) &&
                (!fromDate || userDate <= fromDateObj) &&
                (!toDate || userDate >= toDateObj);
        });
        setFilteredUsers(filtered);
        setCurrentPage(1);
    }, [search, users, fromDate, toDate]);
    const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };
    const currentItems = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const handleAddex = () => {
        navigate('/ExpenseAdd');
    };
    const handlePrint = () => {
        const printableContent = document.getElementById('printable-content').innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printableContent;
        window.print();
        document.body.innerHTML = originalContent;
    };
    return (
        <>
            <div className='Expens' style={{ marginBottom: '45%' }}>
                <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '30px', padding: '10px' }}>
                    <div className='row mt-5 mb-5 '>
                        <div className='col'>
                            <h4 style={{ marginLeft: '5%', marginTop: '3%' }}> <b>Expense</b></h4>
                        </div>
                        <div className=' col' >
                            <Form.Floating style={{ height: '60px' }}> {/* Increased height for better visibility */}

                                <Form.Control
                                    id="toDate"
                                    type="date"
                                    name="toDate"
                                    placeholder="To Date"
                                    size='sm'
                                    value={toDate}
                                    style={{
                                        width: '250px',
                                        height: '18px', // Standard height for form controls
                                    }}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                                <Form.Label htmlFor='toDate'>To Date: </Form.Label> {/* Corrected label text */}
                            </Form.Floating>

                        </div>
                        <div className=' col'>
                            <Form.Floating >

                                <Form.Control
                                    id="fromDate"
                                    type="date"
                                    name="fromDate"
                                    value={fromDate}
                                    size='sm'
                                    style={{
                                        width: '250px',
                                    }}
                                    onChange={(e) => setFromDate(e.target.value)}

                                />
                                <Form.Label htmlFor='fromDate'>To: </Form.Label>
                            </Form.Floating>
                        </div>
                        <div className=' col'>
                            <Form.Control
                                id="Search"
                                size='sm'
                                type="text"
                                placeholder="Search"
                                name="Search"
                                value={search}

                                onChange={(e) => setSearch(e.target.value)}
                                style={{
                                    width: '250px',
                                    height: '50px'
                                }}
                            />
                        </div>
                        <div className='col-sm-2 '>
                            <Button className="  addbuttons btn-danger  " onClick={handleAddex} style={{ alignItems: 'end' }}>
                                <IconContext.Provider value={{ className: 'react-icons', size: '1.5em' }}>
                                    <div>
                                        <FiPlus /> Add Expense
                                    </div>
                                </IconContext.Provider>
                            </Button>
                        </div>
                    </div>
                    <div id="printable-content">
                        <Table responsive="xl" >
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sl. no.</th>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th>Sub category</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((user, index) => (
                                    <tr key={user.id}>
                                        <td></td>
                                        <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                        <td>{user.date}</td>
                                        <td>{user.category}</td>
                                        <td>{user.subcategory}</td>
                                        <td>{user.description}</td>

                                        <td>{user.amount}</td>
                                        {/* <td style={{
                                    color: user.status === true ? 'green' :
                                        user.status === false ? 'red' :
                                            'rgba(255, 122, 0, 1)'
                                }}>
                                    {user.status === true ? 'Paid' :
                                        user.status === false ? 'Unpaid' : ''}
                                </td> */}
                                        <td
                                            style={{
                                                color: user.status === 'paid' ? 'green' :
                                                    user.status === 'unpaid' ? 'red' :
                                                        'rgba(255, 122, 0, 1)',
                                            }}
                                        >
                                            {user.status === 'paid' ? 'Paid' :
                                                user.status === 'unpaid' ? 'Unpaid' : ''}
                                        </td>
                                        {/* <td>{user.status}</td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius:'30px',padding:'10px'}}>
                    <div className='d-flex justify-content-around p-5 mt-3'>
                        <h4> <b>Paid Amount:</b> <b style={{ color: 'rgba(255, 122, 0, 1)' }}><MdOutlineCurrencyRupee />{paidAmount}</b> </h4>
                        <h4><b>Unpaid Amount:</b> <b style={{ color: 'red' }}><MdOutlineCurrencyRupee />{unpaidAmount}</b></h4>
                        <h4> <b>Total Amount:</b> <b style={{ color: 'green' }}><MdOutlineCurrencyRupee />{totalAmount}</b></h4>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <Pagination currentPage={currentPage} totalPages={pageCount} handlePageChange={handlePageChange} />
                </div>
                <div className='row'>
                    <div className='col   d-flex justify-content-end'>
                        <button type="button" className="btn btn-danger" style={{ width: '200px', margin: '3%' }} onClick={handlePrint}>Print</button>
                        {/* <button type="button" className="btn btn-danger" style={{ width: '200px', margin: '3%' }}>Save</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expens
