import { useState } from "react";

interface ReviewFormData {
  rating: number;
  comment: string;
  isFavorite: boolean;
}

const ReviewComponent = () => {
  const [reviewFormData, setReviewFormData] = useState<ReviewFormData>({
    rating: 0,
    comment: "",
    isFavorite: false,
  });

  const handleReviewFormChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setReviewFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleReviewFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setReviewFormData({
      rating: 0,
      comment: "",
      isFavorite: false,
    });
  };
  return (
    <div>
      <h5>Add a Review</h5>
      <form onSubmit={handleReviewFormSubmit}>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={reviewFormData.rating}
            onChange={handleReviewFormChange}
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea
            name="comment"
            value={reviewFormData.comment}
            onChange={handleReviewFormChange}
          />
        </label>
        <br />
        <label>
          Favorite:
          <input
            type="checkbox"
            name="isFavorite"
            checked={reviewFormData.isFavorite}
            onChange={handleReviewFormChange}
          />
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewComponent;
