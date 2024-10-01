import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

const SecondRow = () => {
  return (
    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: "16px" }}>
        {[
          "Living",
          "Dining",
          "Bedroom",
          "Outdoor",
          "Office",
          "Lighting",
          "Rugs",
          "Accessories",
          "Brands",
          "Inspiration",
          "Gifts",
          "Sale",
        ].map((link) => (
          <Link
            key={link}
            href="#"
            underline="none"
            variant="body2"
            color="inherit"
          >
            {link}
          </Link>
        ))}
      </div>

      <TextField variant="outlined" size="small" placeholder="Search" />
    </Toolbar>
  );
};

export default SecondRow;
