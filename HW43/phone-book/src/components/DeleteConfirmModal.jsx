import React from 'react';

export default function DeleteConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="modal show d-block" tabIndex="-1" style={{ background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Підтвердження</h5>
          </div>
          <div className="modal-body">
            <p>Ви впевнені, що хочете видалити цей контакт?</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCancel}>
              Скасувати
            </button>
            <button className="btn btn-danger" onClick={onConfirm}>
              Видалити
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
