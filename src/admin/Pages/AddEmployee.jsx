import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
////
const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        name: '',
        status: '',
        employee_code: '',
        user: { password: '' },
        photo: '',
        joining_date: '',
        gender: '',
        marital_status: '',
        designation: '',
        educations: [{ qualification: '', certification: { certification_file: '' } }],

        phone_number: '',
        alternative_phone_number: '',
        email_office: '',
        email_personal: '',
        blood_group: '',
        aadhar_number: '',
        account_number: '',
        ifsc_code: '',
        bank_name: '',
        pan_number: '',
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

    const [employeeCodeOptions, setEmployeeCodeOptions] = useState([]);
    const [educationCount, setEducationCount] = useState(1);

    const [errors, setErrors] = useState({
        name: '',
        employee_code: '',
        password: '',
        photo: '',
        joining_date: '',
        gender: '',
        marital_status: '',
        address_line1: '',
        city: '',
        permanent_city: '',
        present_district: '',
        permanent_district: '',
        present_state: '',
        permanent_state: '',
        present_country: '',
        permanent_country: '',
        present_zipcode: '',
        permanent_zipcode: '',
        certification_file: '',
        qualification: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployeeCodes = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/employee_code/");
                setEmployeeCodeOptions(response.data);
                setEmployeeCodeOptions([response.data.employee_code]);
            } catch (error) {
                console.error("Error fetching employee codes:", error);
            }
        };
        fetchEmployeeCodes();
    }, []);


    const validateForm = () => {
        const errors = {};


        const addressTypes = new Set();
        employee.addresses.forEach((address, index) => {
            if (addressTypes.has(address.address_type)) {
                errors[`addresses[${index}].address_type`] = "Address type must be unique.";
            } else {
                addressTypes.add(address.address_type);
            }
        });


        if (!employee.name.trim()) {
            errors.name = "Name is required";
        }
        if (!employee.employee_code.trim()) {
            errors.employee_code = "Employee code is required";
        }
        if (!employee.user.password.trim()) {
            errors.password = "Password is required";
        } else if (employee.user.password.trim().length < 8) {
            errors.password = "Password should be at least 8 characters long";
        }
        if (!employee.photo) {
            errors.photo = "Photo is required";
        }
        if (!employee.joining_date) {
            errors.joining_date = "Joining date is required";
        }
        if (!employee.gender) {
            errors.gender = "Gender is required";
        }
        if (!employee.marital_status) {
            errors.marital_status = "Marital status is required";
        }
        if (!employee.phone_number) {
            errors.phone_number = "Phone number is required";
        }
        if (!employee.alternative_phone_number) {
            errors.alternative_phone_number = "Phone number is required";
        }
        if (!employee.email_office) {
            errors.email_office = "Email is required";
        }
        if (!employee.email_personal) {
            errors.email_personal = "Email is required";
        }
        if (!employee.blood_group) {
            errors.blood_group = "Blood group is required";
        }
        if (!employee.aadhar_number) {
            errors.aadhar_number = "Aadhar number is required";
        }
        if (!employee.account_number) {
            errors.account_number = "Account number is required";
        }
        if (!employee.ifsc_code) {
            errors.ifsc_code = "IFSC Code is required";
        }
        if (!employee.bank_name) {
            errors.bank_name = "Bank name is required";
        }
        if (!employee.pan_number) {
            errors.pan_number = "Pan number is required";
        }
        if (!employee.designation) {
            errors.designation = "Designation  is required";
        }
        employee.educations.forEach((education, index) => {
            if (!education.qualification.trim()) {
                errors[`educations[${index}].qualification`] = "Qualification is required";
            }
            if (!education.certification || !education.certification.certification_file) {
                errors[`educations[${index}].certification_file`] = "Certification file is required";
            }
        });

        if (!employee || !employee.addresses || !employee.addresses[0] || !employee.addresses[0].address_line1) {
            errors.address_line1 = "Present address is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[1] || !employee.addresses[1].address_line1) {
            errors.permanent_address_line1 = "Permanent address is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[0] || !employee.addresses[0].city) {
            errors.present_city = "Present city is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[1] || !employee.addresses[1].city) {
            errors.permanent_city = "Permanent city is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[0] || !employee.addresses[0].district) {
            errors.present_district = "Present district is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[1] || !employee.addresses[1].district) {
            errors.permanent_district = "Permanent district is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[0] || !employee.addresses[0].state) {
            errors.present_state = "Present state is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[1] || !employee.addresses[1].state) {
            errors.permanent_state = "Permanent state is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[0] || !employee.addresses[0].country) {
            errors.present_country = "Present country is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[1] || !employee.addresses[1].country) {
            errors.permanent_country = "Permanent country is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[0] || !employee.addresses[0].zipcode) {
            errors.present_zipcode = "Present zipcode is required";
        }
        if (!employee || !employee.addresses || !employee.addresses[1] || !employee.addresses[1].zipcode) {
            errors.permanent_zipcode = "Permanent zipcode is required";
        }

        return errors;
    };

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
                    console.log(education, 'eee'); // Corrected console.log statement
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
            setErrors(prevErrors => ({
                ...prevErrors,
                password: ''
            }));
        } else {
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        try {
            const formData = new FormData();
            formData.append("name", employee.name);
            formData.append("employee_code", employee.employee_code);
            formData.append("photo", employee.photo);
            formData.append("designation", employee.designation);
            formData.append("joining_date", employee.joining_date);
            formData.append("gender", employee.gender);
            formData.append("marital_status", employee.marital_status);
            formData.append("phone_number", employee.phone_number);
            formData.append("alternative_phone_number", employee.alternative_phone_number);
            formData.append("email_office", employee.email_office);
            formData.append("email_personal", employee.email_personal);
            formData.append("blood_group", employee.blood_group);
            formData.append("aadhar_number", employee.aadhar_number);
            formData.append("account_number", employee.account_number);
            formData.append("ifsc_code", employee.ifsc_code);
            formData.append("bank_name", employee.bank_name);
            formData.append("pan_number", employee.pan_number);

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

            formData.append("user.password", employee.user.password);
            const response = await axios.post("http://127.0.0.1:8000/api/employee_register/", formData);
            console.log("POST request successful:", response.data); navigate('/Employeeprofile');

            toast.success("Employee added successfully");
            setEmployee(employee);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                toast.error(error.response.data.error);
            } else {
                console.error("Server error", error);
                toast.error("Failed to add employee. Please try again later.");
            }
        }
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
        // Check if the number of education fields is less than 6 before adding more
        if (employee.educations.length < 6) {
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                educations: [
                    ...prevEmployee.educations,
                    { qualification: '', certification: { certification_file: null } } // Add new education field
                ]
            }));
        } else {
            // Alert or handle the case when the maximum limit is reached
            console.log("Maximum limit reached");
        }
    };

    const handleRemoveItem = (index) => {
        setEmployee(prevEmployee => ({
            ...prevEmployee,
            educations: prevEmployee.educations.filter((_, i) => i !== index)
        }));
    };




     const handlCancle = () => {
        navigate('/Employeeprofile');
     };
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setEmployee({
            ...employee,
            [name]: files.length > 0 ? files[0] : null
        });
    };
    return (
        <div className='ADD' style={{ marginBottom: '10%' }}>
            <Form onSubmit={handleSubmit}>
                <div className='card m-2 p-5' style={{ borderColor: 'red' }}>
                    <h1 className='emploleelist'>Add Employee</h1>
                    <div className='row mt-3'>
                        <div className="col-sm-6">
                            <label htmlFor="inputName" className='mt-2 mb-2'>Name :</label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                name="name"
                                value={employee.name}
                                onChange={handleChange}
                                isInvalid={!!errors.name}
                            />
                            {errors.name && <div className="text-danger">{errors.name}</div>}


                        </div>
                        <div className="col-sm-6 ">
                            <label htmlFor="employee_code" className='mt-2 mb-2'>Employee code :</label>
                            <Form.Control as="select" id="employee_code" name="employee_code" isInvalid={!!errors.employee_code} value={employee.employee_code} onChange={handleChange}>
                                <option value="">Select Employee Code</option>
                                {Array.isArray(employeeCodeOptions) && employeeCodeOptions.map((code) => (
                                    <option key={code} value={code}>
                                        {code}
                                    </option>
                                ))}
                            </Form.Control>
                            {errors.employee_code && <div className="text-danger">{errors.employee_code}</div>}

                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className="col-sm-6">
                            <label htmlFor="password" className='mt-1 mb-1'>Password :</label>
                            <Form.Control
                                type="text"
                                placeholder="Enter password"
                                name="user.password"
                                value={employee.user.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password} // Check if there are errors for the name field
                            />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="col-sm-6 mt-4">


                            <Form.Group controlId='photo' >
                                <label htmlFor="files" className="profilphoto form-label btn  btn-outline-danger rounded p-1" style={{ width: '150px', height: '42px' }}>
                                    Upload Photo
                                </label>
                                <Form.Control
                                    type='file'
                                    id='files' style={{ display: 'none' }}
                                    name='photo'
                                    onChange={(e) => handleFileChange(e)}
                                    isInvalid={!!errors.photo}
                                />
                                {errors.photo && <div className="text-danger">{errors.photo}</div>}
                            </Form.Group>


                        </div>
                    </div>
                    <div className='row  mt-2'>
                        <div className='col-sm-6 '>
                            <label htmlFor="joining_date" className='mt-2 mb-2'>Joining Date :</label>
                            <Form.Control
                                id="joining_date"
                                type="date"
                                isInvalid={!!errors.joining_date}
                                value={employee.joining_date}
                                name='joining_date'
                                placeholder="joining_date"
                                onChange={handleChange}
                            />
                            {errors.joining_date && <div className="text-danger">{errors.joining_date}</div>}


                        </div>
                        <div className='col-sm-6 '>
                            <label htmlFor="gender" className='mt-2 mb-2'>Gender :</label>
                            <Form.Select
                                name='gender'
                                id="gender"
                                placeholder="gender"
                                onChange={handleChange}
                                value={employee.gender}
                                style={{ color: 'black' }}
                                isInvalid={!!errors.gender}
                            >
                                <option value="" >Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </Form.Select>
                            {errors.gender && <div className="text-danger">{errors.gender}</div>}

                        </div>
                    </div>
                    <div className='row mt-3 '>
                        <div className='col-sm-6'>
                            <label htmlFor="marital_status" className='mt-2 mb-2'>Marital Status :</label>
                            <Form.Select
                                name='marital_status'
                                id="marital_status"
                                onChange={handleChange}
                                value={employee.marital_status}
                                isInvalid={!!errors.marital_status}

                            >
                                <option value="" disabled>Marital Status</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                                <option value="widowed">Widowed</option>
                            </Form.Select>
                            {errors.marital_status && <div className="text-danger">{errors.marital_status}</div>}

                        </div>
                        <div className='col-sm-6 '>
                            <label htmlFor="designation" className='mt-2 mb-2'>Designation :</label>
                            <Form.Control
                                id="designation"
                                type="text"
                                isInvalid={!!errors.designation}
                                value={employee.designation}
                                name='designation'
                                placeholder="Enter designation"
                                onChange={handleChange}
                            />
                            {errors.designation && <div className="text-danger">{errors.designation}</div>}


                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-2 mb-2'>
                        <Link style={{ color: 'red', textAlign: 'center' }} className='d-flex justify-content-end' onClick={addMoreEducation}>
                            Add more
                        </Link>
                    </div>
                    {employee.educations.map((education, index) => (
                        <div key={index} className='row d-flex'>
                            <div className='col-sm-6'>

                                <label htmlFor="qualification" className='mt-1 mb-1'>Education Qualification :</label>
                                <Form.Control
                                    type="text"
                                    name={`educations[${index}].qualification`}
                                    placeholder="Enter qualification"
                                    value={education.qualification}
                                    onChange={(e) => handleEducationChange(index, e)}
                                    isInvalid={!!errors[`educations[${index}].qualification`]} // Setting isInvalid based on the error



                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors[`educations[${index}].qualification`]}
                                </Form.Control.Feedback>
                            </div>

                            <div className='col mt-4'>
                                <label htmlFor="certificationfile" className="profilphoto form-label btn  btn-outline-danger rounded p-1" style={{ width: '150px', height: '42px' }}>
                                    Certificate
                                </label>

                                <Form.Control
                                    type='file'
                                    id='certificationfile'
                                    name={`educations[${index}].certification_file`}
                                    onChange={(e) => handleCertificationFileChange(index, e)}
                                    style={{ width: '200px', display: 'none' }}
                                    isInvalid={!!errors[`educations[${index}].certification_file`]} // Setting isInvalid based on the error
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors[`educations[${index}].certification_file`]}
                                </Form.Control.Feedback>

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
                    ))}


                    <div className='row mt-3'>
                        <div className="col-sm-6 ">
                            <label htmlFor="phone_number" className='mt-2 mb-2'>
                                Phone Number :
                            </label>
                            <Form.Control id="phone_number" isInvalid={!!errors.phone_number} type="text" placeholder="Enter Phone Number" value={employee.phone_number}
                                onChange={(e) => {
                                    const inputVal = e.target.value.replace(/\D/g, '');
                                    const limitedInput = inputVal.slice(0, 10);
                                    setEmployee({ ...employee, phone_number: limitedInput });
                                }}

                            />
                            {errors.phone_number && <div className="text-danger">{errors.phone_number}</div>}
                        </div>
                        <div className='col-sm-6 '>
                            <label htmlFor="alternative_phone_number" className='mt-2 mb-2'> phone number :</label>
                            <Form.Control isInvalid={!!errors.alternative_phone_number} value={employee.alternative_phone_number} type="tel" id="alternative_phone_number" name="alternative_phone_number" placeholder="Alternative phone number"
                                onChange={(e) => {
                                    const inputVal = e.target.value.replace(/\D/g, '');
                                    const limitedInput = inputVal.slice(0, 10);
                                    setEmployee({ ...employee, alternative_phone_number: limitedInput });
                                }}
                            />
                            {errors.alternative_phone_number && <div className="text-danger">{errors.alternative_phone_number}</div>}
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col-sm-6">
                            <label htmlFor="email_office" className='mt-2 mb-2'>  Email :</label>
                            <Form.Control id="email_office" isInvalid={!!errors.email_office} type="email" placeholder="Enter Email" value={employee.email_office}
                                onChange={(e) =>
                                    setEmployee({ ...employee, email_office: e.target.value })
                                }
                            />
                            {errors.email_office && <div className="text-danger">{errors.email_office}</div>}
                        </div>
                        <div className='col-sm-6'>

                            <label htmlFor="email_personal" className='mt-2 mb-2'>  Email Personal :</label>
                            <Form.Control type="email" isInvalid={!!errors.email_personal} className="form-control " id="email_personal" placeholder="Email Personal " value={employee.email_personal}
                                onChange={(e) =>
                                    setEmployee({ ...employee, email_personal: e.target.value })
                                }
                            />
                            {errors.email_personal && <div className="text-danger">{errors.email_personal}</div>}
                        </div></div>
                    <div className='row mt-3'>
                        <div className='col-sm-6'>
                            <label htmlFor="blood_group" className='mt-2 mb-2'>Blood Group :</label>
                            <Form.Select id="blood_group" isInvalid={!!errors.blood_group} value={employee.blood_group} name='blood_group'
                                onChange={(e) =>
                                    setEmployee({ ...employee, blood_group: e.target.value })
                                }>
                                <option value="" >Select Blood Group</option>
                                <option value="A+">A Positive (A+)</option>
                            </Form.Select>
                            {errors.blood_group && <div className="text-danger">{errors.blood_group}</div>}
                        </div>
                        <div className='col-sm-6 '>
                            <label htmlFor="aadhar_number" className='mt-2 mb-2'>Aadhaar Number :</label>
                            <Form.Control isInvalid={!!errors.aadhar_number} value={employee.aadhar_number} type="number" placeholder="Aadhar number" id="aadhar_number" name='aadhar_number'
                                onChange={(e) => {
                                    const inputVal = e.target.value.replace(/\D/g, '');
                                    const limitedInput = inputVal.slice(0, 12);
                                    setEmployee({ ...employee, aadhar_number: limitedInput });
                                }}
                            />
                            {errors.aadhar_number && <div className="text-danger">{errors.aadhar_number}</div>}
                        </div> </div>



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
                                    isInvalid={!!errors.address_line1}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.address_line1}
                                </Form.Control.Feedback>
                                <label htmlFor="city" className='mt-2 mb-2'>City :</label>
                                <Form.Control
                                    type="text"
                                    name="addresses[0].city"
                                    placeholder="Enter present city"
                                    value={employee.addresses[0].city}
                                    onChange={handleChange}
                                    isInvalid={!!errors.present_city}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.present_city}
                                </Form.Control.Feedback>
                                <label htmlFor="password" className='mt-2 mb-2'>District :</label>
                                <Form.Control
                                    type="text"
                                    name="addresses[0].district"
                                    placeholder="Enter present district"
                                    value={employee.addresses[0].district}
                                    onChange={handleChange}
                                    isInvalid={!!errors.present_district}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.present_district}
                                </Form.Control.Feedback>
                                <label htmlFor="state" className='mt-2 mb-2'>State :</label>
                                <Form.Control
                                    type="text"
                                    name="addresses[0].state"
                                    placeholder="Enter present state"
                                    value={employee.addresses[0].state}
                                    onChange={handleChange}
                                    isInvalid={!!errors.present_state}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.present_state}
                                </Form.Control.Feedback>
                                <label htmlFor="country" className='mt-2 mb-2'>Country :</label>
                                <Form.Control
                                    type="text"
                                    name="addresses[0].country"
                                    placeholder="Enter present country"
                                    value={employee.addresses[0].country}
                                    onChange={handleChange}
                                    isInvalid={!!errors.present_country}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.present_country}
                                </Form.Control.Feedback>
                                <label htmlFor="zipcode" className='mt-2 mb-2'>Zipcode :</label>
                                <Form.Control
                                    type="text"
                                    name="addresses[0].zipcode"
                                    placeholder="Enter present zipcode"
                                    value={employee.addresses[0].zipcode}
                                    onChange={handleChange}
                                    isInvalid={!!errors.present_zipcode}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.present_zipcode}
                                </Form.Control.Feedback>
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
                                    isInvalid={!!errors.permanent_address_line1}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.permanent_address_line1}
                                </Form.Control.Feedback>
                                <label htmlFor="city" className='mt-2 mb-2'>City :</label>

                                <Form.Control
                                    type="text"
                                    name="addresses[1].city"
                                    placeholder="Enter permanent city"
                                    value={employee.addresses[1].city}
                                    onChange={handleChange}
                                    isInvalid={!!errors.permanent_city}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.permanent_city}
                                </Form.Control.Feedback>
                                <label htmlFor="district" className='mt-2 mb-2'>District :</label>
                                <Form.Control
                                    type="text"
                                    name="addresses[1].district"
                                    placeholder="Enter permanent district"
                                    value={employee.addresses[1].district}
                                    onChange={handleChange}
                                    isInvalid={!!errors.permanent_district}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.permanent_district}
                                </Form.Control.Feedback>
                                <label htmlFor="state" className='mt-2 mb-2'>State :</label>
                                <Form.Control
                                    type="text"
                                    name="addresses[1].state"
                                    placeholder="Enter permanent state"
                                    value={employee.addresses[1].state}
                                    onChange={handleChange}
                                    isInvalid={!!errors.permanent_state}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.permanent_state}
                                </Form.Control.Feedback>
                                <label htmlFor="country" className='mt-2 mb-2'>Country :</label>
                                <Form.Control
                                    type="text"
                                    name="addresses[1].country"
                                    placeholder="Enter permanent country"
                                    value={employee.addresses[1].country}
                                    onChange={handleChange}
                                    isInvalid={!!errors.permanent_country}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.permanent_country}
                                </Form.Control.Feedback>
                                <label htmlFor="zipcode" className='mt-2 mb-2'>Zipcode :</label>
                                <Form.Control
                                    type="text"
                                    name="addresses[1].zipcode"
                                    placeholder="Enter permanent zipcode"
                                    value={employee.addresses[1].zipcode}
                                    onChange={handleChange}
                                    isInvalid={!!errors.permanent_zipcode}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.permanent_zipcode}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-sm-6 '>
                            <label htmlFor="account_number">Account Number</label>
                            <Form.Control isInvalid={!!errors.account_number} value={employee.account_number} id="account_number" type="number" name='account_number' placeholder=" Account number"
                                onChange={(e) => setEmployee({ ...employee, account_number: e.target.value })}
                            />
                            {errors.account_number && <div className="text-danger">{errors.account_number}</div>}
                        </div>
                        <div className='col-sm-6 '>
                            <label htmlFor="ifsc_code">IFSC Code</label>
                            <Form.Control isInvalid={!!errors.ifsc_code} name='ifsc_code' id="ifsc_code" type="text" placeholder="IFC" value={employee.ifsc_code}
                                onChange={(e) => setEmployee({ ...employee, ifsc_code: e.target.value })}
                            />
                            {errors.ifsc_code && <div className="text-danger">{errors.ifsc_code}</div>}
                        </div>
                    </div>
                    <div className='row mt-3 mb-5'>
                        <div className='col-sm-6 '>

                            <label htmlFor="bank_name">Bank Name</label>
                            <Form.Control isInvalid={!!errors.bank_name} value={employee.bank_name} id="bank_name" type="text" placeholder="Bank Name" name='bank_name'
                                onChange={(e) => setEmployee({ ...employee, bank_name: e.target.value })}
                            />
                            {errors.bank_name && <div className="text-danger">{errors.bank_name}</div>}

                        </div>
                        <div className='col-sm-6 '>
                            <label htmlFor="pan_number">PAN Number</label>
                            <Form.Control isInvalid={!!errors.pan_number} id="pan_number" type="number" value={employee.pan_number} name='pan_number' placeholder="PanNumber"
                                onChange={(e) => setEmployee({ ...employee, pan_number: e.target.value })}
                            />
                            {errors.pan_number && <div className="text-danger">{errors.pan_number}</div>}

                        </div>
                    </div>



                    <div className='d-flex justify-content-end'>
                        <div>
                            <button type="button" className="btn btn-outline-danger" style={{ width: '200px', margin: '20px' }} onClick={handlCancle}>Discard </button>
                        </div>

                        <div>
                            <button type="Submit" className="btn btn-danger" style={{ width: '200px', margin: '20px' }} >
                                Add User
                            </button>
                        </div>
                    </div>
                </div>
            </Form >
        </div >

    );
};

export default AddEmployee;