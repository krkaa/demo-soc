import React from "react";

export const required = value => {
    if (value) return undefined;

    return <span>{"Required!"}</span>;
};


export const maxLengthCreator = maxLength => value => {
    if (value.length > maxLength) return <span>{`Max length is ${maxLength} symbols`}</span>;;

    return undefined;
};