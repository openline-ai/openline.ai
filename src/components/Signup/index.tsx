import React, {useState} from 'react';

const SignUpFormReact = ({waitlistName}) => {
    var INIT = "INIT";
    var SUBMITTING = "SUBMITTING";
    var ERROR = "ERROR";
    var SUCCESS = "SUCCESS";
    var formStyles = {
        "id": "cl7hzfqge458409jvsbqy93u9",
        "name": "Default",
        "formStyle": "inline",
        "placeholderText": "your@email.com",
        "formFont": "Matter",
        "formFontColor": "#000000",
        "formFontSizePx": 16,
        "buttonText": "Join the Waitlist",
        "buttonFont": "Matter",
        "buttonFontColor": "#000000",
        "buttonColor": "#0D9488",
        "buttonFontSizePx": 16,
        "successMessage": "Thanks! We'll be in touch!",
        "successFont": "Matter",
        "successFontColor": "#FFFFFF",
        "successFontSizePx": 16,
        "userGroup": "Waitlist"
    }
    var domain = "app.loops.so"

    const [email, setEmail] = useState("");
    const [formState, setFormState] = useState(INIT);
    const [errorMessage, setErrorMessage] = useState("");

    const resetForm = () => {
        setEmail("");
        setFormState(INIT);
        setErrorMessage("");
    };

    /**
     * Rate limit the number of submissions allowed
     * @returns {boolean} true if the form has been successfully submitted in the past minute
     */
    const hasRecentSubmission = () => {
        const time = new Date();
        const timestamp = time.valueOf();
        const previousTimestamp = localStorage.getItem("loops-form-timestamp");

        // Indicate if the last sign up was less than a minute ago
        if (
            previousTimestamp &&
            Number(previousTimestamp) + 60 * 1000 > timestamp
        ) {
            setFormState(ERROR);
            setErrorMessage("Too many signups, please try again in a little while");
            return true;
        }

        localStorage.setItem("loops-form-timestamp", timestamp.toString());
        return false;
    };

    const handleSubmit = (event) => {
        // Prevent the default form submission
        event.preventDefault();

        // boundary conditions for submission
        if (formState !== INIT) return;
        if (!isValidEmail(email)) {
            setFormState(ERROR);
            setErrorMessage("Please enter a valid email");
            return;
        }
        if (hasRecentSubmission()) return;
        setFormState(SUBMITTING);

        // build body
        const formBody = `userGroup=${encodeURIComponent(
            waitlistName
        )}&email=${encodeURIComponent(email)}`;

        // API request to add user to newsletter
        fetch(`https://${domain}/api/newsletter-form/${formStyles.id}`, {
            method: "POST",
            body: formBody,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
            .then((res) => {
                if (res) {
                    resetForm();
                    setFormState(SUCCESS);
                } else {
                    setFormState(ERROR);
                    setErrorMessage(res.statusText);
                    localStorage.setItem("loops-form-timestamp", "");
                }
            })
            .catch(error => {
                setFormState(ERROR);
                // check for cloudflare error
                if (error.message === "Failed to fetch") {
                    setErrorMessage("Too many signups, please try again in a little while");
                } else if (error.message) {
                    setErrorMessage(error.message);
                }
                localStorage.setItem("loops-form-timestamp", "");
            });
    };

    const isValidEmail = (email) => {
        return /.+@.+/.test(email);
        // return true;
    }

    const SignUpFormError = () => {
        return (
            <div
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                }}
            >
                <p
                    style={{
                        fontFamily: "Inter, sans-serif",
                        color: "rgb(185, 28, 28)",
                        fontSize: "14px",
                    }}
                >
                    {errorMessage || "Oops! Something went wrong, please try again"}
                </p>
            </div>
        );
    }

    const BackButton = () => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <button
                style={{
                    color: "#1A111B",
                    font: "14px, Matter, sans-serif",
                    borderRadius: "100px",
                    margin: "10px auto",
                    textAlign: "center",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: isHovered ? "underline" : "none",
                }}
                onMouseOut={() => setIsHovered(false)}
                onMouseOver={() => setIsHovered(true)}
                onClick={resetForm}
            >
                &larr; Back
            </button>
        );
    }

    const SignUpFormButton = () => {
        return (
            <button
                type="submit"
                className="waitlist-button"
                style={{
                    background: formStyles.buttonColor,
                    backgroundImage: "radial-gradient(circle farthest-corner at 100% 100%, #e095f5, #85abff 53%, #b6d6f0)",
                    fontSize: `${formStyles.buttonFontSizePx}px`,
                    color: formStyles.buttonFontColor,
                    fontFamily: `'${formStyles.buttonFont}', sans-serif`,
                    //width: isInline ? "min-content" : "100%",
                    maxWidth: "300px",
                    //whiteSpace: isInline ? "nowrap" : "normal",
                    //height: "38px",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    padding: "13px 40px",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                    borderRadius: "100px",
                    textAlign: "center",
                    //fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "20px",
                    border: "1px",
                    cursor: "pointer",
                }}
            >
                {formState === SUBMITTING ? "Please wait..." : formStyles.buttonText}
            </button>
        );
    }

    // const isInline = formStyles.formStyle === "inline";

    switch (formState) {
        case SUCCESS:
            return (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <p
                        style={{
                            fontFamily: `'${formStyles.successFont}', sans-serif`,
                            color: formStyles.successFontColor,
                            fontSize: `${formStyles.successFontSizePx}px`,
                        }}
                    >
                        {formStyles.successMessage}
                    </p>
                </div>
            );
        case ERROR:
            return (
                <>
                    <SignUpFormError/>
                    <BackButton/>
                </>
            );
        default:
            return (
                <>
                    <form
                        onSubmit={handleSubmit}
                        className="waitlist-form"
                        style={{
                            display: "flex",
                            //flexDirection: isInline ? "row" : "column",
                            //alignItems: "center",
                            //justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder={formStyles.placeholderText}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                            className="waitlist-input"
                            style={{
                                color: formStyles.formFontColor,
                                fontFamily: `'${formStyles.formFont}', sans-serif`,
                                fontSize: `${formStyles.formFontSizePx}px`,
                                // margin: isInline ? "0px 10px 0px 0px" : "0px 0px 10px",
                                width: "100%",
                                maxWidth: "300px",
                                minWidth: "120px",
                                background: "#FFFFFF",
                                border: "1px solid #D1D5DB",
                                boxSizing: "border-box",
                                boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px",
                                borderRadius: "100px",
                                padding: "10px 20px",
                            }}
                        />
                        <SignUpFormButton/>
                    </form>
                </>
            );
    }
}

export default SignUpFormReact;