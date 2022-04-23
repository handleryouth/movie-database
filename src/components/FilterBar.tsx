import { Select } from '@chakra-ui/react'

export interface FilterProps {
  title: string
  value: string
}

export interface FilterBarProps {
  title: string
  placeholder: string
  filterValue: FilterProps[]
}

const FilterBar = ({ title, placeholder, filterValue }: FilterBarProps) => {
  return (
    <div>
      <h1>{title}</h1>

      <Select placeholder={placeholder}>
        {filterValue.map((item, index) => (
          <option key={index} value={item.value}>
            {title}
          </option>
        ))}
      </Select>
    </div>
  )
}

export default FilterBar
