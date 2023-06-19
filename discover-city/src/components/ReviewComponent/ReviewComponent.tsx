import { useState } from "react";
import {  StyledTextarea, StyledButton, StyledFormContainer, StyledHeading, StyledForm, StyledLabel, StyledInput } from './ReviewComponent.styles';
import axios from "axios";

interface ReviewFormData {
  rating: number;
  comment: string;
  favorite: boolean;
}

interface Props {
  establishmentId?: number;
  userId: string;
  handleClose: () => void;
}

const ReviewComponent = ({ establishmentId, userId, handleClose } : Props) => {
  const [reviewFormData, setReviewFormData] = useState<ReviewFormData>({
    rating: 0,
    comment: "",
    favorite: false,
  });

  const handleReviewFormChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const target = event.target as HTMLInputElement;
      setReviewFormData((prevFormData) => ({
        ...prevFormData,
        [name]: target.checked,
      }));
    } else {
      setReviewFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleReviewFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {

      const response = await axios.post(
        `http://localhost:8080/establishments/${establishmentId}/addReview?userId=${userId}`,
        {
          comment: reviewFormData.comment,
          rating: reviewFormData.rating,
          favorite: reviewFormData.favorite,
        }
      );

      handleClose();

      setReviewFormData({
        rating: 0,
        comment: "",
        favorite: false,
      });
    } catch (error) {
      console.error("Error registering the review:", error);
    }
  };

  return (
    <StyledFormContainer>
      <StyledHeading>Add a Review</StyledHeading>
      <StyledForm onSubmit={handleReviewFormSubmit}>
        <StyledLabel>
          Rating:
          <StyledInput
            type="number"
            name="rating"
            value={reviewFormData.rating}
            onChange={handleReviewFormChange}
            placeholder="Rating"
          />
        </StyledLabel>
        <StyledLabel>
          <StyledTextarea
            name="comment"
            value={reviewFormData.comment}
            onChange={handleReviewFormChange}
            placeholder="Coment here!"
          />
        </StyledLabel>
        <StyledLabel>
          Favorite:
          <StyledInput
            type="checkbox"
            name="favorite"
            checked={reviewFormData.favorite}
            onChange={handleReviewFormChange}
          />
        </StyledLabel>
        <StyledButton type="submit">Submit Review</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default ReviewComponent;
