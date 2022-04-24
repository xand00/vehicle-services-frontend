import { ChildrenProp } from "@/types/props";
import React from "react";

type FieldContainerProps = {
    children: ChildrenProp,
    error?: string
}

const FieldContainer: React.FC<FieldContainerProps> = ({
    children,
    error
}) => {
    return (
        <div data-error={error} className="display-error-after-from-data-error">
            {children}
        </div>
    );
};

export default FieldContainer