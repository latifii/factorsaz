import { dividerClasses } from "@mui/material/Divider";
import { checkboxClasses } from "@mui/material/Checkbox";
import { menuItemClasses } from "@mui/material/MenuItem";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { alpha, Theme } from "@mui/material";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------
type BgBlurProps = {
  color?: string;
  blur?: number;
  opacity?: number;
  imgUrl?: string;
};

export const menuItem = (theme: Theme) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.75, 1),
  borderRadius: theme.shape.borderRadius * 0.75,
  "&:not(:last-of-type)": {
    marginBottom: 4,
  },
  [`&.${menuItemClasses.selected}`]: {
    fontWeight: theme.typography.fontWeightBold,
    backgroundColor: theme.palette.action.selected,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  [`& .${checkboxClasses.root}`]: {
    padding: theme.spacing(0.5),
    marginLeft: theme.spacing(-0.5),
    marginRight: theme.spacing(0.5),
  },
  [`&.${autocompleteClasses.option}[aria-selected="true"]`]: {
    backgroundColor: theme.palette.action.selected,
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  [`&+.${dividerClasses.root}`]: {
    margin: theme.spacing(0.5, 0),
  },
});

export function bgBlur(props: BgBlurProps) {
  const color = props?.color || "#000000";
  const blur = props?.blur || 6;
  const opacity = props?.opacity || 0.8;
  const imgUrl = props?.imgUrl;

  if (imgUrl) {
    return {
      position: "relative",
      backgroundImage: `url(${imgUrl})`,
      "&:before": {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9,
        content: '""',
        width: "100%",
        height: "100%",
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
      },
    };
  }

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity),
  };
}
