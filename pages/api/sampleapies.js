import { timeClockClasses } from "@mui/x-date-pickers";
import React from "react";
// import { fetchWithTimeoutt } from "./fetchTime";
import { getCookie } from "cookies-next";

// uat url
const uat_url = process.env.NEXT_PUBLIC_UAT_URL;
const nexora_url = process.env.NEXT_PUBLIC_NEXORA_URL;

// verifierPage apies
const uat_role_create = "api/master/role/create";
const uat_qa_list = "api/data_entry/list";const uat_user_list = "api/users/list";const uat_system_list = "api/events/system_events";
const uat_case_details = "api/qa/get";const uat_custom_list = "api/events/custom_events";
const uat_case_save = "api/qa/save";
const uat_case_submit = "api/qa/submit";
const uat_accept = "api/qa/accept";
const uat_rework = "api/qa/rework";
const uat_role_delete = "api/master/role/delete";

// common parameters
const headers = new Headers();
headers.append("Content-Type", "application/json");
const method = "POST";
const credentials = "include";
// const data= getCookie("data");
// headers.append("data", data);

// function for fetch verifier list
async function fetchQAList({ pagination_detail, search, filters, user_id }) {
  try {
    console.log("user_id", user_id);
    // const cookieData = getCookie("data");

    // // Check if cookie exists
    // if (!cookieData) {
    //   throw new Error("Cookie 'data' is missing.");
    // }

    // Parse cookie data
    // const parsedData = JSON.parse(cookieData);
    // console.log("parsed cookie", parsedData);
    const response = await fetch(`${uat_url}/${uat_qa_list}`, {
      headers,
      method,
      body: JSON.stringify({
        user_id,
        pagination_detail,
        ...(search && { search }), // Only include 'search' if it's not empty
        ...(filters && { filters }), // Only include 'filters' if it's not empty
      }),
      credentials,
    });

    // Check if the response status is not OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Check if the response contains an error or missing data
    if (!data || data.status_code !== 200) {
      throw new Error(data?.message || "Failed to fetch ");
    }

    return data.data; // Return the data if everything is successful
  } catch (error) {
    console.error("Error fetching :", error.message);

    // Optional: You can throw the error to the caller or return a fallback value
    throw error; // Re-throw the error to be handled by the calling function
  }
}



async function fetchUserListNexora({ limit,offset, search, filters, }) {
  try {
    // console.log("user_id", user_id);
    // const cookieData = getCookie("data");

    // // Check if cookie exists
    // if (!cookieData) {
    //   throw new Error("Cookie 'data' is missing.");
    // }

    // Parse cookie data
    // const parsedData = JSON.parse(cookieData);
    // console.log("parsed cookie", parsedData);
    const response = await fetch(`${nexora_url}/${uat_user_list}`, {
      headers,
      method,
      body: JSON.stringify({
       nexora_id : "cccc-ddee-33-dd",
          pagination_detail: {
          limit,
          offset,
        },
        ...(search && { search }), // Only include 'search' if it's not empty
        ...(filters && { filters }), // Only include 'filters' if it's not empty
      }),
      credentials,
    });

    // Check if the response status is not OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Check if the response contains an error or missing data
    if (!data || data.status_code !== 200) {
      throw new Error(data?.message || "Failed to fetch ");
    }

    return data.data; // Return the data if everything is successful
  } catch (error) {
    console.error("Error fetching :", error.message);

    // Optional: You can throw the error to the caller or return a fallback value
    throw error; // Re-throw the error to be handled by the calling function
  }
}





async function fetchSystemeventsNexora({ limit,offset, search, filters, }) {
  try {
    // console.log("user_id", user_id);
    // const cookieData = getCookie("data");

    // // Check if cookie exists
    // if (!cookieData) {
    //   throw new Error("Cookie 'data' is missing.");
    // }

    // Parse cookie data
    // const parsedData = JSON.parse(cookieData);
    // console.log("parsed cookie", parsedData);
    const response = await fetch(`${nexora_url}/${uat_system_list}`, {
      headers,
      method,
      body: JSON.stringify({
      //  nexora_id : "cccc-ddee-33-dd",
          pagination_detail: {
          limit,
          offset,
        },
        ...(search && { search }), // Only include 'search' if it's not empty
        ...(filters && { filters }), // Only include 'filters' if it's not empty
      }),
      credentials,
    });

    // Check if the response status is not OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Check if the response contains an error or missing data
    if (!data || data.status_code !== 200) {
      throw new Error(data?.message || "Failed to fetch ");
    }

    return data.data; // Return the data if everything is successful
  } catch (error) {
    console.error("Error fetching :", error.message);

    // Optional: You can throw the error to the caller or return a fallback value
    throw error; // Re-throw the error to be handled by the calling function
  }
}



