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


function Employeeprofile() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');

    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/employee_register/`);
                setUsers(response.data);
                setFilteredUsers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredUsers(filtered);
        setCurrentPage(1); // Reset to the first page when search changes
    }, [search, users]);

    const pageCount = Math.ceil(filteredUsers.length / itemsPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const handleAddEmployee = () => {
        navigate('/AddEmployee');
    };

    const currentItems = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className='container-fluid'>
            <div className='card ' style={{ margin: '1%', borderColor: 'red', width: '98%',padding:'5px' }}>
                <div className='d-flex justify-content-between'>

                    <h1 className='prop2 mt-4'>Employee List</h1>
                    <div className='d-flex mt-4'>


                        <div className='card d-flex m-1' style={{ flexDirection: 'row', height: '30px' }}>
                            <IconContext.Provider value={{ className: 'react-icons', size: '1.7em', height: '10px' }} >
                                <GoFilter /><span>Filter</span>
                            </IconContext.Provider>
                        </div>
                        <Form.Select
                            // onChange={(e) => handleRoll(e.target.value)}
                            style={{ width: '200px', height: '40px' }}>
                            <option value=''>Designation  :</option>
                            <option value="designation">designation	</option>
                        </Form.Select>
                    </div>

                    <Form.Control
                        id="Search"
                        type="text"
                        placeholder="Search"
                        className='m-4 mt-4'
                        name="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            width: '250px',
                            height: '40px'
                        }}
                    />

                    <div >
                        <Button className=" addbuttons btn-danger mt-3 m-3" onClick={handleAddEmployee}>
                            <FiPlus /> Add Employee
                        </Button>
                    </div>
                </div>

                <div className='table-responsive'>
                    <Table responsive="xl" style={{ fontFamily: 'Roboto' }}>
                        <thead>
                            <tr>
                                <th>Sl. no.</th>
                                <th>Employee Code</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                                    <td>{user.employee_code}</td>
                                    <td><Link to={`/EmployeeDetails/${user.employee_code}`} style={{ textDecoration: 'black', color: 'black' }}>{user.name}</Link></td>
                                    <td>{user.designation}</td>
                                    <td>{user.status}</td>
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
            <div className='d-flex justify-content-center'>
                <Pagination currentPage={currentPage} totalPages={pageCount} handlePageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default Employeeprofile;
