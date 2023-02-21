import MuiAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Option } from './Option'

export interface ExtendedAutocompleteProps<T> extends AutocompleteProps<Option, boolean | undefined, boolean | undefined, boolean | undefined> {
  label: string
  value: Option
  options: Option[]
}

export const Autocomplete = <T,>({ label, value, options, renderInput, ...props }: ExtendedAutocompleteProps<T>) => {

  return (
    <MuiAutocomplete
      value={value as Option}
      options={options as Option[]}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputLabelProps={{
            ...params.InputLabelProps,
          }}
        />
      )}
      onChange={(newValue) => {
        if (newValue == null) {
          return {} as Option
        }
        return newValue
      }}
      {...props}
    />
  )
}
