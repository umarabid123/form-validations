import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        name: '',
        country: '',
        zipCode: '',
        email: '',
        gender: '',
        language: [],
        about: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                language: checked
                    ? [...formData.language, value]
                    : formData.language.filter((lang) => lang !== value),
            });
        } else if (type === 'radio') {
            setFormData({
                ...formData,
                gender: value,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const validate = () => {
        let formErrors = {};

        if (!formData.userId || formData.userId.length < 5 || formData.userId.length > 12) {
            formErrors.userId = 'Required and must be of length 5 to 12.';
        }
        if (!formData.password || formData.password.length < 7 || formData.password.length > 12) {
            formErrors.password = 'Required and must be of length 7 to 12.';
        }
        if (!formData.name || !/^[a-zA-Z]+$/.test(formData.name)) {
            formErrors.name = 'Required and alphabets only.';
        }
        if (!formData.country) {
            formErrors.country = 'Required. Must select a country.';
        }
        if (!formData.zipCode || !/^\d+$/.test(formData.zipCode)) {
            formErrors.zipCode = 'Required. Must be numeric only.';
        }
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            formErrors.email = 'Required. Must be a valid email.';
        }
        if (!formData.gender) {
            formErrors.gender = 'Required.';
        }
        if (formData.language.length === 0) {
            formErrors.language = 'Required.';
        }

        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();

        if (Object.keys(formErrors).length === 0) {
            setErrors({}); // Clear errors
            alert('Form submitted successfully!');
            console.log('Form Data: ', formData);
        } else {
            setErrors(formErrors); // Set errors
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
            <div className="max-w-lg w-full bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center text-white mb-8">Registration Form</h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Flex Container for Inputs */}
                    <div className="flex items-center space-x-4">
                        <label className="block text-sm font-medium text-white w-32">User ID: *</label>
                       <div>
                         <input
                            type="text"
                            name="userId"
                            value={formData.userId}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border-2 border-transparent rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white placeholder-gray-300"
                            placeholder="Enter your user ID"
                        />
                    {errors.userId && <p className="text-red-500 text-sm">{errors.userId}</p>}
                       </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="block text-sm font-medium text-white w-32">Password: *</label>
                        <div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border-2 border-transparent rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-gray-300"
                            placeholder="Enter your password"
                        />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="block text-sm font-medium text-white w-32">Name: *</label>
                       <div>
                         <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border-2 border-transparent rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-300"
                            placeholder="Enter your name"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                       </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="block text-sm font-medium text-white w-32">Country: *</label>
                        <div>
                            <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border-2 border-transparent rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-white placeholder-gray-300"
                        >
                            <option value="">Please select a country</option>
                            <option value="US">USA</option>
                            <option value="UK">UK</option>
                            <option value="PK">Pakistan</option>
                        </select>
                    {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="block text-sm font-medium text-white w-32">ZIP Code: *</label>
                        <div>
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border-2 border-transparent rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-white placeholder-gray-300"
                            placeholder="Enter ZIP code"
                        />
                    {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode}</p>}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="block text-sm font-medium text-white w-32">Email: *</label>
                       <div>
                         <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="flex-1 px-3 py-2 border-2 border-transparent rounded-md shadow-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white placeholder-gray-300"
                            placeholder="Enter your email"
                        />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                       </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="block text-sm font-medium text-white w-32">Gender: *</label>
                        <div className="flex space-x-4">
                            <label className="inline-flex items-center text-white">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === 'Male'}
                                    onChange={handleChange}
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2">Male</span>
                            </label>
                            <label className="inline-flex items-center text-white">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === 'Female'}
                                    onChange={handleChange}
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2">Female</span>
                            </label>
                        </div> <br />
                    {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="block text-sm font-medium text-white w-32">Language: *</label>
                        <div><div className="flex space-x-4">
                            <label className="inline-flex items-center text-white">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="English"
                                    checked={formData.language.includes('English')}
                                    onChange={handleChange}
                                    className="form-checkbox text-indigo-600"
                                />
                                <span className="ml-2">English</span>
                            </label>
                            <label className="inline-flex items-center text-white">
                                <input
                                    type="checkbox"
                                    name="language"
                                    value="Non English"
                                    checked={formData.language.includes('Non English')}
                                    onChange={handleChange}
                                    className="form-checkbox text-indigo-600"
                                />
                                <span className="ml-2">Other</span>
                            </label>
                        </div>
                    {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}</div>
                    </div>

                   

                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-2 rounded-md shadow hover:from-purple-600 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default RegistrationForm


