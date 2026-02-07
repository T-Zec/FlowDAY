import React from "react";

export default function PageHeader({ title, children }) {
    return (
        <div className="page-header">
            <h2>{title}</h2>
            {children} && <div className="page-actions">{children}</div>
        </div>
    );
}