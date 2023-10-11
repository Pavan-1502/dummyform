// import React, { useState, useEffect } from "react";
// import "./Form.css";

// function Form() {
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     birthDate: "",
//     gender: "",
//     address: "",
//     country: "",
//     city: "",
//     region: "",
//     postalCode: "",
//   };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//     const handleChange = (e) => {
//       const { name, value } = e.target;

//       // Update the form values
//       setFormValues({ ...formValues, [name]: value });

//       // Validate the individual field and update the error message
//       const fieldErrors = { ...formErrors };
//       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//       switch (name) {
//         case "firstName":
//           fieldErrors.firstName = value ? "" : "First Name is required";
//           break;
//         case "lastName":
//           fieldErrors.lastName = value ? "" : "Last Name is required";
//           break;
//         case "email":
//           fieldErrors.email = value
//             ? regex.test(value)
//               ? ""
//               : "Invalid Email address"
//             : "Email is required";
//           break;
//         case "phoneNumber":
//           fieldErrors.phoneNumber = value
//             ? /^\d{10}$/.test(value)
//               ? ""
//               : "Invalid phone number (10 digits)"
//             : "Phone Number is required";
//           break;
//         case "birthDate":
//           fieldErrors.birthDate = value ? "" : "Birth Date is required";
//           break;
//         case "gender":
//           fieldErrors.gender = value ? "" : "Gender is required";
//           break;
//         case "address":
//           fieldErrors.address = value ? "" : "Address is required";
//           break;
//         case "country":
//           fieldErrors.country = value ? "" : "Country is required";
//           break;
//         case "city":
//           fieldErrors.city = value ? "" : "City is required";
//           break;
//         case "region":
//           fieldErrors.region = value ? "" : "Region is required";
//           break;
//         case "postalCode":
//           fieldErrors.postalCode = value ? "" : "Postal Code is required";
//           break;
//         default:
//           break;
//       }

//       // Set the updated error messages
//       setFormErrors(fieldErrors);
//     };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormValues({ ...formValues, [name]: value });
// //   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log("Form data is Valid", formValues);
//     }
//   }, [formErrors, formValues, isSubmit]);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!values.firstName) {
//       errors.firstName = "First Name is required";
//     }
//     if (!values.lastName) {
//       errors.lastName = "Last Name is required";
//     }

//     if (!values.email) {
//       errors.email = "Email is required";
//     } else if (!regex.test(values.email)) {
//       errors.email = "Invalid Email address";
//     }

//     if (!values.phoneNumber) {
//       errors.phoneNumber = "Phone Number is required";
//     } else if (!/^\d{10}$/.test(values.phoneNumber)) {
//       errors.phoneNumber = "Invalid phone number (10 digits)";
//     }

//     if (!values.birthDate) {
//       errors.birthDate = "Birth Date is required";
//     }

//     if (!values.gender) {
//       errors.gender = "Gender is required";
//     }

//     if (!values.address) {
//       errors.address = "Address is required";
//     }

//     if (!values.country) {
//       errors.country = "Country is required";
//     }

//     if (!values.city) {
//       errors.city = "City is required";
//     }

//     if (!values.region) {
//       errors.region = "Region is required";
//     }

//     if (!values.postalCode) {
//       errors.postalCode = "Postal Code is required";
//     }

//     return errors;
//   };

//   return (
//     <>
//       <div className="formbold-main-wrapper">
//         {Object.keys(formErrors).length === 0 && isSubmit ? (
//           <div className="ui message success">Signed in Successfully</div>
//         ) : (
//            ""
//         )}

//         <div className="formbold-form-wrapper">
//           <div className="container">
//             <div>
//               <h3>Registration Form</h3>
//             </div>

//             <form className="form" onSubmit={handleSubmit}>
//               <div className="column">
//                 <div className="input-box">
//                   <label>First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={formValues.firstName}
//                     onChange={handleChange}
//                   />

