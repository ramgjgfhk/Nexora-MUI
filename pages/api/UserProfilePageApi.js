const nexora_url = process.env.NEXT_PUBLIC_NEXORA_URL;
const user_datails = "api/customer/profile/get";

const headers = new Headers();
headers.append("Content-Type", "application/json");
const method = "POST";
const credentials = "include";


export const fetchUserDetails = async (nexora_id) => {
  try {
    const request = await fetch(`${nexora_url}/${user_datails}`, {
      method,
      headers,
      credentials,
      body: JSON.stringify({ nexora_id }),
    });

    if (!request.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const response =await request.json();
    if (response?.status_code === 200) {
        console.log(response)
      return response.data;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (e) {
    console.error("Error fetching user details:", e);
    return null;
  }
};
