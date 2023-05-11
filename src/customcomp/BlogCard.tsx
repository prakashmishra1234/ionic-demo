import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { DateFormat } from "../utils/DateAndTime";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface blogCardProps {
  [key: string]: any;
  index: number;
}

export default function BlogCard({ item, index }: blogCardProps) {
  return (
    <Card
      key={index}
      sx={{
        marginBottom: "1rem",
        width: { md: 400, xs: "100%" },
        position: "relative",
      }}
    >
      <CardHeader
        title={item?.title ?? ""}
        subheader={DateFormat(item?.publishedAt ?? null)}
      />
      <CardMedia
        component="img"
        height="194"
        image={item?.urlToImage ?? ""}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item?.description ?? "N/A"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography
          component="a"
          href={item?.url ?? ""}
          sx={{ position: "absolute", bottom: "0" }}
        >
          View Details
        </Typography>
      </CardActions>
    </Card>
  );
}
