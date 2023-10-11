import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      errors: {},
      isPopupOpen: false, // Track popup visibility

      formData: JSON.parse(localStorage.getItem("formData")) || [],
      selectedData: null, // Track the selected data for editing
      selectedIndex: -1, // Track the index of the selected data
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  // openPopup = () => {
  //   this.setState({ isPopupOpen: true });
  // };

  // // Add a method to close the popup
  // closePopup = () => {
  //   this.setState({ isPopupOpen: false });
  // };

  validateField = (fieldName, value) => {
    const errors = { ...this.state.errors };

    switch (fieldName) {
      case "firstName":
        if (!value.trim()) {
          errors.firstName = "First Name is required";
        } else {
          delete errors.firstName;
        }
        break;

      case "lastName":
        if (!value.trim()) {
          errors.lastName = "Last Name is required";
        } else {
          delete errors.lastName;
        }
        break;

      case "email":
        if (!value.trim()) {
          errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = "Invalid email address";
        } else {
          delete errors.email;
        }
        break;

      case "phoneNumber":
        if (!value.trim()) {
          errors.phoneNumber = "Phone Number is required";
        } else if (!/^\d{10}$/.test(value)) {
          errors.phoneNumber = "Invalid phone number (10 digits)";
        } else {
          delete errors.phoneNumber;
        }
        break;

      case "birthDate":
        if (!value.trim()) {
          errors.birthDate = "Birth Date is required";
        } else {
          delete errors.birthDate;
        }
        break;

      case "gender":
        if (!value) {
          errors.gender = "Please select a gender";
        } else {
          delete errors.gender;
        }
        break;

      case "address":
        if (!value.trim()) {
          errors.address = "Address is required";
        } else {
          delete errors.address;
        }
        break;

      case "country":
        if (!value) errors.country = "Please select Country.";

        break;

      case "city":
        if (!value.trim()) {
          errors.city = "City is required";
        } else {
          delete errors.city;
        }
        break;

      case "region":
        if (!value.trim()) {
          errors.region = "Region is required";
        } else {
          delete errors.region;
        }
        break;

      case "postalCode":
        if (!value.trim()) {
          errors.postalCode = "Postal Code is required";
        } else if (!/^\d{6}$/.test(value)) {
          errors.postalCode = "Invalid postal code (6 digits)";
        } else {
          delete errors.postalCode;
        }
        break;

      default:
        break;
    }

    this.setState({ errors });
  };

  validateForm = () => {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      birthDate,
      gender,
      address,
      country,
      city,
      region,
      postalCode,
    } = this.state;

    const errors = {};

    // Validate first name
    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    // Validate last name
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    // Validate email
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid Email address";
    } else {
      delete errors.email; // Email is valid, so remove any previous error
    }

    // Validate phone number (basic validation)
    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Invalid phone number(10 digits)";
    }

    // Validate birth date (basic validation)
    if (!birthDate.trim()) {
      errors.birthDate = "Birth Date is required";
    }
    //gender
    if (!gender) {
      errors.gender = "Please select a gender";
    }

    // Validate address
    if (!address.trim()) {
      errors.address = "Address is required";
    }

    // Validate country
    if (!country.trim()) {
      errors.country = "Country is required";
    }

    // Validate city
    if (!city.trim()) {
      errors.city = "City is required";
    }

    // Validate region
    if (!region.trim()) {
      errors.region = "Region is required";
    }

    // Validate postal code (basic validation)
    if (!postalCode.trim()) {
      errors.postalCode = "Postal Code is required";
    } else if (!/^\d{6}$/.test(postalCode)) {
      errors.postalCode = "Invalid Postal Code(6 digits)";
    }

    this.setState({ errors });

    // Return true if there are no errors, indicating a valid form
    return Object.keys(errors).length === 0;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      // Form is valid, store the form data
      const formDataItem = { ...this.state };
      delete formDataItem.errors;
      delete formDataItem.isPopupOpen;
      delete formDataItem.formData;

      const newFormData = [...this.state.formData, formDataItem];
      this.setState({ formData: newFormData, isPopupOpen: true });

      // Store form data in localStorage
      localStorage.setItem("formData", JSON.stringify(newFormData));
    } else {
      console.log("Form is invalid");
    }
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const isValid = this.validateForm();
  //   if (isValid) {
  //     // Form is valid, you can proceed with form submission or other actions
  //     console.log("Form Data:", this.state);
  //   } else {
  //     // Form is invalid, handle errors as needed
  //     console.log("Form is invalid");
  //   }
  // };

  openPopup = () => {
    this.setState({ isPopupOpen: true });
  };

  // Add a method to close the popup
  closePopup = () => {
    this.setState({
      isPopupOpen: false,
      selectedData: null,
      selectedIndex: -1,
    });
  };

  // Add a method to set the selected data for editing
  editData = (index) => {
    const selectedData = this.state.formData[index];
    this.setState({ selectedData, selectedIndex: index });
  };

  // Add a method to update the selected data
  updateData = () => {
    const { selectedData, selectedIndex, formData } = this.state;
    if (selectedData && selectedIndex !== -1) {
      // Update the data in formData at the selected index
      formData[selectedIndex] = selectedData;

      // Save the updated formData to localStorage
      localStorage.setItem("formData", JSON.stringify(formData));

      // Close the popup
      this.closePopup();
    }
  };

  // Add a method to delete a specific data entry
  deleteData = (index) => {
    const { formData } = this.state;
    formData.splice(index, 1);

    // Save the updated formData to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Close the popup
    this.setState({ formData });
  };

  render() {
    // const { errors } = this.state;
    const { errors, isPopupOpen, formData } = this.state;
    const { selectedData } = this.state;
    return (
      <>
        {this.state.isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={this.closePopup}>
                &times;
              </span>
              {selectedData ? (
                <div>
                  <h2>Edit Form Data</h2>
                  {/* Display the selected data in an editable form */}
                  <input
                    type="text"
                    value={selectedData.field1}
                    onChange={(e) =>
                      this.setState({
                        selectedData: {
                          ...selectedData,
                          field1: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    type="text"
                    value={selectedData.field2}
                    onChange={(e) =>
                      this.setState({
                        selectedData: {
                          ...selectedData,
                          field2: e.target.value,
                        },
                      })
                    }
                  />
                  {/* Add an "Update" button to save changes */}
                  <button onClick={this.updateData}>Update</button>
                </div>
              ) : (
                <div>
                  <h2>Form Data</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>Field 1</th>
                        <th>Field 2</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.map((data, index) => (
                        <tr key={index}>
                          <td>{data.field1}</td>
                          <td>{data.field2}</td>
                          <td>
                            <button onClick={() => this.editData(index)}>
                              Edit
                            </button>
                            <button onClick={() => this.deleteData(index)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {/* Add a button to close the popup */}
              <button onClick={this.closePopup}>Close</button>
            </div>
          </div>
        )}
        {/* {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={() => this.setState({ isPopupOpen: false })}>
                &times;
              </span>
              <h2>Form Data</h2>
              <table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Birth Date</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Region</th>
                    <th>Postal Code</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.firstName}</td>
                      <td>{data.lastName}</td>
                      <td>{data.email}</td>
                      <td>{data.phoneNumber}</td>
                      <td>{data.birthDate}</td>
                      <td>{data.gender}</td>
                      <td>{data.address}</td>
                      <td>{data.country}</td>
                      <td>{data.city}</td>
                      <td>{data.region}</td>
                      <td>{data.postalCode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )} */}

        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={this.closePopup}>
                &times;
              </span>
              <h2>Form Data</h2>
              <table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Birth Date</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Region</th>
                    <th>Postal Code</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.firstName}</td>
                      <td>{data.lastName}</td>
                      <td>{data.email}</td>
                      <td>{data.phoneNumber}</td>
                      <td>{data.birthDate}</td>
                      <td>{data.gender}</td>
                      <td>{data.address}</td>
                      <td>{data.country}</td>
                      <td>{data.city}</td>
                      <td>{data.region}</td>
                      <td>{data.postalCode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Add a button to close the popup */}
              <button onClick={this.closePopup}>Close</button>
            </div>
          </div>
        )}
        <div className="formbold-main-wrapper">
          <div className="formbold-form-wrapper">
            <div className="container">
              <div>
                <h3>Registration Form</h3>
              </div>

              <form className="form" onSubmit={this.handleSubmit}>
                <div className="column">
                  <div className="input-box">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      required
                    />
                    {errors.firstName && (
                      <div className="error-message">{errors.firstName}</div>
                    )}
                  </div>
                  <div className="input-box">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      onBlur={this.handleChange}
                      required
                    />
                    {errors.email && (
                      <div className="error-message">{errors.email}</div>
                    )}
                  </div>
                  <div className="input-box">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                      onBlur={this.handleChange}
                      required
                    />
                    {errors.phoneNumber && (
                      <div className="error-message">{errors.phoneNumber}</div>
                    )}
                  </div>
                </div>

                <div className="column">
                  <div className="input-box">
                    <label>Birth Date</label>
                    <input
                      type="date"
                      name="birthDate"
                      value={this.state.birthDate}
                      onChange={this.handleChange}
                      onBlur={this.handleChange}
                      required
                    />
                    {errors.birthDate && (
                      <div className="error-message">{errors.birthDate}</div>
                    )}
                  </div>
                  <div className="input-box">
                    <label>Gender</label>
                    <div className="radio-group">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                        onBlur={() =>
                          this.validateField("gender", this.state.gender)
                        }
                      />
                      <label htmlFor="male">Male</label>
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                        onBlur={() =>
                          this.validateField("gender", this.state.gender)
                        }
                      />
                      <label htmlFor="female">Female</label>
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        checked={this.state.gender === "other"}
                        onChange={this.handleChange}
                        onBlur={() =>
                          this.validateField("gender", this.state.gender)
                        }
                      />
                      <label htmlFor="other">Other</label>
                    </div>
                    {errors.gender && (
                      <div className="error-message">{errors.gender}</div>
                    )}
                  </div>
                </div>

                <div className="input-box address">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    placeholder="Street address"
                    required
                  />
                  {errors.address && (
                    <div className="error-message">{errors.address}</div>
                  )}
                  <div className="column">
                    <div className="select-box">
                      <select
                        name="country"
                        value={this.state.country}
                        onChange={this.handleChange}
                        required
                      >
                        <option hidden>Country</option>
                        <option>America</option>
                        <option>Japan</option>
                        <option>India</option>
                        <option>Nepal</option>
                      </select>
                      {errors.country && (
                        <div className="error-message">{errors.country}</div>
                      )}
                    </div>
                    <input
                      type="text"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                      placeholder="City"
                      required
                    />
                    {errors.city && (
                      <div className="error-message">{errors.city}</div>
                    )}
                  </div>
                  <div className="column">
                    <input
                      type="text"
                      name="region"
                      value={this.state.region}
                      onChange={this.handleChange}
                      placeholder="Region"
                      required
                    />
                    {errors.region && (
                      <div className="error-message">{errors.region}</div>
                    )}
                    <input
                      type="number"
                      name="postalCode"
                      value={this.state.postalCode}
                      onChange={this.handleChange}
                      placeholder="Postal Code"
                      required
                    />
                    {errors.postalCode && (
                      <div className="error-message">{errors.postalCode}</div>
                    )}
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
}

export default Form;
