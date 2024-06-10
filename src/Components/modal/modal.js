import React from "react";
import { Modal, Button } from "react-bootstrap";

export const ModalShow = ({
  show,
  onHide,
  onDeleteConfirm,
  isDeleteConfirm,
}) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {isDeleteConfirm ? "Confirm Deletion" : "Modal Title"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isDeleteConfirm ? (
          <p>Are you sure you want to delete this property?</p>
        ) : (
          "Modal Body Content"
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {isDeleteConfirm && (
          <Button variant="danger" onClick={onDeleteConfirm}>
            Confirm Delete
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};
