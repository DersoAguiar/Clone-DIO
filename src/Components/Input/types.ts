import React from "react";
import { MultipleFieldErrors, Message } from "react-hook-form";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
    name: string;
    control: any;
    errorMessage?: string     
    types?: MultipleFieldErrors;
    message?: Message;
}