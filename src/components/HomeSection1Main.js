import React from "react";
//import DataTable from "react-data-table-component";
import "./css/homeSection1.css";
import { faEdit, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import AppUrl from "../classes/AppUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import HomeSection1MainEdit from "./HomeSection1MainEdit";

const HomeSection1Main = () => {
  const [main_title_faq, setMainTitleFaq] = useState("");
  //const [main_description_faq, setMainDescriptionFaq] = useState("");

  const [main_data_faq, setMainDataFaq] = useState([]);

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  // const [main_title_up, setMainTitleUp] = useState("");
  // const [title_up, setTitleUp] = useState("");
  // const [description_up, setDescriptionUp] = useState("");
  // const [category_up, setCategoryUp] = useState("");

  useEffect(() => {
    getMainDataFaq();
  }, []);

  //update states useEffect
  // useEffect(() => {
  //   setDescriptionValue();
  // }, [data]);

  // function setDescriptionValue(des) {
  //   setDescriptionUp(des);
  // }

  function getMainDataFaq() {
    if (JSON.parse(localStorage.getItem("admin-info")) === "Login Successful") {
      axios
        .get(AppUrl.base_url + "homesection1MainGet")
        .then(function (response) {
          if (response) {
            setMainDataFaq(response.data);

            //console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .get(AppUrl.base_url + "homesection1MainGetSuper")
        .then(function (response) {
          if (response) {
            setMainDataFaq(response.data);

            //console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  // async function getData() {
  //   let result = await fetch(AppUrl.base_url + "homesection1Get");

  //   result = await result.json();
  //   setData(result);
  //   console.log(data);
  // }

  //add data
  async function addMainDataFaq() {
    const formData = new FormData();
    formData.append("main_title_faq", main_title_faq);
    //formData.append("main_description_faq", main_description_faq);

    let result = await fetch(AppUrl.base_url + "homesection1MainAdd", {
      method: "POST",
      body: formData,
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
      setMainTitleFaq("");
      //setMainDescriptionFaq("");
    } else {
      toast.error(result.error);
    }

    getMainDataFaq();
  }

  //delete data
  async function deleteMainDataFaq(id) {
    let result = await fetch(AppUrl.base_url + "homesection1MainDelete/" + id, {
      method: "POST",
    });

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
    } else {
      toast.error(result.error);
    }

    getMainDataFaq();
    closeDeleteModalMain(id);
  }

  //approve data
  async function approveMainDataFaq(id) {
    let result = await fetch(
      AppUrl.base_url + "homesection1MainApprove/" + id,
      {
        method: "POST",
      }
    );

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
    } else {
      toast.error(result.error);
    }

    getMainDataFaq();
    closeApproveModalMain(id);
  }

  //decline data
  async function declineMainDataFaq(id) {
    let result = await fetch(
      AppUrl.base_url + "homesection1MainDecline/" + id,
      {
        method: "POST",
      }
    );

    result = await result.json();

    if (result.success) {
      toast.success(result.success);
    } else {
      toast.error(result.error);
    }

    getMainDataFaq();
    closeDeclineModalMain(id);
  }

  // let title1;
  // data.map((item) => (title1 = item.homesection1_title));

  //console.log(title_up);

  //update data
  // async function updateData(id) {
  //   const formData = new FormData();
  //   formData.append("main_title_up", main_title_up);
  //   formData.append("title_up", title_up);
  //   formData.append("description_up", description_up);
  //   formData.append("category_up", category_up);

  //   let result = await fetch(AppUrl.base_url + "homesection2Update/" + id, {
  //     method: "POST",
  //     body: formData,
  //   });

  //   result = await result.json();

  //   if (result.success) {
  //     toast.success(result.success);

  //     getData();
  //     closeUpdateModal(id);
  //   } else {
  //     toast.error(result.error);
  //   }
  // }

  function openModalMain() {
    let element = document.getElementById("home_section_modal_main");
    ReactDOM.findDOMNode(element).classList.add("active_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal"
    );

    let element1 = document.getElementById("modal_blur_bg_add");
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeModalAddMain() {
    let element = document.getElementById("home_section_modal_main");
    ReactDOM.findDOMNode(element).classList.add("inactive_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove("active_home_section_modal");

    let element1 = document.getElementById("modal_blur_bg_add");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function closeModalMain(id, id1) {
    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");

    closeUpdateModalMainFaq(id);
    closeDeleteModalMain(id);
    closeApproveModalMain(id);
    closeDeclineModalMain(id);
  }

  function openUpdateModalMainFaq(id) {
    let element = document.getElementById(
      "home_section_modal_update_main_faq" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_update"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeUpdateModalMainFaq(id) {
    let element = document.getElementById(
      "home_section_modal_update_main_faq" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_update"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_update"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function openDeleteModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_delete_main" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeDeleteModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_delete_main" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function openApproveModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_approve_main" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeApproveModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_approve_main" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function openDeclineModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_decline_main" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "active_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "inactive_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  }

  function closeDeclineModalMain(id) {
    let element = document.getElementById(
      "home_section_modal_decline_main" + id
    );
    ReactDOM.findDOMNode(element).classList.add(
      "inactive_home_section_modal_delete"
    );
    ReactDOM.findDOMNode(element).classList.remove(
      "active_home_section_modal_delete"
    );

    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  return (
    <>
      <ToastContainer />
      <div className="container home_section_div">
        <div className="home_sections_title">
          <h4>Section 1 List</h4>
          <button
            className="btn btn-primary btn-sm home_sections_btn_add"
            onClick={() => openModalMain()}
          >
            Add
          </button>
        </div>
        <table className="table table-responsive table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {main_data_faq.map((item, index) => (
              <tr key={item.homesection1_main_id}>
                <td>{item.homesection1_main_title}</td>

                <td>
                  {JSON.parse(localStorage.getItem("admin-info")) ===
                  "Login Successful" ? (
                    <>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="home_section_edit"
                        onClick={() =>
                          openUpdateModalMainFaq(item.homesection1_main_id)
                        }
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          openDeleteModalMain(item.homesection1_main_id)
                        }
                      />
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="home_section_edit"
                        onClick={() =>
                          openApproveModalMain(item.homesection1_main_id)
                        }
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          openDeclineModalMain(item.homesection1_main_id)
                        }
                      />
                    </>
                  )}
                </td>

                {/* update data modal */}
                <div
                  className="home_section_modal_update inactive_home_section_modal_update"
                  id={
                    "home_section_modal_update_main_faq" +
                    item.homesection1_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Section 1 ListAQ Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateModalMainFaq(item.homesection1_main_id)
                        }
                      />
                    </div>
                    <HomeSection1MainEdit
                      key={item.homesection1_main_id}
                      title_data_faq={item.homesection1_main_title}
                      id_data_faq={item.homesection1_main_id}
                      edit_data_faq={main_data_faq}
                      index_data_faq={index}
                      get_data_faq={getMainDataFaq}
                      close_update_modal_faq={() =>
                        closeUpdateModalMainFaq(item.homesection1_main_id)
                      }
                    />
                  </div>
                </div>

                {/* delete data modal */}
                <div
                  className="home_section_modal_delete inactive_home_section_modal_delete"
                  id={
                    "home_section_modal_delete_main" + item.homesection1_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Delete Section 1 List Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeDeleteModalMain(item.homesection1_main_id)
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Do you want to delete it?</label>

                      <div className="form-group">
                        <button
                          className="btn btn-danger form-control"
                          type="button"
                          onClick={() =>
                            deleteMainDataFaq(item.homesection1_main_id)
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* approve data modal */}
                <div
                  className="home_section_modal_delete inactive_home_section_modal_delete"
                  id={
                    "home_section_modal_approve_main" +
                    item.homesection1_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Approve Section 1 List Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeApproveModalMain(item.homesection1_main_id)
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Do you want to approve it?</label>

                      <div className="form-group">
                        <button
                          className="btn btn-success form-control"
                          type="button"
                          onClick={() =>
                            approveMainDataFaq(item.homesection1_main_id)
                          }
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* decline data modal */}
                <div
                  className="home_section_modal_delete inactive_home_section_modal_delete"
                  id={
                    "home_section_modal_decline_main" +
                    item.homesection1_main_id
                  }
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Decline Section 1 List Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeDeclineModalMain(item.homesection1_main_id)
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Do you want to decline it?</label>

                      <div className="form-group">
                        <button
                          className="btn btn-danger form-control"
                          type="button"
                          onClick={() =>
                            declineMainDataFaq(item.homesection1_main_id)
                          }
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* blur bg overlay */}
                <div
                  className="modal_blur_bg inactive_modal_blur_bg"
                  id={"modal_blur_bg" + item.homesection1_main_id}
                  onClick={() =>
                    closeModalMain(
                      item.homesection1_main_id,
                      item.homesection1_main_image
                    )
                  }
                ></div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* add data modal */}
      <div
        className="home_section_modal inactive_home_section_modal"
        id="home_section_modal_main"
      >
        <div className="card">
          <div className="card-header">
            <p>Add Section 1 List Data</p>
            <FontAwesomeIcon
              icon={faTimes}
              className="home_section_delete"
              onClick={() => closeModalAddMain()}
            />
          </div>
          <div className="card-body">
            <label>Title:</label>
            <div className="form-group">
              <input
                type="text"
                placeholder="Title"
                className="form-control"
                value={main_title_faq}
                onChange={(e) => setMainTitleFaq(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary form-control"
                type="button"
                onClick={() => addMainDataFaq()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* blur bg overlay */}
      <div
        className="modal_blur_bg inactive_modal_blur_bg"
        id="modal_blur_bg_add"
        onClick={() => closeModalAddMain()}
      ></div>
    </>
  );
};

export default HomeSection1Main;
