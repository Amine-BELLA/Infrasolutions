import React from "react";
import "./InputField.css";

function InputField(props) {
    return (
        <div className="my-input">
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">{props.description}</span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
        </div>
    );
}

export default InputField;