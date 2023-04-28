import { IconButton, IconButtonProps } from "@mui/material"

export const MaterialIconButton: React.FC<IconButtonProps> = (props) => {

    const {children, size, edge, disabled, disableRipple, onClick} = props

    return (
        <IconButton
            onClick={onClick}
            disabled={disabled}
            disableRipple={disableRipple}
            size={size}
            edge={edge}
        >
            {children}
        </IconButton>
    )
}