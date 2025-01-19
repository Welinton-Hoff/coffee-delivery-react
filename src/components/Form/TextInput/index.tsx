import {
  useState,
  LegacyRef,
  forwardRef,
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
} from "react";

import { FieldError } from "react-hook-form";

import * as S from "./styles";

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  optional?: boolean;
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export const TextInput = forwardRef(function TextInput(
  {
    error,
    onBlur,
    onFocus,
    optional,
    containerProps,
    ...rest
  }: ITextInputProps,
  ref: LegacyRef<HTMLInputElement>
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true);
    onFocus?.(event);
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false);
    onBlur?.(event);
  }

  return (
    <S.Box {...containerProps}>
      <S.Container data-state={isFocused ? "focused" : "blurred"}>
        <input
          {...rest}
          ref={ref}
          type="text"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />

        {optional ? <span>Optional</span> : null}
      </S.Container>

      {error?.message && (
        <S.ErrorMessage role="alert">{error.message}</S.ErrorMessage>
      )}
    </S.Box>
  );
});