//                   <p className="error-message">{formErrors.firstName}</p>
//                 </div>
//                 <div className="input-box">
//                   <label className="top">Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={formValues.lastName}
//                     onChange={handleChange}
//                   />

//                   <p className="error-message">{formErrors.lastName}</p>
//                 </div>
//               </div>

//               <div className="column">
//                 <div className="input-box">
//                   <label>Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={formValues.email}
//                     onChange={handleChange}
//                   />

//                   <p className="error-message">{formErrors.email}</p>
//                 </div>
//                 <div className="input-box">
//                   <label>Phone Number</label>
//                   <input
//                     type="number"
//                     name="phoneNumber"
//                     value={formValues.phoneNumber}
//                     onChange={handleChange}
//                   />
//                   <p className="error-message">{formErrors.phoneNumber}</p>
//                 </div>
//               </div>

//               <div className="column">
//                 <div className="input-box">
//                   <label>Birth Date</label>
//                   <input
//                     type="date"
//                     name="birthDate"
//                     value={formValues.birthDate}
//                     onChange={handleChange}
//                   />
//                   <p className="error-message">{formErrors.birthDate}</p>
//                 </div>

//                 <div className="input-box">
//                   <label className="top">Gender</label>
//                   <div className="radio-group">
//                     <input
//                       type="radio"
//                       id="male"
//                       name="gender"
//                       value="male"
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="male">Male</label>
//                     <input
//                       type="radio"
//                       id="female"
//                       name="gender"
//                       value="female"
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="female">Female</label>
//                     <input
//                       type="radio"
//                       id="other"
//                       name="gender"
//                       value="other"
//                       onChange={handleChange}
//                     />
//                     <label htmlFor="other">Other</label>
//                   </div>
//                   <p className="error-message">{formErrors.gender}</p>
//                 </div>
//               </div>

//               <div className="input-box ">
//                 <label>Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Street address"
//                   value={formValues.address}
//                   onChange={handleChange}
//                 />
//                 <p className="error-message">{formErrors.address}</p>

//                 <div className="column">
//                   <div className="select-box">
//                     <select
//                       type="text"
//                       name="country"
//                       placeholder="Country"
//                       value={formValues.country}
//                       onChange={handleChange}
//                     >
//                       <option hidden>Country</option>
//                       <option>America</option>
//                       <option>Japan</option>
//                       <option>India</option>
//                       <option>Nepal</option>
//                     </select>

//                     <p className="error-message">{formErrors.country}</p>
//                   </div>
//                   <div className="select-box">
//                     <input
//                       type="text"
//                       name="city"
//                       placeholder="City"
//                       value={formValues.city}
//                       onChange={handleChange}
//                     />
//                     <p className="error-message">{formErrors.city}</p>
//                   </div>
//                 </div>

//                 <div className="column">
//                   <div className="input-box">
//                     <input
//                       type="text"
//                       name="region"
//                       placeholder="Region"
//                       value={formValues.region}
//                       onChange={handleChange}
//                     />

//                     <p className="error-message">{formErrors.region}</p>
//                   </div>
//                   <div className="input-box">
//                     <input
//                       type="number"
//                       name="postalCode"
//                       placeholder="Postal Code"
//                       value={formValues.postalCode}
//                       onChange={handleChange}
//                     />
//                     <p className="error-message">{formErrors.postalCode}</p>
//                   </div>
//                 </div>
//               </div>

//               <button type="submit">Register</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Form;




//NEWLY UPDATED CODE TILL THE VALIDATION OF THE FORM

import React, { useState, useEffect } from "react";
import "./Form.css";

