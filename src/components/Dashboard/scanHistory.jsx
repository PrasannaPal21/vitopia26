'use client'
import React, { useEffect, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import { motion } from "framer-motion";
import { signIn, useSession } from 'next-auth/react';
import { generateToken } from '@/lib/jwttoken';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default function ScanHistory() {
    const [data, setData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalParticipants, setTotalParticipants] = useState(0);
    const [todayParticipants, setTodayParticipants] = useState(0);
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);

    // Replace the old sport and sub-category filters with a single event filter
    const [eventFilter, setEventFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch data only if a session exists
    useEffect(() => {
        if (!session) return; // Do nothing if not authenticated

        const fetchData = async () => {
            try {
                setLoading(true);
                const generated_token = generateToken(session?.user, 60 * 60 * 24);

                const response = await fetch('/api/fetch/scan_history', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.NEXT_API_TOKEN}`,
                        'Token': generated_token
                    }
                });

                if (response.status !== 200) {
                    throw new Error('There was an error occurred. Please refresh the page.');
                }
                const result = await response.json();

                console.log(result);
                setData(result?.data || []);

                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [session]);

    // Define columns
    // Renamed the "Sport" column to "Event" (and use the "event" accessor)
    // Also added a new "Category" column that displays the regType value.
    const columns = React.useMemo(() => [
        { Header: 'S.No', accessor: 'id' },
        { Header: 'Admin Email', accessor: 'adminEmail' },
        { Header: 'User Email', accessor: 'userEmail' },
        { Header: 'Invoice ID', accessor: 'invoiceId' },
        { Header: 'Created At', accessor: 'createdAt' },
    ], []);

    

    // Compute unique values for the dropdowns
    const uniqueEvents = React.useMemo(() => {
        return Array.from(new Set(data.map(item => item.event)));
    }, [data]);

    const uniqueCategories = React.useMemo(() => {
        return Array.from(new Set(data.map(item => item.regType)));
    }, [data]);

    // Compute filtered data based on search and dropdown filters.
    const filteredData = React.useMemo(() => {
        return data.filter(item => (
            (!searchTerm || (item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.universityName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.event?.toLowerCase().includes(searchTerm.toLowerCase()))) &&
            (!eventFilter || item.event === eventFilter) &&
            (!categoryFilter || item.regType === categoryFilter)
        ));
    }, [data, searchTerm, eventFilter, categoryFilter]);

    // Setup the table instance with pagination using filtered data.
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        { columns, data: filteredData, initialState: { pageIndex: 0, pageSize: 100 } },
        usePagination
    );

    const selectedFields = ["id", "adminEmail", "userEmail", "invoiceId", "createdAt"];

    const downloadExcel = () => {
        const filteredData = data.map(entry =>
            selectedFields.reduce((obj, field) => {
                obj[field] = entry[field];
                return obj;
            }, {})
        );

        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
        saveAs(blob, "Registrations.xlsx");
    };

    // Show a spinner while the session is loading
    if (status === "loading" || loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <motion.div
                    className="w-12 h-12 border-t-4 border-blue-500 rounded-full animate-spin"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                ></motion.div>
            </div>
        );
    }

    // If the user is not authenticated, show the sign in view
    if (!session) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-black min-h-screen flex flex-col items-center justify-center gap-10 p-4"
            >
                <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
                <p className="text-xl text-gray-300">You are not authenticated. Please sign in.</p>
                <button
                    onClick={() => signIn("google", { callbackUrl: "/auth/role-bridge" })}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Sign In
                </button>
            </motion.div>
        );
    }

    // If data hasn't been fetched yet, show a loading spinner
    if (data.length === 0) {
        return (
            <div className="relative min-h-screen flex flex-col items-center justify-center bg-black">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    {/* Creative SVG illustration */}
                    <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-24 h-24 text-gray-500 mb-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 17v-6a3 3 0 016 0v6m-6 0h6"
                        />
                    </motion.svg>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-2xl font-bold text-white"
                    >
                        Oops! No Registrations Found
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-2 text-gray-400 text-center max-w-md"
                    >
                        You don't have access to view the registrations or No registrations found.
                    </motion.p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white p-5 text-center md:px-18 lg:px-24 pt-20 md:pt-28">
            <h1 className="font-bold p-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Registered People
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center p-4">
                <input
                    type="text"
                    placeholder="Search by name, email, university or event"
                    className="w-[300px] h-[50px] bg-white text-black rounded-md p-2"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select
                    className="w-[300px] h-[50px] bg-white text-black rounded-md p-2"
                    value={eventFilter}
                    onChange={e => setEventFilter(e.target.value)}
                >
                    <option value="">All Events</option>
                    {uniqueEvents.map((event, index) => (
                        <option key={index} value={event}>
                            {event}
                        </option>
                    ))}
                </select>
                <select
                    className="w-[300px] h-[50px] bg-white text-black rounded-md p-2"
                    value={categoryFilter}
                    onChange={e => setCategoryFilter(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {uniqueCategories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
                <button
                    onClick={downloadExcel}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Download Excel
                </button>
            </div>
            <div className="overflow-x-auto">
                <table {...getTableProps()} className="w-full border-collapse">
                    <thead>
                        {headerGroups.map((headerGroup, hIndex) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={hIndex}>
                                {headerGroup.headers.map((column, cIndex) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        key={cIndex}
                                        className="px-4 py-2 border-b-2 border-gray-600 bg-gray-800 text-left font-bold"
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, rowIndex) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={rowIndex}>
                                    {row.cells.map((cell, cellIndex) => (
                                        <td
                                            {...cell.getCellProps()}
                                            key={cellIndex}
                                            className="px-4 py-2 border-b border-gray-600 bg-gray-700 text-left"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="pagination flex gap-4 relative items-center justify-center p-8">
                <button
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                    className="border rounded-sm px-1 hover:bg-white hover:text-black"
                >
                    {'<<'}
                </button>{' '}
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className="border rounded-sm px-1 hover:bg-white hover:text-black"
                >
                    {'<'}
                </button>{' '}
                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="border rounded-sm px-1 hover:bg-white hover:text-black"
                >
                    {'>'}
                </button>{' '}
                <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                    className="border rounded-sm px-1 hover:bg-white hover:text-black"
                >
                    {'>>'}
                </button>{' '}
                <span>
                    Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>{' '}
                </span>
                <select
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}
                    className="bg-black text-white border rounded-sm p-1"
                >
                    {[10, 20, 50, 100].map(size => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
