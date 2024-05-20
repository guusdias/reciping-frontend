import React, { useState, useEffect } from "react";
import RecipiesFeed from "../../components/RecipiesFeed/index";

export default function Profile() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <span className="loading loading-ring loading-lg bg-black"></span>
      ) : (
        <RecipiesFeed />
      )}
    </div>
  );
}
