import React, { useState, useEffect } from "react";
import { Establishment } from "../../types/Establishment";
import {
    FormWrapper,
  FormContainer,
  Input,
  Select,
  Option,
  Button,
} from "./SearchContainer.styles";

interface Category {
  id: number;
  category: string;
}

interface SearchContainerProps {
  onSearchResults: (results: Establishment[]) => void;
}

const SearchContainer: React.FC<SearchContainerProps> = ({
  onSearchResults,
}) => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [city, setCity] = useState("");
  const [rating, setRating] = useState<number | undefined>();

  useEffect(() => {
    // Fetch categories from http://localhost:8080/categories
    fetch("http://localhost:8080/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleSearch = () => {
    // Call your search service API with the selected filters
    // Replace 'http://localhost:8080/custom' with your actual API endpoint
    const url = new URL("http://localhost:8080/search/custom");
    const params: any = {};

    if (name) params.name = name;
    if (selectedCategory) params.category = selectedCategory;
    if (city) params.city = city;
    if (rating) params.rating = rating.toString();

    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        onSearchResults(data);
      })
      .catch((error) => console.error("Error searching:", error));
  };

  return (
    <FormWrapper>
  <FormContainer>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
      <Select
        value={selectedCategory}
        onChange={(e: any) => setSelectedCategory(e.target.value)}
      >
        <Option value="">Search by category</Option>
        {categories.map((category) => (
          <Option key={category.id} value={category.category}>
            {category.category}
          </Option>
        ))}
      </Select>
      <Input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e: any) => setCity(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Average grade"
        value={rating !== undefined ? rating.toString() : ""}
        onChange={(e: any) => setRating(parseFloat(e.target.value))}
      />
      <Button onClick={handleSearch}>Search</Button>
      </FormContainer>
</FormWrapper>
  );
};

export default SearchContainer;
