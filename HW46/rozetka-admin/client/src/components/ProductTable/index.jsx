import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/thunks/productsThunks';
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function ProductTable({ onEdit, onDelete }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const valA = a[sortConfig.key] ?? '';
    const valB = b[sortConfig.key] ?? '';
    if (typeof valA === 'number' && typeof valB === 'number') {
      return sortConfig.direction === 'asc' ? valA - valB : valB - valA;
    } else {
      return sortConfig.direction === 'asc'
        ? String(valA).localeCompare(String(valB))
        : String(valB).localeCompare(String(valA));
    }
  });

  const requestSort = key => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => (
    <Box sx={{ display: 'inline-flex', flexDirection: 'column', ml: 0.5 }}>
      <ArrowDropUpIcon
        sx={{ fontSize: '18px', opacity: sortConfig.key === key && sortConfig.direction === 'asc' ? 1 : 0.3 }}
      />
      <ArrowDropDownIcon
        sx={{ fontSize: '18px', mt: '-8px', opacity: sortConfig.key === key && sortConfig.direction === 'desc' ? 1 : 0.3 }}
      />
    </Box>
  );

  const columnStyle = {
    fontFamily: 'Inter',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '100%',
    color: '#726969',
    textAlign: 'center',
    padding: '10px 12px'
  };

  return (
    <Box sx={{ px: 4, display: 'flex', justifyContent: 'center' }}>
      <table
        style={{
          width: '872px',
          borderSpacing: 0,
          borderCollapse: 'collapse',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }}
      >
        <thead style={{ backgroundColor: '#0EC86F', height: '39px' }}>
          <tr>
            {['id', 'category', 'title', 'quantity', 'price'].map((key) => (
              <th
                key={key}
                style={{ ...columnStyle, width: '145px', cursor: 'pointer' }}
                onClick={() => requestSort(key)}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {getSortIcon(key)}
                </Box>
              </th>
            ))}
            <th style={{ ...columnStyle, width: '147px' }}></th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((prod, index) => {
            const isEven = index % 2 === 0;
            const rowColor = isEven ? '#D9D9D9' : '#3CD78C';
            const textColor = isEven ? '#FFFFFF' : '#A58F8F';

            return (
              <tr
                key={prod.id}
                style={{
                  backgroundColor: rowColor,
                  color: textColor,
                  fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '100%',
                  height: '39px',
                  textAlign: 'center'
                }}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={{ padding: '10px 12px', width: '145px', textAlign: 'center' }}>{prod.id}</td>
                <td style={{ padding: '10px 12px', width: '145px', textAlign: 'center' }}>{prod.category}</td>
                <td style={{ padding: '10px 12px', width: '145px', textAlign: 'center' }}>{prod.title}</td>
                <td style={{ padding: '10px 12px', width: '145px', textAlign: 'center' }}>{prod.quantity}</td>
                <td style={{ padding: '10px 12px', width: '145px', textAlign: 'center' }}>{Number(prod.price).toLocaleString()}</td>
                <td style={{ padding: '10px 12px', width: '147px', textAlign: 'center' }}>
                  <Button onClick={() => onEdit(prod)} size="small" sx={{ minWidth: 0 }}>
                    <EditIcon sx={{ color: '#000000' }} />
                  </Button>
                  <Button onClick={() => onDelete(prod)} size="small" sx={{ minWidth: 0 }}>
                    <DeleteIcon sx={{ color: '#000000' }} />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}
