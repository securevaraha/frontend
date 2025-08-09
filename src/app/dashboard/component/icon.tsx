import { SvgIcon } from "@mui/material";

function CircleONotchIcon(props:any) {
  return (
    <SvgIcon {...props} viewBox="0 0 512 512">
      <path
        fill="currentColor"
        d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208
           208-93.1 208-208h-48c0 88.4-71.6 160-160 160s-160-71.6-160-160
           71.6-160 160-160V48z"
      />
    </SvgIcon>
  );
}

export default CircleONotchIcon;
