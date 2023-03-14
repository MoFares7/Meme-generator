import React from "react";
import "./SignUp.css"

export default function SignUp() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true

    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")

        }

        if (formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    return (
        <div className="signup--card" >
            <form className="form"
                onSubmit={handleSubmit} >
                <input name="email"
                    type="text"
                    className="email-filed"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input name="password"
                    type="text"
                    className="password-filed"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <    input name="passwordConfirm"
                    type="text"
                    className="confirm-filed"
                    placeholder="Confirm Password"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                />
                < div className=" form--marketing" >
                    <    input id="okayToEmail"
                        name="joinedNewsletter"
                        type="checkbox"
                        checked={formData.joinedNewsletter}
                        onChange={handleChange}
                    />
                    < label htmlFor="okayToEmail" > I want to join the newsletter </label>
                </div>
                <  button className="form--submit"
                    onSubmit={handleSubmit} > Sign up </button>
            </form>
        </div>
    )
}