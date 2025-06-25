import * as React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div
      style={{
        borderRadius: "8px",
        margin:'0 auto',
      }}
    >
      <Image src="/en_full_logo.png" alt="Logo" width={100} height={20} />
    </div>
  );
}
