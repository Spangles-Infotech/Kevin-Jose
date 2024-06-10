import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { LuPenLine } from 'react-icons/lu';
import { FiPlus } from 'react-icons/fi';
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import '../Style/Employeeprofile.css';
import { GoFilter } from "react-icons/go";
import { IconContext } from 'react-icons';

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
                {startIndex > 1 && (
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
                {startIndex + maxPageLinks <= totalPages && (
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

function Employeeprofile() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const accessToken = localStorage.getItem('access_token');

                const response = await axios.get(`http://127.0.0.1:8000/api/basic_employees/`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });

                if (Array.isArray(response.data.results)) {
                    setUsers(response.data.results);
                    setFilteredUsers(response.data.results);
                } else {
                    console.error('Invalid data format:', response.data);
                }
            } catch (error) {
                handleError(error);
            }
        };

        fetchData();
    }, []);
    const handleError = (error) => {
        if (error.response?.status === 401) {
            console.error('User unauthorized. Redirecting to login page...');
            navigate('/login');
        } else {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase()) &&
            (status === '' || user.status === status)
        );
        setFilteredUsers(filtered);
        setCurrentPage(1);
    }, [search, status, users]);

    const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const handleAddEmployee = () => {
        navigate('/AddEmployee');
    };

    const currentItems = Array.isArray(filteredUsers) ? filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

    const handleNavigation = (user) => {
        navigate(`/EmployeeDetails/${user.employee_code}`);
    };

    return (
        <div className='container-fluid'>
            <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '30px', padding: '10px' }}>
                <div className='row mt-5 mb-5 '>
                    <div className='col'>
                        <h4 style={{ marginLeft: '5%', marginTop: '3%' }}> <b> Employee List</b></h4>

                    </div>
                    <div className='col d-flex custom-select '>
                        <div className='card d-flex ' style={{ flexDirection: 'row', height: '36px', marginRight: '5px', padding: '1px' }}>
                            <IconContext.Provider value={{ className: 'react-icons', size: '1.5em', }} >
                                <GoFilter className='mt-1' /><span style={{ padding: '2px' }}>Filter</span>
                            </IconContext.Provider>
                        </div>
                        <Form.Select
                            style={{ width: '200px', height: '36px' }}
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value=''>Status :</option>
                            <option value="inactive">Inactive</option>
                            <option value="active">Active</option>
                        </Form.Select>
                    </div>
                    <div className='col d-flex justify-content-end'>
                        <Form.Control
                            id="Search"
                            type="text"
                            placeholder="Search"

                            name="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                width: 'auto',
                                height: '36px'
                            }}
                        />
                    </div>
                    <div className='col d-flex justify-content-end  '>
                        <Button className="addbuttons btn-danger " onClick={handleAddEmployee} style={{ height: '36px' }}>
                            <FiPlus className='' /> Add Employee
                        </Button>
                    </div>
                </div>
                <div className='table-responsive'>
                    <Table responsive="xl" >
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sl.no.</th>
                                <th>Employee code</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((user, index) => (
                                <tr key={user.id} style={{ cursor: 'pointer' }}>
                                    <td onClick={() => handleNavigation(user)}></td>
                                    <td onClick={() => handleNavigation(user)}>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                    <td onClick={() => handleNavigation(user)}>{user.employee_code}</td>
                                    <td style={{ textDecoration: 'black', color: 'black' }} onClick={() => handleNavigation(user)}>{user.name}</td>
                                    <td onClick={() => handleNavigation(user)}>{user.designation}</td>
                                    <td onClick={() => handleNavigation(user)}>{user.status}</td>
                                    <td>
                                        <Link to={`/AddEmployeUpdate/${user.employee_code}`} style={{ color: 'red', fontSize: '25px' }}>
                                            <LuPenLine />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            <div className='d-flex justify-content-center' style={{ marginBottom: '10%' }}>
                <Pagination currentPage={currentPage} totalPages={pageCount} handlePageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default Employeeprofile;
