const FIREBASE_DOMAIN =
  "https://review-soroush-default-rtdb.europe-west1.firebasedatabase.app";

export async function getAllReviews() {
  const response = await fetch(`${FIREBASE_DOMAIN}/reviews.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch reviews.");
  }

  const transformedReviews = [];

  for (const key in data) {
    const reviewObj = {
      id: key,
      ...data[key],
    };

    transformedReviews.push(reviewObj);
  }
  return transformedReviews;
}

export async function getSingleReview(reviewId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/reviews/${reviewId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch review.");
  }

  const loadedReview = {
    id: reviewId,
    ...data,
  };

  return loadedReview;
}

export async function addReview(reviewData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/reviews.json`, {
    method: "POST",
    body: JSON.stringify(reviewData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create review.");
  }

  return null;
}

