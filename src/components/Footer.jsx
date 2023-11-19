import useClasses from "../hooks/useClasses";
import logo from "/logo-glyph.png";

const styles = () => ({
    main: {
        padding: "20px 0px",
        textAlign: "center",
        background: "#151515",
        color: "#ececec",
        fontSize: "13px",
        marginTop: "auto"
    }
})

export default function Footer() {
    const classes = useClasses(styles)
  return (
    <footer className={classes.main}>
      Copyright &copy; 2023. All rights reserved | Team swiftsend{" "}
      <img src={logo} alt="logo" width="15px" />
    </footer>
  );
}
