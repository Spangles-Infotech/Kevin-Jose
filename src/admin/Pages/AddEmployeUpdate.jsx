import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import '../Style/Employeeprofile.css';
import { useParams } from 'react-router-dom';
import { Link } from '@nextui-org/react';
import Form from 'react-bootstrap/Form';

function AddEmployeUpdate() {
    const { employee_code } = useParams();
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('No file chosen');
    const [employee, setEmployee] = useState({
        name: '',
        photo: '',
        email_office: '',
        designation: '',
        employee_code: '',
        joining_date: '',
        gender: '',
        marital_status: '',
        phone_number: '',
        alternative_phone_number: '',
        blood_group: '',
        aadhar_number: '',
        account_number: '',
        ifsc_code: '',
        bank_name: '',
        pan_number: '',
        status: '',
        educations: [{ qualification: '', certification: { certification_file: null } }],

        addresses: [
            {
                address_type: 'present',
                address_line1: '',
                city: '',
                district: '',
                state: '',
                country: '',
                zipcode: ''
            },
            {
                address_type: 'permanent',
                address_line1: '',
                city: '',
                district: '',
                state: '',
                country: '',
                zipcode: ''
            }
        ]
    });

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/employee_detail/${employee_code}/`)
            .then(res => {

                // setFileName(photo ? photo : 'photo');
                setEmployee(res.data);
            })
            .catch(err => console.log(err));
    }, [employee_code]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name.startsWith("addresses")) {
            const parts = name.split(".");
            const index = parseInt(parts[0].substring(parts[0].indexOf("[") + 1, parts[0].indexOf("]")), 10);
            const field = parts[1];
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                addresses: prevEmployee.addresses.map((address, i) => {
                    if (i === index) {
                        return { ...address, [field]: value };
                    }
                    return address;
                })
            }));
        } else if (name.startsWith("educations")) {
            // code for handling education fields
            const parts = name.split(".");
            const index = parseInt(parts[0].substring(parts[0].indexOf("[") + 1, parts[0].indexOf("]")), 10);
            const subField = parts[1];
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                educations: prevEmployee.educations.map((education, i) => {
                    if (i === index) {
                        return { ...education, [subField]: value };
                    }
                    console.log(education, 'eee');
                    return education;
                })
            }));
        } else if (name === 'user.password') {
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                user: {
                    ...prevEmployee.user,
                    password: value
                }
            }));

        } else {
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                [name]: value
            }));
        }
    };
    const [newPhoto, setNewPhoto] = useState(null);
    const EmployeUpdate = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            if (newPhoto) {
                formData.append('photo', newPhoto);
            }
            formData.append("name", employee.name);
            formData.append("employee_code", employee.employee_code);
            // formData.append("photo", employee.photo); 

            // Append other form data fields here

            employee.addresses.forEach((address, index) => {
                formData.append(`addresses[${index}]address_type`, address.address_type);
                formData.append(`addresses[${index}]address_line1`, address.address_line1);
                formData.append(`addresses[${index}]city`, address.city);
                formData.append(`addresses[${index}]district`, address.district);
                formData.append(`addresses[${index}]state`, address.state);
                formData.append(`addresses[${index}]country`, address.country);
                formData.append(`addresses[${index}]zipcode`, address.zipcode);
            });

            employee.educations.forEach((education, index) => {
                formData.append(`educations[${index}]qualification`, education.qualification);
                formData.append(`educations[${index}]certification.certification_file`, education.certification.certification_file); // Error occurs here
                console.log(education, 'co');
            });

            // Append other form data fields here

            const response = await axios.put(`http://127.0.0.1:8000/api/employee_detail/${employee_code}/`, formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };
const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setNewPhoto(selectedFile);
    setFileName(selectedFile.name); // Update file name display
    setEmployee(prevEmployee => ({
        ...prevEmployee,
        photo: URL.createObjectURL(selectedFile) // Set photo state with URL
    }));
};



    const handleEducationChange = (index, event) => {
        const { name, value } = event.target;
        setEmployee(prevEmployee => ({
            ...prevEmployee,
            educations: prevEmployee.educations.map((education, i) => {
                if (i === index) {
                    return {
                        ...education,
                        qualification: value // Update qualification field
                    };
                }
                return education;
            })
        }));
    };

    const handleCertificationFileChange = (index, event) => {
        const { name, files } = event.target;
        setEmployee(prevEmployee => ({
            ...prevEmployee,
            educations: prevEmployee.educations.map((education, i) => {
                if (i === index) {
                    return { ...education, certification: { certification_file: files[0] } };
                }
                return education;
            })
        }));
    };


    const addMoreEducation = () => {
        if (employee.educations.length < 6) {
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                educations: [
                    ...prevEmployee.educations,
                    { qualification: '', certification: { certification_file: null } } // Add new education field
                ]
            }));
        } else {

            console.log("Maximum limit reached");
        }
    };

    const handleRemoveItem = (index) => {
        setEmployee(prevEmployee => ({
            ...prevEmployee,
            educations: prevEmployee.educations.filter((_, i) => i !== index)
        }));
    };


    return (
        <div className='card m-2 p-5' style={{ borderColor: 'red' }}>
            <h1 className='emploleelist' > Employee Update</h1>
            <div className='row'>
                <div className='col-sm-6'>
                    <label htmlFor="name"className='mt-2 mb-2'>Name:</label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        id="name"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />


                </div>
                <div className='col-sm-6'>
                    <label htmlFor="employee_code" className='mt-2 mb-2'>Employee Code:</label>
                    <Form.Control
                        type="text"
                        placeholder="Employee Code"
                        id="employee_code"
                        name="employee_code"
                        value={employee.employee_code}
                        onChange={handleChange}
                        disabled
                    />


                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <label htmlFor="designation" className='mt-2 mb-2'> Designation:</label>
                    <Form.Control
                        type="text"
                        placeholder="Designation"
                        id="designation"
                        name="designation"
                        value={employee.designation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='col-sm-6'>

                    <label  className='mt-2 mb-2'>Photo:</label>
                    <Form.Control
                        type="file"
                        name='photo'
                        onChange={handleFileChange}
                    />
                    <div className='col'>
                    {employee.photo && <img src={employee.photo} alt="Employee Photo" style={{ width: '50px' }} />}

                    </div>


                </div>
            </div>
            <div className='row  mt-2'>
                <div className='col-sm-6 '>
                    <label htmlFor="gender" className='mt-2 mb-2'>Gender :</label>
                    <Form.Select
                        name='gender'
                        id="gender"
                        placeholder="gender"
                        onChange={handleChange}
                        value={employee.gender}
                        style={{ color: 'black' }}
                    >
                        <option value="" >Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      
                    </Form.Select>

                </div>
                <div className='col-sm-6'>
                    <label htmlFor="marital_status" className='mt-2 mb-2'>Marital Status :</label>
                    <Form.Select
                        name='marital_status'
                        id="marital_status"
                        onChange={handleChange}
                        value={employee.marital_status}

                    >
                        <option value="" >Marital Status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>

                    </Form.Select>


                </div>
            </div>
            <div className='d-flex justify-content-center mt-2 mb-2'>
                <Link style={{ textDecoration: 'none' }} className='d-flex justify-content-end' onClick={addMoreEducation}>
                    <span style={{ color: 'red' }}>Add more</span>
                </Link>
            </div>
            {
                employee.educations.map((education, index) => (
                    <div key={index} className='row d-flex'>
                        <div className='col-sm-6'>
                            <label htmlFor={`qualification_${index}`} className='mt-2 mb-2'>Education Qualification :</label>
                            <Form.Control
                                type="text"
                                name={`educations[${index}].qualification`}
                                placeholder="Enter qualification"
                                value={education.qualification}
                                onChange={(e) => handleEducationChange(index, e)}
                                required
                            />


                        </div>
                        <div className='col'>
                            <label htmlFor={`certification_file_${index}`} className='mt-2 mb-2'>Certificate:</label>
                            <Form.Control
                                type='file'
                                name={`educations[${index}].certification_file`}
                                id={`certification_file_${index}`}
                                onChange={(e) => handleCertificationFileChange(index, e)}
                                style={{ width: '300px' }}
                                required
                            />
                        </div>
                        <div className='col mt-4'>
                            {index !== employee.educations.length - 1 && ( // Render remove button for all fields except the last one
                                <button
                                    className='btn btn-danger d-flex justify-content-end '
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    </div>
                ))
            }

            <div className='row mt-3'>
                <div className="col-sm-6 ">
                    <label htmlFor="phone_number">
                        Phone Number :
                    </label>
                    <Form.Control
                        type="text"
                        id="phone_number"
                        required
                        placeholder="Enter Phone Number"
                        value={employee.phone_number}
                        onChange={(e) => {
                            const inputVal = e.target.value.replace(/\D/g, '');
                            const limitedInput = inputVal.slice(0, 10); // Limit to 10 characters
                            setEmployee({ ...employee, phone_number: limitedInput }); // Update state
                        }}
                    />



                </div>
                <div className='col-sm-6 '>
                    <label htmlFor="alternative_phone_number"> phone number :</label>
                    <Form.Control
                        type="tel"

                        id="alternative_phone_number"
                        name="alternative_phone_number"

                        placeholder="Alternative phone number"
                        value={employee.alternative_phone_number}


                        onChange={(e) => {
                            const inputVal = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                            const limitedInput = inputVal.slice(0, 10); // Limit to 10 characters
                            setEmployee({ ...employee, alternative_phone_number: limitedInput }); // Update state
                        }}
                    />

                </div>
            </div>
            <div className='row mt-3 mb-3'>
                <div className="col-sm-6">
                    <label htmlFor="email_office">  Email :</label>
                    <Form.Control
                        type="email"
                        id="email_office"
                        name='email_office'
                        placeholder="Enter Email"
                        value={employee.email_office}
                        onChange={handleChange}
                    />

                </div>
                <div className='col-sm-6'>
                    <label htmlFor="email_personal">  Email Personal :</label>
                    <Form.Control
                        type="email"
                        className="form-control "
                        id="email_personal"
                        name='email_personal'
                        placeholder="Email Personal "
                        value={employee.email_personal}
                        onChange={handleChange}
                    />


                </div></div>
            <div className='row '>
                <div className='col-sm-6'>
                    <label htmlFor="blood_group">Blood Group :</label>
                    <Form.Select
                        id="blood_group"
                        value={employee.blood_group}
                        name='blood_group'
                        required
                        onChange={handleChange}

                    >
                        <option value="" disabled>Select Blood Group</option>
                        <option value="A+">A Positive (A+)</option>
                        <option value="A-">A Negative (A-)</option>
                        <option value="B+">B Positive (B+)</option>
                        <option value="B-">B Negative (B-)</option>
                        <option value="AB+">AB Positive (AB+)</option>
                        <option value="AB-">AB Negative (AB-)</option>
                        <option value="O+">O Positive (O+)</option>
                        <option value="O-">O Negative (O-)</option>
                    </Form.Select>


                </div>
                <div className='col-sm-6'>
                    <label htmlFor="aadhar_number">Aadhaar Number :</label>
                    <Form.Control

                        value={employee.aadhar_number}
                        type="number"
                        id="aadhar_number"
                        name='aadhar_number'
                        placeholder="Aadhar number"


                        onChange={(e) => {
                            const inputVal = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                            const limitedInput = inputVal.slice(0, 12); // Limit to 10 characters
                            setEmployee({ ...employee, aadhar_number: limitedInput }); // Update state
                        }}
                    />

                </div>
            </div>


            <div className='row mt-3'>
                <div className="col-sm-6">
                    <Form.Group controlId="present">
                        <Form.Label >Present Address </Form.Label>
                        <Form.Control
                            type="text"
                            name="addresses[0].address_line1"
                            placeholder="Enter present address"
                            value={employee.addresses[0].address_line1}
                            onChange={handleChange}

                        />

                        <label htmlFor="city" className='mt-2 mb-2'>City :</label>
                        <Form.Control
                            type="text"
                            name="addresses[0].city"
                            placeholder="Enter present city"
                            value={employee.addresses[0].city}
                            onChange={handleChange}

                        />

                        <label htmlFor="password" className='mt-2 mb-2'>District :</label>
                        <Form.Control
                            type="text"
                            name="addresses[0].district"
                            placeholder="Enter present district"
                            value={employee.addresses[0].district}
                            onChange={handleChange}

                        />

                        <label htmlFor="state" className='mt-2 mb-2'>State :</label>
                        <Form.Control
                            type="text"
                            name="addresses[0].state"
                            placeholder="Enter present state"
                            value={employee.addresses[0].state}
                            onChange={handleChange}

                        />

                        <label htmlFor="country" className='mt-2 mb-2'>Country :</label>
                        <Form.Control
                            type="text"
                            name="addresses[0].country"
                            placeholder="Enter present country"
                            value={employee.addresses[0].country}
                            onChange={handleChange}

                        />

                        <label htmlFor="zipcode" className='mt-2 mb-2'>Zipcode :</label>
                        <Form.Control
                            type="text"
                            name="addresses[0].zipcode"
                            placeholder="Enter present zipcode"
                            value={employee.addresses[0].zipcode}
                            onChange={handleChange}

                        />

                    </Form.Group>
                </div>
                <div className='col-sm-6'>
                    <Form.Group controlId="permanent">
                        <Form.Label>Permanent Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="addresses[1].address_line1"
                            placeholder="Enter permanent address"
                            value={employee.addresses[1].address_line1}
                            onChange={handleChange}

                        />

                        <label htmlFor="city" className='mt-2 mb-2'>City :</label>

                        <Form.Control
                            type="text"
                            name="addresses[1].city"
                            placeholder="Enter permanent city"
                            value={employee.addresses[1].city}
                            onChange={handleChange}

                        />

                        <label htmlFor="district" className='mt-2 mb-2'>District :</label>
                        <Form.Control
                            type="text"
                            name="addresses[1].district"
                            placeholder="Enter permanent district"
                            value={employee.addresses[1].district}
                            onChange={handleChange}

                        />

                        <label htmlFor="state" className='mt-2 mb-2'>State :</label>
                        <Form.Control
                            type="text"
                            name="addresses[1].state"
                            placeholder="Enter permanent state"
                            value={employee.addresses[1].state}
                            onChange={handleChange}

                        />

                        <label htmlFor="country" className='mt-2 mb-2'>Country :</label>
                        <Form.Control
                            type="text"
                            name="addresses[1].country"
                            placeholder="Enter permanent country"
                            value={employee.addresses[1].country}
                            onChange={handleChange}

                        />

                        <label htmlFor="zipcode" className='mt-2 mb-2'>Zipcode :</label>
                        <Form.Control
                            type="text"
                            name="addresses[1].zipcode"
                            placeholder="Enter permanent zipcode"
                            value={employee.addresses[1].zipcode}
                            onChange={handleChange}

                        />

                    </Form.Group>
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col-sm-6 '>
                    <label htmlFor="account_number" className='mt-2 mb-2'>Account Number :</label>

                    <Form.Control
                        required
                        id="account_number"
                        type="number"
                        value={employee.account_number}
                        name='account_number'
                        placeholder=" Account number"
                        onChange={handleChange}
                    />

                </div>
                <div className='col-sm-6 '>
                    <label htmlFor="ifsc_code" className='mt-2 mb-2'>IFSC Code :</label>
                    <Form.Control
                        id="ifsc_code"
                        type="text"
                        required
                        name='ifsc_code'
                        placeholder="IFC"
                        value={employee.ifsc_code}
                        onChange={handleChange}
                    />


                </div>
            </div>
            <div className='row mt-3 mb-5'>
                <div className='col-sm-6 '>
                    <label htmlFor="bank_name" className='mt-2 mb-2'>Bank Name :</label>
                    <Form.Control
                        id="bank_name"
                        type="text"
                        required
                        value={employee.bank_name}
                        name='bank_name'
                        placeholder="Bank Name"
                        onChange={handleChange}
                    />


                </div>
                <div className='col-sm-6 '>
                    <label htmlFor="pan_number" className='mt-2 mb-2'>PAN Number :</label>
                    <Form.Control
                        id="pan_number"
                        type="number"
                        required
                        value={employee.pan_number}
                        name='pan_number'
                        placeholder="PanNumber"
                        onChange={handleChange}
                    />


                </div>
            </div>


            <div className='mb-5 d-flex justify-content-end'>
                <button type="button" onClick={EmployeUpdate} className="btn btn-danger" style={{ width: '200px', margin: '20px' }}>
                    Update Employess
                </button>
            </div>
        </div >
    );
}

export default AddEmployeUpdate;