async function fetchCustomeventsNexora({ limit,offset, search, filters, }) {
  try {
    // console.log("user_id", user_id);
    // const cookieData = getCookie("data");

    // // Check if cookie exists
    // if (!cookieData) {
    //   throw new Error("Cookie 'data' is missing.");
    // }

    // Parse cookie data
    // const parsedData = JSON.parse(cookieData);
    // console.log("parsed cookie", parsedData);
    const response = await fetch(`${nexora_url}/${uat_custom_list}`, {
      headers,
      method,
      body: JSON.stringify({
      //  nexora_id : "cccc-ddee-33-dd",
          pagination_detail: {
          limit,
          offset,
        },
        ...(search && { search }), // Only include 'search' if it's not empty
        ...(filters && { filters }), // Only include 'filters' if it's not empty
      }),
      credentials,
    });

    // Check if the response status is not OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Check if the response contains an error or missing data
    if (!data || data.status_code !== 200) {
      throw new Error(data?.message || "Failed to fetch ");
    }

    return data.data; // Return the data if everything is successful
  } catch (error) {
    console.error("Error fetching :", error.message);

    // Optional: You can throw the error to the caller or return a fallback value
    throw error; // Re-throw the error to be handled by the calling function
  }
}




// function for fetch details of Each acse
async function deatilsOfEachCaseForQA(id, user_id) {
  try {
    const response = await fetch(`${uat_url}/${uat_case_details}`, {
      headers,
      method,
      body: JSON.stringify({
        id: id,
        user_id: user_id,
        with_files: true,
        with_client_details: true,
      }),
      credentials,
    });

    // Check if the response status is not OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Check if the response contains an error or missing data
    if (!data || data.status_code !== 200) {
      throw new Error(
        data?.message || "Failed to fetch data. Please try again."
      );
    }

    return data.data; // Return the data if everything is successful
  } catch (error) {
    console.error("console Error fetching data:", error.message);

    // Optional: You can throw the error to the caller or return a fallback value
    throw error; // Re-throw the error to be handled by the calling function
  }
}
// function for fetch details of Each acse
async function acceptApi(idd, batch_cv_idd, tableName, clientId) {
  console.log("id cv_id", idd, batch_cv_idd);
  try {
    const response = await fetch(`${uat_url}/${uat_accept}`, {
      headers,
      method,
      body: JSON.stringify({
        id: idd,
        batch_cv_id: batch_cv_idd,
        table_name: tableName,
        client_id: clientId,
      }),
      credentials,
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // Parse error response
      throw new Error(
        errorData.message || `Request failed with status ${response.status}`
      );
    }

    const data = await response.json(); // Parse successful response
    return data; // Return the response data
  } catch (error) {
    console.error("Error in acceptApi:", error.message); // Log error for debugging
    throw error; // Re-throw to handle it in calling function
  }
}
async function reworkApi(idd, batch_cv_idd, tableName, comments, clientId) {
  console.log("id cv_id", idd, batch_cv_idd);
  try {
    const response = await fetch(`${uat_url}/${uat_rework}`, {
      headers,
      method,
      body: JSON.stringify({
        id: idd,
        batch_cv_id: batch_cv_idd,
        table_name: tableName,
        comments: comments,
        client_id: clientId,
      }),
      credentials,
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // Parse error response
      throw new Error(
        errorData.message || `Request failed with status ${response.status}`
      );
    }

    const data = await response.json(); // Parse successful response
    return data; // Return the response data
  } catch (error) {
    console.error("Error in reworkApi:", error.message); // Log error for debugging
    throw error; // Re-throw to handle it in calling function
  }
}
async function QAsaveApi(id, { destination }, selectedOption) {
  // console.log("id cv_id", idd, batch_cv_idd);
  try {
    const payload = {
      id,
      destination,
    };

    // // Add 'status' key if destination is 'crm_inbox'
    // if (destination === "crm_inbox") {
    //   payload.status = selectedOption;
    // }

    const response = await fetch(`${uat_url}/${uat_case_submit}`, {
      headers,
      method,
      body: JSON.stringify(payload),
      credentials,
    });

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      const errorData = await response.json(); // Parse error response
      throw new Error(
        errorData.message || `Push failed with status ${response.status}`
      );
    }

    const data = await response.json(); // Parse successful response
    return data; // Return the response data
  } catch (error) {
    console.error("Error in QAsaveApi:", error.message); // Log error for debugging
    throw error; // Re-throw to handle it in calling function
  }
}
async function veriferSave(data, setAction, router, resetForm) {
  function formatDates(obj) {
    // Helper function to check if a string is a valid date
    function isDateString(value) {
      // Match strings that look like dates, avoiding purely numeric strings
      const dateRegex =
        /^[A-Za-z]{3}, \d{2} [A-Za-z]{3} \d{4} \d{2}:\d{2}:\d{2} GMT$|^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2})?(.\d{1,3})?(Z|[+-]\d{2}:\d{2})?)?$/;
      return dateRegex.test(value);
    }

    // Traverse object or array
    for (let key in obj) {
      if (typeof obj[key] === "string" && isDateString(obj[key])) {
        const date = new Date(obj[key]);
        if (!isNaN(date)) {
          obj[key] = `${date.getFullYear()}/${
            date.getMonth() + 1
          }/${date.getDate()}`;
        }
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        formatDates(obj[key]);
      }
    }
    return obj;
  }
  delete data.files;
  delete data.date_of_receipt;
  // delete data.batch_no;
  delete data.client_name;
  delete data.address_details;
  delete data.initiation_date_for_task;
  delete data.address;
  // delete data.date_of_joining;
  // delete data.exit_date;
  // delete data.DOB;
  // delete data.passport_vaild_till;
  // delete data.driving_licence_valid_till;
  delete data.created_at;
  delete data.updated_at;
  // delete data?.verification_type_details?.employee_details?.[0]?.base_data?.master_data;
  // delete data.verification_type_details.employee_details[0].base_data
  //   .date_of_joining;
  // delete data.verification_type_details.employee_details[0].base_data
  //   .date_of_leaving;
  // delete data.verification_type_count;

  // if (actionType === "submit") {
  //   data.is_submit = "yes";
  // }

  data = formatDates(data);
  // data.verification_types = JSON.stringify([
  //   ...(Array.isArray(data.verification_types)
  //     ? data.verification_types // If it's already an array, use it
  //     : JSON.parse(data.verification_types || "[]")), // Parse it if it's a JSON string or default to an empty array
  //   "address_details",
  //   "bank_details",
  //   // Uncomment to include specific types:
  //   // "education",
  //   // "employee",
  //   "CA_details",
  //   "family_details",
  //   "contact_details",
  //   "next_of_kin",
  // ]);

  // const cleanEmptyData = (data) => {
  //   // If the data is an array
  //   if (Array.isArray(data)) {
  //     // Filter out objects where all properties are empty
  //     const cleanedArray = data
  //       .map((item) => cleanEmptyData(item)) // Recursively clean each item
  //       .filter((item) => item && Object.keys(item).length > 0); // Remove empty objects

  //     // If all objects are removed, return an empty array
  //     return cleanedArray.length === 0 ? [] : cleanedArray;
  //   }

  //   // If the data is an object
  //   if (typeof data === "object" && data !== null) {
  //     const cleanedObject = {};

  //     // Loop through each property of the object
  //     Object.keys(data).forEach((key) => {
  //       const value = data[key];
  //       // Only add the property if it's not empty
  //       if (value !== "" && value !== null && value !== undefined) {
  //         cleanedObject[key] = cleanEmptyData(value); // Recursively clean the value
  //       }
  //     });

  //     return cleanedObject;
  //   }

  //   // If the data is neither an object nor an array, just return it as is
  //   return data;
  // };

  // const cleanedData = cleanEmptyData(data);
  try {
    const request = await fetch(`${uat_url}/${uat_case_save}`, {
      headers,
      method,
      body: JSON.stringify(data),
      credentials,
    });
    const response = await request.json();
    console.log("aaaa", response);

    if (response.status_code === 200) {
      console.log("succ", response);
      setAction((prev) => ({
        ...prev,
        loading: {
          ...prev.loading,
          status: data?.is_submit ? true : false, // Correct conditional check
        },
        open: false,
        openSnackbar: true, // Set openSnackbar to true to show the Snackbar
        snackBarData: {
          title: "Success",
          text: data?.is_submit
            ? "Your inputs has been successfully submitted! Thank you for providing your information."
            : "Your have edited verifier inputs successfully",
          severity: "success", // Success severity level for Snackbar
        },
      }));
      if (!data?.is_submit) {
        resetForm(response.data);
      }
      if (data?.is_submit) {
        router.push("/inbox");
      }
      //   parameters.setLoading(false);
      //   parameters.setModal(false);
    } else {
      setAction((prev) => ({
        ...prev,
        loading: {
          ...prev.loading,
          status: false, // Update loading status to false
        },
        open: false,
        openSnackbar: true, // Set openSnackbar to true to show the Snackbar
        snackBarData: {
          title: "Error",
          text: response.data.msg,
          severity: "error", // Success severity level for Snackbar
        },
      }));
      //   parameters.setNewUser({});
      //   parameters.setLoading(false);
      //   parameters.setModal(false);
      //   parameters.setOpenSnackbar(true);
      //   parameters.setSnackbarData({
      //     title:'Error',
      //     text: response.data.msg,
      //     severity: "error",
      //   });
    }
  } catch (e) {
    console.log("error", e);
    setAction((prev) => ({
      ...prev,
      loading: {
        ...prev.loading,
        status: false, // Update loading status to false
      },
      open: false,
      openSnackbar: true, // Set openSnackbar to true to show the Snackbar
      snackBarData: {
        title: "Error",
        text: data?.is_submit
          ? "Error occured while submitting"
          : "Error occured while saving",
        severity: "error", // Success severity level for Snackbar
      },
    }));
    //
    // console.log(e);
    // parameters.setLoading(false);
    // parameters.setOpenSnackbar(true);
    // parameters.setSnackbarData({
    //   title:'Error',

    //   text: "Error occurred while creating role",
    //   // color: "red",
    //   severity: "error",
    // });
  }
  return;
}
export const fetchQALList = async ({
  search = "",
  filters = {},
  limit,
  offset,
  //   cookieName = "data",
  //   setAction,
}) => {
  try {
    // const cookieData = getCookie(cookieName);

    // if (!cookieData) {
    //   setAction((prev) => ({
    //     ...prev,
    //     openSnackbar: true,
    //     snackBarData: {
    //       title: "Error",
    //       text: "User ID not found in cookies.",
    //       severity: "error",
    //     },
    //   }));
    //   throw new Error("User ID not found in cookies");
    // }

    // const parsedCookie = JSON.parse(cookieData);
    // const user_id = parsedCookie.user_id;

    const response = await fetch(`${uat_url}/${uat_qa_list}`, {
      // {filters.object.keys lenth>0 ?? filter:filters}
      headers,
      method,
      credentials,
      body: JSON.stringify({
        pagination_detail: { limit, offset },
        user_id: "201",
        ...(Object.keys(filters).length > 0 && { filters: filters }),
        ...(search !== "" && { search }),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      rows: data.data.data,
      total: data.data.total_count || 0,
    };
  } catch (error) {
    // setAction((prev) => ({
    //   ...prev,
    //   openSnackbar: true,
    //   snackBarData: {
    //     title: "Error",
    //     text: error.message || "Something went wrong. Please try again.",
    //     severity: "error",
    //   },
    // }));
    console.error("API call failed:", error);
    throw error;
  }
};
export {
  fetchQAList,
  deatilsOfEachCaseForQA,fetchUserListNexora,fetchCustomeventsNexora,fetchSystemeventsNexora,
  veriferSave,
  acceptApi,
  reworkApi,
  QAsaveApi,
  // , updateUser, deleteUser, fetchUserRole
};
