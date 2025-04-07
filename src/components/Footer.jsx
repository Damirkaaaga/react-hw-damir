function Footer() {
  return (
    <footer
      style={{
        backgroundImage: 'url("src/public/footer.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        minHeight: "433px",
        backgroundSize: "cover",
        paddingTop: "80px",
        paddingBottom: "60.2px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "583.98px" }}>
            <img src="src/public/Logo.svg" alt="logo" />
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                lineHeight: "27px",
                fontWeight: 400,
                letterSpacing: "0.36px",
                color: "#546285",
                marginTop: "25px",
              }}
            >
              Takeaway & Delivery template
              <br />
              <span style={{ fontSize: "15px" }}>
                for small - medium businesses.
              </span>
            </p>
          </div>

          {[
            {
              title: "Company",
              items: ["Home", "Order", "FAQ", "Contact"],
            },
            {
              title: "Template",
              items: [
                "Style Guide",
                "Changelog",
                "Licence",
                "Webflow University",
              ],
            },
            {
              title: "Flowbase",
              items: ["More Cloneables"],
            },
          ].map((col, i) => (
            <div style={{ width: "189.33px" }} key={i}>
              <h4
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  lineHeight: "20px",
                  letterSpacing: "1.5px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  color: "#08090A",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
                {col.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "16px",
                      lineHeight: "27px",
                      color: "#546285",
                      marginBottom: "10px",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            width: "1200px",
            height: "1px",
            backgroundColor: "#7E828F",
            opacity: 0.09,
            margin: "99px auto 0",
          }}
        ></div>

        <div
          style={{
            width: "1200px",
            margin: "60.2px auto 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              lineHeight: "20px",
              color: "#353448",
              fontWeight: 400,
              marginTop: "70.8px",
            }}
          >
            <span>Built by</span>
            <span style={{ color: "#35B8BE", margin: "0 4px" }}>Flowbase</span>
            <span>· Powered by</span>
            <span style={{ color: "#35B8BE", marginLeft: "4px" }}>Webflow</span>
          </div>

          <div style={{ display: "flex", gap: "20px", marginTop: "61.2px" }}>
            <img
              src="src/public/icons/instagram.svg"
              alt="instagram"
              width="40"
              height="40"
            />
            <img
              src="src/public/icons/twitter.svg"
              alt="twitter"
              width="40"
              height="40"
            />
            <img
              src="src/public/icons/youtube.svg"
              alt="youtube"
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
