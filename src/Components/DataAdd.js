import React from "react";

export default function DataAdd() {
  function AddData() {
    var Address = document.getElementById("user_address");
    console.log(Address);
  }
  return (
    <div>
      <h4>Add Data</h4>
      <div class="form-group row justify-content-md-center">
        <label for="inputPassword" class="col-sm-1 col-form-label">
          Address:
        </label>
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            id="user_address"
            placeholder="Address"
          />
        </div>
      </div>
    </div>
  );
}
