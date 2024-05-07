import { Select } from "../selectMenu/Select";

export const SelectSection = ({ selectOptionsWithValueAndOnChange }) => {
  return (
    <>
      {selectOptionsWithValueAndOnChange?.map((option, index) => {
        return (
          <Select
            key={index}
            id={option.id}
            title={option.title}
            placeholder={option.placeholder}
            options={
              option.nested //Return the all the valuse of each clusters into one array oflabel and value
                ? option.options.flatMap((option, index) => {
                    return option.clusters.map((cluster, index) => ({
                      label: cluster,
                      value: cluster,
                    }));
                  })
                : option.options.map((option, index) => ({
                    label: option,
                    value: option,
                  }))
            }
            multiple={option.multiple}
            value={option.value}
            onChange={option.onChange}
            placeholder={option.placeholder}
          />
        );
      })}
    </>
  );
};
