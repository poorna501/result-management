import { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../../../src/assets/css/index.css'
import { Add } from './Add';

export const List = () => {    
    const marksList = JSON.parse(localStorage.getItem("marks_list")) || [];
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; 
    const totalPages = Math.ceil(marksList.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = marksList.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="nav_container">
            <div className='d-flex justify-content-end'>
                <Button variant="primary" onClick={handleShow} className="add-result-button">Add</Button>
            </div>
            <div className='result-list'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Roll No</th>
                            <th>Telugu</th>
                            <th>Hindi</th>
                            <th>English</th>
                            <th>Mathematics</th>
                            <th>Science</th>
                            <th>Social</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                                currentItems.map((marks:any, index:any) => (
                                    <tr key={index}>
                                        <td>{marks.rollNo}</td>
                                        <td>{marks.telugu}</td>
                                        <td>{marks.hindi}</td>
                                        <td>{marks.english}</td>
                                        <td>{marks.mathematics}</td>
                                        <td>{marks.science}</td>
                                        <td>{marks.social}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="text-center">No data available</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
            <div className="pagination d-flex justify-content-end mt-3 ">
                <Button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1}>&lt;</Button>
                <span className='center'>{` ${currentPage} of ${totalPages} `}</span>
                <Button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                    disabled={currentPage === totalPages}>&gt;</Button>
            </div>
            {show && (
                <div>
                    <Add onClose={handleClose} onShow={handleShow} />
                </div>
            )}
        </div>
    )
}