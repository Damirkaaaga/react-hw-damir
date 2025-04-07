import { useState } from "react";

function MenuItem({ item }) {
  const [qty, setQty] = useState(1);

  return (
    <div
      style={{
        width: "580px",
        height: "200px",
        backgroundColor: "#fff",
        border: "1px solid rgba(53, 184, 190, 0.15)",
        borderRadius:"6px",
        display: "flex",
        padding: "26px",
        gap: "30px",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "0px",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          width: "378px",
          height: "147px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop:"10px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
              lineHeight: "20px",
              letterSpacing: "0.6px",
              fontWeight: 400,
              color: "#08090A",
              margin: 0,
            }}
          >
            {item.name}
          </h3>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              lineHeight: "20px",
              fontWeight: 400,
              color: "#35B8BE",
            }}
          >
            ${item.price.toFixed(2)} USD
          </div>
        </div>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "#546285",
            fontFamily: "Inter, sans-serif",
            margin: "0",
          }}
        >
          {item.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            style={{
              width: "43px",
              height: "45px",
              borderRadius: "6px",
              border: "1px solid #DDDDDD",
              backgroundColor: "#FAFAFA",
              textAlign: "center",
              fontSize: "16px",
              lineHeight: "27px",
              fontFamily: "Inter, sans-serif",
              color: "#000000",
              padding: "0 0 0 14px",
            }}
          />
          <button
            style={{
              width: "147px",
              height: "45px",
              backgroundColor: "#35B8BE",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              cursor: "pointer",
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
