import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import { Marks } from "@interface/iCommon"

export const Add = ({ onClose, onShow }) => {
    const [marks, setMarks] = useState <Marks>({ 
        rollNo: 0, 
        telugu: 0, 
        hindi: 0, 
        english: 0, 
        mathematics: 0, 
        science: 0, 
        social: 0 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMarks((prevMarks) => ({ ...prevMarks, [name]: value }));
    };

    const onSave = () => {
        const marksList = JSON.parse(localStorage.getItem("marks_list")) || [];
        marksList.push(marks)
        localStorage.setItem("marks_list", JSON.stringify(marksList))
        onClose()
    }
    return (
        <Modal show={onShow} onHide={onClose} backdrop="static" size="lg">
        <Modal.Header closeButton>
            <Modal.Title>Add New Result</Modal.Title>
        </Modal.Header>
        <Modal.Body className='add_result_content'>
            <Form>
                <Form.Group controlId="rollNo" className='mg-t'>
                    <Form.Label>Roll No</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Roll No"
                        name="rollNo" 
                        value={marks.rollNo} 
                        onChange={handleChange}
                            />
                </Form.Group>
                <Form.Group controlId="telugu" className='mg-t'>
                    <Form.Label>Telugu</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter Marks" 
                        min="0" 
                        max="100" 
                        name="telugu" 
                        value={marks.telugu} 
                        onChange={handleChange} 
                    />
                </Form.Group>
                <Form.Group controlId="hindi" className='mg-t'>
                    <Form.Label>Hindi</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter Marks" 
                        name="hindi" 
                        value={marks.hindi} 
                        onChange={handleChange} 
                        min="0" 
                        max="100"/>
                </Form.Group>
                <Form.Group controlId="english" className='mg-t'>
                    <Form.Label>English</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter Marks" 
                        name="english" 
                        value={marks.english} 
                        onChange={handleChange} 
                        min="0" 
                        max="100"/>
                </Form.Group>
                <Form.Group controlId="mathematics" className='mg-t'>
                    <Form.Label>Mathematics</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter Marks" 
                        name="mathematics" 
                        value={marks.mathematics} 
                        onChange={handleChange} 
                        min="0" 
                        max="100"/>
                </Form.Group>
                <Form.Group controlId="science" className='mg-t'>
                    <Form.Label>Science</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter Marks" 
                        name="science" 
                        value={marks.science} 
                        onChange={handleChange} 
                        min="0" 
                        max="100"/>
                </Form.Group>
                <Form.Group controlId="social" className='mg-t'>
                    <Form.Label>Social</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter Marks" 
                        name="social" 
                        value={marks.social} 
                        onChange={handleChange} 
                        min="0" 
                        max="100"/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>Close</Button>
            <Button variant="primary" onClick={onSave}>Save</Button>
        </Modal.Footer>
    </Modal>
    )

}