import React from "react";

interface FormWrapperProps {
    children: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
    return (
        <div className="form-wrapper">
            <h2 className="form-title">Formulário</h2>
            <div className="form-content">{children}</div>
        </div>
    );
};

export default FormWrapper;
