import React from "react";

export const Task = ({task: {id, title, state}}) => {
    return (
        <div className="list-item">
            <input type="text" value={title} readOnly={true}/>
        </div>
    );
}
