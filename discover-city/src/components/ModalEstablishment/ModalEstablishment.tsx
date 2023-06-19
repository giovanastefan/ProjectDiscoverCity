import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Establishment } from "../../types/Establishment";
import { Container, Coupon } from "./ModalEstablishment.styles";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTicketAlt,
  FaCommentDots,
  FaHeart,
  FaHeartBroken
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/rootReducer";
import ReviewComponent from "../ReviewComponent/ReviewComponent";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  establishment?: Establishment;
}

export const ModalEstablishment = ({
  isOpen,
  handleClose,
  establishment,
}: Props) => {
  const userState = useSelector((state: RootState) => state.userStore);
  const { id } = userState.user;
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleAddReview = () => {
    setShowReviewForm(true);
  };

  return (
    <Container>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{establishment?.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="establishment-description">
            {establishment?.description}
          </div>

          <div className="category">
            <span>{establishment?.category.category}</span>
          </div>

          <hr className="hr" />

          <Coupon>
            <h5>
              <FaTicketAlt /> Coupons
            </h5>
            {establishment?.coupon.map((c) => {
              return (
                <div key={c.code} className="coupon-details">
                  <span>{c.code}</span>
                </div>
              );
            })}
          </Coupon>

          <hr className="hr" />
          <div className="address">
            {establishment?.address.map((a) => {
              return (
                <div className="contact-info" key={a.id}>
                  <div className="contact-info-item">
                    <FaMapMarkerAlt className="contact-info-icon" />
                    <span>{`${a.city}, ${a.street}, ${a.neighborhood}`}</span>
                  </div>
                  <div className="contact-info-item">
                    <FaPhone className="contact-info-icon" />
                    <span>{establishment?.contacts[0].phone}</span>
                  </div>
                  <div className="contact-info-item">
                    <FaEnvelope className="contact-info-icon" />
                    <span>{establishment?.contacts[0].email}</span>
                  </div>
                  <a href={establishment?.site}>{establishment?.site}</a>
                  <br />
                  <a href={establishment?.menuUrl}>{establishment?.menuUrl}</a>
                </div>
              );
            })}
          </div>

          <hr className="hr" />
          <div className="review">
            <h5>
              <FaCommentDots /> Reviews
            </h5>
            {establishment?.reviews.map((review) => {
              return (
                <div className="review" key={review.id}>
                  <span className="review-name">{review.user.name}</span>
                  <div className="review-rating">
                    {Array.from({ length: review.rating }, (_, index) => (
                      <span key={index} className="star">
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <p className="review-description">{review.comment}</p>
                </div>
              );
            })}
          </div>

          {showReviewForm && (
            <ReviewComponent userId={id} establishmentId={establishment?.id} handleClose={() => setShowReviewForm(false)} />
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddReview}>
            Add a review
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
