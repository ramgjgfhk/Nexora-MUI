import { Plus_Jakarta_Sans } from "next/font/google";

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin-ext"],
});

export const topFormGroup = {
  // width: "49.2%",
  // height: "auto",
  // borderRadius: "20px",
};

export const mainContainer = {
  width: "100%",
  height: "auto",
  padding: "10px",
  backgroundColor: "white",
  margin: "0 auto",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
};
export const textfield = {
  "& .MuiInputBase-root": {
    height: "2rem",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "&:hover fieldset": {
      borderColor: "#1976d2",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #1976d2",
    },
    "&.Mui-disabled": {
      "& fieldset": {
        borderColor: "#d1d1d1 !important", // Set a light gray border when disabled
      },
      "& input": {
        color: "#a0a0a0", // Light gray text for disabled state
      },
    },
    "& input": {
      height: "1rem",
      fontSize: "0.8rem",
      color: "#303030",
    },
    "& textarea": {
      height: "1rem",
      fontSize: "0.8rem",
      color: "#303030",
    },
    "& input:focus": {
      borderColor: "green",
    },
    "& .MuiAutocomplete-option": {
      fontSize: "9px",
    },
  },
};

export const buttonBox = {
  display: "flex",
  justifyContent: "flex-end",
  mt: 2,
  pr: 3,
};

export const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  mb: 1,
  boxShodow: 3,
};
export const containerStyle = {
  border: "2px solid #E7E9EF",
  borderRadius: "12px",
  mb: 3,
};

export const tableHeadingStyle = {
  fontFamily: jakarta.style.fontFamily,
  // backgroundColor: "#F4F6F8",
  borderBottom: "1px solid #E7E9EB",
  fontSize: "14px",
  fontweight: 600,
  minWidth: "130px",
  borderRight: "1px solid #E7E9EB",
};

export const tableBodyStyle = {
  fontFamily: jakarta.style.fontFamily,
  fontSize: "12px",
  backgroundColor: "white",
};
export const tableBorderStyle = {
  // px: "5px  !important",
  // py: "5px !important",
  borderRight: "1px solid #E7E9EB",
};

export const tableBodyRowStyle = {
  // "&:hover": {
  //   backgroundColor: "black",
  // },
};

export const lableSize = {
  fontSize: 12,
  fontWeight: "bolder",
  whiteSpace: "normal", // allow line breaks
};

export const textFieldStyle = {
  height: "0.9rem",
  fontSize: "0.8rem",
  color: "#303030",
};

export const formLabelSize = {
  fontSize: "0.9rem",
  color: "black",
};
