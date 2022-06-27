import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
    return (
        <Stack spacing={20}>
            <Pagination count={42} variant="outlined" shape="rounded" />
        </Stack>
    );
}