import React, { useEffect, useState } from "react";
import { Modal } from "antd";

const TemplateModal = ({ templateContent, isModalOpen, setIsModalOpen }) => {
  // helper functions
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Template Preview Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {templateContent}
      </Modal>
    </>
  );
};
export default TemplateModal;
