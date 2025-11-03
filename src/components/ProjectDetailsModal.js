import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { Github } from "lucide-react"; // icon
import "./ProjectDetailsModal.css"; // styling

const ProjectDetailsModal = ({ show, handleClose, project }) => {
  if (!project) return null;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      centered
      dialogClassName="fullscreen-modal"
      contentClassName="modal-glass"
    >
      {/* Top Bar */}
      <div className="modal-header-bar">
        <h4 className="project-title">{project.title}</h4>

        {project.github && (
          <Button
            variant="outline-light"
            className="git-btn"
            onClick={() => window.open(project.github, "_blank")}
          >
            <Github size={18} style={{ marginRight: "6px" }} />
            GitHub Repo
          </Button>
        )}

        <button className="close-btn" onClick={handleClose}>
          ✕
        </button>
      </div>

      {/* Body Content */}
      <div className="modal-body-content">
        <p className="project-desc">{project.longDescription}</p>

        {/* Image Grid */}
        <Row className="image-grid">
          {project.images.map((img, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="img-col">
              <img src={img} alt="project-preview" className="preview-img" />
            </Col>
          ))}
        </Row>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
