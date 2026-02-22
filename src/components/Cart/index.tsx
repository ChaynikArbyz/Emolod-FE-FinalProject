import './style.css'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelector } from "../../hooks/redux";



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#ff6600',
    color: '#fff',
  },
}));

const Cart = () => {
    const totalCount = useAppSelector(state => state.user.totalCount);

    return (
        <IconButton aria-label="cart" href="/cart"
          sx={{'&:hover': {
                transition: 'color 0.3s',
                color: '#c44e00',
            },
          }}
        >
          <StyledBadge badgeContent={totalCount} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
    )
}

export default Cart