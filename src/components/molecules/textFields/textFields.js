import React from "react";
import {InputLabel} from "../../atoms/labels/labels";
import {Input} from "../../atoms/inputs/inputs";

export const EmailInput = ({ label, placeholder }) => (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
        <InputLabel htmlFor="email">{label}</InputLabel>
        <Input type="email" placeholder={placeholder} />
    </div>
);

export const PasswordInput = ({ label, placeholder }) => (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "16px" }}>
        <InputLabel htmlFor="password">{label}</InputLabel>
        <Input type="password" placeholder={placeholder} />
    </div>
);
