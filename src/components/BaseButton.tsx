import { Button } from "@mui/material";

interface PropsI {
  text: any;
  variant: "contained" | "outlined";
  width: string;
  disabled: boolean;
  type?: "submit";
  handleClick?: () => void;
  backgroundColor: any
}

const BaseButton = ({
  text,
  variant,
  width,
  backgroundColor,
  disabled,
  type,
  handleClick,
}: PropsI) => {
  /* variant="contained" : green button */
  /* variant="outlined" : white button with border grey */
  return (
    <>
      <Button
        onClick={handleClick}
        disabled={disabled}
        type={type && type}
        style={{ width , backgroundColor ,borderRadius:'10px', height:'100%' }}
        variant={variant}
      >
        {text}
      </Button>
    </>
  );
};

export default BaseButton;
