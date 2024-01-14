import React, { useState } from 'react';
import './SalesTable.css';
import { FaSortUp, FaSortDown } from 'react-icons/fa'; // Import icons for sorting

const SalesTable = ({ sales }) => {
  const [sortedField, setSortedField] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (field) => {
    setSortedField(field);
    setSortOrder((order) => (order === 'asc' ? 'desc' : 'asc'));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(sales.length / itemsPerPage);

  const sortedSales = [...sales].sort((a, b) => {
    if (sortedField) {
      const valueA = a[sortedField];
      const valueB = b[sortedField];

      if (sortOrder === 'asc') {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    }

    return 0;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedSales = sortedSales.slice(startIndex, endIndex);

  return (
    <div className="sales-table-container">
      <table className="sales-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('weekEnding')}>
              Week Ending {sortedField === 'weekEnding' && (sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />)}
            </th>
            <th onClick={() => handleSort('retailSales')}>
              Retail Sales {sortedField === 'retailSales' && (sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />)}
            </th>
            <th onClick={() => handleSort('wholesaleSales')}>
              Wholesale Sales {sortedField === 'wholesaleSales' && (sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />)}
            </th>
            <th onClick={() => handleSort('unitsSold')}>
              Units Sold {sortedField === 'unitsSold' && (sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />)}
            </th>
            <th onClick={() => handleSort('retailerMargin')}>
              Retailer Margin {sortedField === 'retailerMargin' && (sortOrder === 'asc' ? <FaSortUp /> : <FaSortDown />)}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedSales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.weekEnding}</td>
              <td>${sale.retailSales.toLocaleString()}</td>
              <td>${sale.wholesaleSales.toLocaleString()}</td>
              <td>{sale.unitsSold}</td>
              <td>${sale.retailerMargin.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SalesTable;
