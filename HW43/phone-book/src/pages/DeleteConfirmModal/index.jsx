import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function DeleteConfirmModal({ onConfirm, onCancel }) {
  return (
    <Modal show onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>Підтвердження</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Ви впевнені, що хочете видалити цей контакт?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>Скасувати</Button>
        <Button variant="danger" onClick={onConfirm}>Видалити</Button>
      </Modal.Footer>
    </Modal>
  );
}
