import './style.css'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import { getCartForCurrentUser } from '../../services/localStorageHelper';



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
    const [items, setItems] = useState<number[]>(() => {return getCartForCurrentUser() ?? []});

    useEffect(() => {
      const update = () => {
        const cart = getCartForCurrentUser() || [];
        setItems(cart);
      }

      update();

      window.addEventListener('cartChanged', update);

      return () => {
        window.removeEventListener('cartChanged', update);
      }
    }, []);

    return (
        <IconButton aria-label="cart" href="/cart"
          sx={{'&:hover': {
                transition: 'color 0.3s',
                color: '#c44e00',
            },
          }}
        >
          <StyledBadge badgeContent={items.length} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
    )
}

export default Cart