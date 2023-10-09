
import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Comp2() {
    return (
        <div>
            <Badge badgeContent={1} color="primary">
                <ShoppingCartIcon color="action" sx={{ position: 'relative', bottom: 16, marginLeft:43}} />
            </Badge>
        </div>
    )
}

export default Comp2