import React from "react";
//import DataTable from "react-data-table-component";
import "./css/homeSection1.css";
//import { faEdit, faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import AppUrl from "../classes/AppUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
//import BlogSectionEdit from "./BlogSectionEdit";

const ContactMessage = () => {
  //   const [title, setTitle] = useState("");
  //   const [description1, setDescription1] = useState("");
  //   const [description2, setDescription2] = useState("");
  //   const [tag, setTag] = useState("");
  //   const [category, setCategory] = useState("");
  //   const [time, setTime] = useState("");
  //   const [image1, setImage1] = useState("");
  //   const [image2, setImage2] = useState("");
  //   const [image3, setImage3] = useState("");
  //const [newsletter_message, setNewsletterMessage] = useState("");

  const [data, setData] = useState([]);

  const [loader, setLoader] = useState(false);

  //update image state
  //   const [image1_up, setImage1Up] = useState("");
  //   const [image2_up, setImage2Up] = useState("");
  //   const [image3_up, setImage3Up] = useState("");

  // useEffect(() => {
  //   getData();
  // }, []);

  //update states
  // const [title_up, setTitleUp] = useState("");
  // const [title_up, setTitleUp] = useState("");
  // const [description_up, setDescriptionUp] = useState("");
  // const [category_up, setCategoryUp] = useState("");

  useEffect(() => {
    getData();
  }, []);

  //update states useEffect
  // useEffect(() => {
  //   setDescriptionValue();
  // }, [data]);

  // function setDescriptionValue(des) {
  //   setDescriptionUp(des);
  // }

  function getData() {
    if (JSON.parse(localStorage.getItem("admin-info")) === "Login Successful") {
      axios
        .get(AppUrl.base_url + "contactGet")
        .then(function (response) {
          if (response) {
            setData(response.data);

            //console.log(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .get(AppUrl.base_url + "contactGet")
        .then(function (response) {
          if (response) {
            setData(response.data);

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

  //update image1
  //   async function updateImage1(name, id) {
  //     setLoader(true);
  //     const formData = new FormData();
  //     formData.append("image1_up", image1_up);

  //     let result = await fetch(
  //       AppUrl.base_url + "blogsectionUpdateImage1/" + name,
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     result = await result.json();

  //     if (result.success) {
  //       toast.success(result.success);

  //       getData();
  //       closeUpdateImageModal(name, id);
  //       setLoader(false);
  //     } else {
  //       toast.error(result.error);
  //       setLoader(false);
  //     }
  //   }

  //update image2
  //   async function updateImage2(name, id) {
  //     setLoader(true);
  //     const formData = new FormData();
  //     formData.append("image2_up", image2_up);

  //     let result = await fetch(
  //       AppUrl.base_url + "blogsectionUpdateImage2/" + name,
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     result = await result.json();

  //     if (result.success) {
  //       toast.success(result.success);

  //       getData();
  //       closeUpdateImageModal(name, id);
  //       setLoader(false);
  //     } else {
  //       toast.error(result.error);
  //       setLoader(false);
  //     }
  //   }

  //update image3
  //   async function updateImage3(name, id) {
  //     setLoader(true);
  //     const formData = new FormData();
  //     formData.append("image3_up", image3_up);

  //     let result = await fetch(
  //       AppUrl.base_url + "blogsectionUpdateImage3/" + name,
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     result = await result.json();

  //     if (result.success) {
  //       toast.success(result.success);

  //       getData();
  //       closeUpdateImageModal(name, id);
  //       setLoader(false);
  //     } else {
  //       toast.error(result.error);
  //       setLoader(false);
  //     }
  //   }

  //approve data
  //   async function approveData(id) {
  //     let result = await fetch(AppUrl.base_url + "blogsectionApprove/" + id, {
  //       method: "POST",
  //     });

  //     result = await result.json();

  //     if (result.success) {
  //       toast.success(result.success);
  //     } else {
  //       toast.error(result.error);
  //     }

  //     getData();
  //     closeApproveModal(id);
  //   }

  //decline data
  //   async function declineData(id) {
  //     let result = await fetch(AppUrl.base_url + "blogsectionDecline/" + id, {
  //       method: "POST",
  //     });

  //     result = await result.json();

  //     if (result.success) {
  //       toast.success(result.success);
  //     } else {
  //       toast.error(result.error);
  //     }

  //     getData();
  //     closeDeclineModal(id);
  //   }

  // let title1;
  // data.map((item) => (title1 = item.homesection1_title));

  //console.log(title_up);

  //update data
  // async function updateData(id) {
  //   const formData = new FormData();
  //   formData.append("title_up", title_up);
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

  //   function openModal() {
  //     let element = document.getElementById("home_section_modal_");
  //     ReactDOM.findDOMNode(element).classList.add("active_home_section_modal");
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "inactive_home_section_modal"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg_add");
  //     ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  //   }

  function closeModalAdd() {
    let element = document.getElementById("home_section_modal_");
    ReactDOM.findDOMNode(element).classList.add("inactive_home_section_modal");
    ReactDOM.findDOMNode(element).classList.remove("active_home_section_modal");

    let element1 = document.getElementById("modal_blur_bg_add");
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  }

  function closeModal(id) {
    let element1 = document.getElementById("modal_blur_bg" + id);
    ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
    ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");

    // closeUpdateModal(id);
    closeDeleteModal(id);
    // closeApproveModal(id);
    // closeDeclineModal(id);

    // closeUpdateImageModal(image1, id);
    // closeUpdateImageModal(image2, id);
    // closeUpdateImageModal(image3, id);
  }

  //   function openUpdateModal(id) {
  //     let element = document.getElementById("home_section_modal_update_" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "active_home_section_modal_update"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "inactive_home_section_modal_update"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg" + id);
  //     ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  //   }

  //   function closeUpdateModal(id) {
  //     let element = document.getElementById("home_section_modal_update_" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "inactive_home_section_modal_update"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "active_home_section_modal_update"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg" + id);
  //     ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  //   }

  //   function openDeleteModal(id) {
  //     let element = document.getElementById("home_section_modal_delete_" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "active_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "inactive_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg" + id);
  //     ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  //   }

  function closeDeleteModal(id) {
    let element = document.getElementById("home_section_modal_delete_" + id);
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

  //   function openApproveModal(id) {
  //     let element = document.getElementById("home_section_modal_approve_" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "active_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "inactive_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg" + id);
  //     ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  //   }

  //   function closeApproveModal(id) {
  //     let element = document.getElementById("home_section_modal_approve_" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "inactive_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "active_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg" + id);
  //     ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  //   }

  //   function openDeclineModal(id) {
  //     let element = document.getElementById("home_section_modal_decline_" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "active_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "inactive_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg" + id);
  //     ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  //   }

  //   function closeDeclineModal(id) {
  //     let element = document.getElementById("home_section_modal_decline_" + id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "inactive_home_section_modal_delete"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "active_home_section_modal_delete"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg" + id);
  //     ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  //   }

  //   function openModalImage(id, id1) {
  //     let element = document.getElementById(id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "active_home_section_modal_image_update"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "inactive_home_section_modal_image_update"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg" + id1);
  //     ReactDOM.findDOMNode(element1).classList.add("active_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("inactive_modal_blur_bg");
  //   }

  //   function closeUpdateImageModal(id, id1) {
  //     let element = document.getElementById(id);
  //     ReactDOM.findDOMNode(element).classList.add(
  //       "inactive_home_section_modal_image_update"
  //     );
  //     ReactDOM.findDOMNode(element).classList.remove(
  //       "active_home_section_modal_image_update"
  //     );

  //     let element1 = document.getElementById("modal_blur_bg" + id1);
  //     ReactDOM.findDOMNode(element1).classList.add("inactive_modal_blur_bg");
  //     ReactDOM.findDOMNode(element1).classList.remove("active_modal_blur_bg");
  //   }

  return (
    <>
      <ToastContainer />
      <div className="container home_section_div">
        <div className="home_sections_title">
          <h4>Messages from Users</h4>
          {/* <button
            className="btn btn-primary btn-sm home_sections_btn_add"
            onClick={() => openModal()}
          >
            Send Newsletter
          </button> */}
        </div>
        <table className="table table-responsive table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Users</th>
              <th scope="col">Email</th>
              <th scope="col">Messages</th>

              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.newsletter_id}>
                <td>{index + 1}</td>
                <td>{item.contact_name}</td>
                <td>{item.contact_email}</td>
                <td>{item.contact_message}</td>
                <td>{item.contact_date}</td>

                {/* <td className="blogsection_description_td">
                  {item.blogsection_description1.substring(0, 150)}
                </td>
                <td className="blogsection_description_td">
                  {item.blogsection_description2.substring(0, 150)}
                </td>
                <td>{item.blogsection_tag}</td>
                <td>{item.blogsection_category}</td>
                <td>{item.blogsection_time}</td>

                <td>
                  <img
                    src={AppUrl.image_url + item.blogsection_image1}
                    alt={item.blogsection_title + " image1"}
                    onClick={() =>
                      openModalImage(
                        item.blogsection_image1,
                        item.blogsection_id
                      )
                    }
                  />
                </td>

                <td>
                  <img
                    src={AppUrl.image_url + item.blogsection_image2}
                    alt={item.blogsection_title + " image2"}
                    onClick={() =>
                      openModalImage(
                        item.blogsection_image2,
                        item.blogsection_id
                      )
                    }
                  />
                </td>

                <td>
                  <img
                    src={AppUrl.image_url + item.blogsection_image3}
                    alt={item.blogsection_title + " image3"}
                    onClick={() =>
                      openModalImage(
                        item.blogsection_image3,
                        item.blogsection_id
                      )
                    }
                  />
                </td>

                <td>{item.blogsection_day + "," + item.blogsection_year}</td>

                <td>
                  {JSON.parse(localStorage.getItem("admin-info")) ===
                  "Login Successful" ? (
                    <>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="home_section_edit"
                        onClick={() => openUpdateModal(item.blogsection_id)}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() => openDeleteModal(item.blogsection_id)}
                      />
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="home_section_edit"
                        onClick={() => openApproveModal(item.blogsection_id)}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() => openDeclineModal(item.blogsection_id)}
                      />
                    </>
                  )}
                </td> */}

                {/* update data modal */}
                {/* <div
                  className="home_section_modal_update inactive_home_section_modal_update"
                  id={"home_section_modal_update_" + item.blogsection_id}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Blogs Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() => closeUpdateModal(item.blogsection_id)}
                      />
                    </div>
                    <BlogSectionEdit
                      title_data={item.blogsection_title}
                      description1_data={item.blogsection_description1}
                      description2_data={item.blogsection_description2}
                      tag_data={item.blogsection_tag}
                      category_data={item.blogsection_category}
                      time_data={item.blogsection_time}
                      id_data={item.blogsection_id}
                      edit_data={data}
                      index_data={index}
                      get_data={getData}
                      close_update_modal={() =>
                        closeUpdateModal(item.blogsection_id)
                      }
                    />
                  </div>
                </div> */}

                {/* image1 update modal */}
                {/* <div
                  className="home_section_modal_image_update inactive_home_section_modal_image_update"
                  id={item.blogsection_image1}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Image1 Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateImageModal(
                            item.blogsection_image1,
                            item.blogsection_id
                          )
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Image1:</label>
                      <div className="form-group">
                        <input
                          type="file"
                          placeholder="Image1"
                          className="form-control"
                          onChange={(e) => setImage1Up(e.target.files[0])}
                        />
                      </div>

                      <div className="form-group">
                        {loader ? (
                          <>
                            <button
                              className="btn btn-success form-control"
                              type="button"
                              disabled={true}
                            >
                              Please wait...
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn btn-success form-control"
                              type="button"
                              onClick={() =>
                                updateImage1(
                                  item.blogsection_image1,
                                  item.blogsection_id
                                )
                              }
                            >
                              Update
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* image2 update modal */}
                {/* <div
                  className="home_section_modal_image_update inactive_home_section_modal_image_update"
                  id={item.blogsection_image2}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Image2 Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateImageModal(
                            item.blogsection_image2,
                            item.blogsection_id
                          )
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Image2:</label>
                      <div className="form-group">
                        <input
                          type="file"
                          placeholder="Image2"
                          className="form-control"
                          onChange={(e) => setImage2Up(e.target.files[0])}
                        />
                      </div>

                      <div className="form-group">
                        {loader ? (
                          <>
                            <button
                              className="btn btn-success form-control"
                              type="button"
                              disabled={true}
                            >
                              Please wait...
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn btn-success form-control"
                              type="button"
                              onClick={() =>
                                updateImage2(
                                  item.blogsection_image2,
                                  item.blogsection_id
                                )
                              }
                            >
                              Update
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* image3 update modal */}
                {/* <div
                  className="home_section_modal_image_update inactive_home_section_modal_image_update"
                  id={item.blogsection_image3}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Update Image3 Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() =>
                          closeUpdateImageModal(
                            item.blogsection_image3,
                            item.blogsection_id
                          )
                        }
                      />
                    </div>
                    <div className="card-body">
                      <label>Image3:</label>
                      <div className="form-group">
                        <input
                          type="file"
                          placeholder="Image3"
                          className="form-control"
                          onChange={(e) => setImage3Up(e.target.files[0])}
                        />
                      </div>

                      <div className="form-group">
                        {loader ? (
                          <>
                            <button
                              className="btn btn-success form-control"
                              type="button"
                              disabled={true}
                            >
                              Please wait...
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              className="btn btn-success form-control"
                              type="button"
                              onClick={() =>
                                updateImage3(
                                  item.blogsection_image3,
                                  item.blogsection_id
                                )
                              }
                            >
                              Update
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* delete data modal */}
                {/* <div
                  className="home_section_modal_delete inactive_home_section_modal_delete"
                  id={"home_section_modal_delete_" + item.newsletter_id}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Delete User</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() => closeDeleteModal(item.newsletter_id)}
                      />
                    </div>
                    <div className="card-body">
                      <label>Do you want to delete it?</label>

                      <div className="form-group">
                        <button
                          className="btn btn-danger form-control"
                          type="button"
                          onClick={() => deleteData(item.newsletter_id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* approve data modal */}
                {/* <div
                  className="home_section_modal_delete inactive_home_section_modal_delete"
                  id={"home_section_modal_approve_" + item.blogsection_id}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Approve Blogs Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() => closeApproveModal(item.blogsection_id)}
                      />
                    </div>
                    <div className="card-body">
                      <label>Do you want to approve it?</label>

                      <div className="form-group">
                        <button
                          className="btn btn-success form-control"
                          type="button"
                          onClick={() => approveData(item.blogsection_id)}
                        >
                          Approve
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* decline data modal */}
                {/* <div
                  className="home_section_modal_delete inactive_home_section_modal_delete"
                  id={"home_section_modal_decline_" + item.blogsection_id}
                >
                  <div className="card">
                    <div className="card-header">
                      <p>Decline Blogs Data</p>
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="home_section_delete"
                        onClick={() => closeDeclineModal(item.blogsection_id)}
                      />
                    </div>
                    <div className="card-body">
                      <label>Do you want to decline it?</label>

                      <div className="form-group">
                        <button
                          className="btn btn-danger form-control"
                          type="button"
                          onClick={() => declineData(item.blogsection_id)}
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* blur bg overlay */}
                <div
                  className="modal_blur_bg inactive_modal_blur_bg"
                  id={"modal_blur_bg" + item.newsletter_id}
                  onClick={() =>
                    closeModal(
                      item.newsletter_id

                      //   item.blogsection_image1,
                      //   item.blogsection_image2,
                      //   item.blogsection_image3
                    )
                  }
                ></div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* blur bg overlay */}
      <div
        className="modal_blur_bg inactive_modal_blur_bg"
        id="modal_blur_bg_add"
        onClick={() => closeModalAdd()}
      ></div>
    </>
  );
};

export default ContactMessage;