function Form() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    address: "",
    country: "",
    city: "",
    region: "",
    postalCode: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const validateField = (name, value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (name) {
      case "firstName":
        errors.firstName = value ? "" : "First Name is required";
        break;
      case "lastName":
        errors.lastName = value ? "" : "Last Name is required";
        break;
      case "email":
        errors.email = value
          ? regex.test(value)
            ? ""
            : "Invalid Email address"
          : "Email is required";
        break;
      case "phoneNumber":
        errors.phoneNumber = value
          ? /^\d{10}$/.test(value)
            ? ""
            : "Invalid phone number (10 digits)"
          : "Phone Number is required";
        break;
      case "birthDate":
        errors.birthDate = value ? "" : "Birth Date is required";
        break;
      case "gender":
        errors.gender = value ? "" : "Gender is required";
        break;
      case "address":
        errors.address = value ? "" : "Address is required";
        break;
      case "country":
        errors.country = value ? "" : "Country is required";
        break;
      case "city":
        errors.city = value ? "" : "City is required";
        break;
      case "region":
        errors.region = value ? "" : "Region is required";
        break;
      case "postalCode":
        errors.postalCode = value ? "" : "Postal Code is required";
        break;
      default:
        break;
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the form values
    setFormValues({ ...formValues, [name]: value });

    // Validate the individual field and update the error message
    const fieldErrors = validateField(name, value);

    // Set the updated error message only for the specific field
    setFormErrors({ ...formErrors, ...fieldErrors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldValidationErrors = validate(formValues);
    setFormErrors(fieldValidationErrors);
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Form data is Valid", formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};

    for (const field in values) {
      if (!values[field]) {
        errors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    }

    return errors;
  };

  return (
    <>
      <div className="formbold-main-wrapper">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Registered Successfully</div>
        ) : (
          ""
        )}
        
        <div className="formbold-form-wrapper">
          <div className="container">
            <div>
              <h3>Registration Form</h3>
            </div>

            <form className="form" onSubmit={handleSubmit}>
              <div className="column">
                <div className="input-box">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                  />

                  <p className="error-message">{formErrors.firstName}</p>
                </div>
                <div className="input-box">
                  <label className="top">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                  />

                  <p className="error-message">{formErrors.lastName}</p>
                </div>
              </div>

              <div className="column">
                <div className="input-box">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />

                  <p className="error-message">{formErrors.email}</p>
                </div>
                <div className="input-box">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                  />
                  <p className="error-message">{formErrors.phoneNumber}</p>
                </div>
              </div>

              <div className="column">
                <div className="input-box">
                  <label>Birth Date</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={formValues.birthDate}
                    onChange={handleChange}
                  />
                  <p className="error-message">{formErrors.birthDate}</p>
                </div>

                <div className="input-box">
                  <label className="top">Gender</label>
                  <div className="radio-group">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      onChange={handleChange}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                      onChange={handleChange}
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                  <p className="error-message">{formErrors.gender}</p>
                </div>
              </div>

              <div className="input-box ">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Street address"
                  value={formValues.address}
                  onChange={handleChange}
                />
                <p className="error-message">{formErrors.address}</p>

                <div className="column">
                  <div className="select-box">
                    <select
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={formValues.country}
                      onChange={handleChange}
                    >
                      <option hidden>Country</option>
                      <option>America</option>
                      <option>Japan</option>
                      <option>India</option>
                      <option>Nepal</option>
                    </select>

                    <p className="error-message">{formErrors.country}</p>
                  </div>
                  <div className="select-box">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formValues.city}
                      onChange={handleChange}
                    />
                    <p className="error-message">{formErrors.city}</p>
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <input
                      type="text"
                      name="region"
                      placeholder="Region"
                      value={formValues.region}
                      onChange={handleChange}
                    />

                    <p className="error-message">{formErrors.region}</p>
                  </div>
                  <div className="input-box">
                    <input
                      type="number"
                      name="postalCode"
                      placeholder="Postal Code"
                      value={formValues.postalCode}
                      onChange={handleChange}
                    />
                    <p className="error-message">{formErrors.postalCode}</p>
                  </div>
                </div>
              </div>

              <button type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
