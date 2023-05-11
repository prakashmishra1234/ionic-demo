import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface propsType {
  loading: boolean;
}
const CunstomBackdrop: React.FC<propsType> = ({ loading }: propsType) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default CunstomBackdrop;
