import * as React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div
      style={{
        backgroundColor: "#F7FAFC",
        padding: "8px",
        borderRadius: "8px",
        margin:'0 auto'
      }}
    >
      <Image src="/en_full_logo.png" alt="Logo" width={170} height={25} />
    </div>
  );
}
