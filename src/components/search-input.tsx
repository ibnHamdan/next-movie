import { ChangeEvent, useState } from 'react';

interface SearchInputProps {
  onSearchChange: (searchText: string) => void;
}
export const SearchInput: React.FC<SearchInputProps> = ({
  onSearchChange,
}) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    setSearchText(searchText);
    //onSearchChange(searchText);
  };

  const handleSearchButtonClick = () => {
    onSearchChange(searchText);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="type movie name"
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchButtonClick}>Search</button>
    </div>
  );
};
