import React, { useMemo } from "react";
import "../Auth.css";

// type props
type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

const ConfirmationCodeInputBox = ({ value, valueLength, onChange }: Props) => {
  // regexp for the input to only allow digits
  const re = new RegExp(/^\d+$/);
  const valueItems = useMemo(() => {
    // split method used to change string to an Array
    const valueArray = value.split("");
    const items: Array<string> = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (re.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = re.test(targetValue);

    if (!re.test(targetValue) && targetValue !== "") {
      return;
    }
    // if input has no digit, this leaves an empty space
    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);

      onChange(newValue);

      if (!isTargetValueDigit) {
        return;
      }

      // focusToNextInput(target);

      const nextElementSibling =
        target.nextElementSibling as HTMLInputElement | null;

      if (nextElementSibling) {
        nextElementSibling.focus();
      }
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);

      target.blur();
    }

    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1);

    onChange(newValue);

    if (!isTargetValueDigit) {
      return;
    }

    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();

      const nextElementSibling =
        target.nextElementSibling as HTMLInputElement | null;

      if (nextElementSibling) {
        nextElementSibling.focus();
      }
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();

      const previousElementSibling =
        target.previousElementSibling as HTMLInputElement | null;

      if (previousElementSibling) {
        previousElementSibling.focus();
      }
    }

    // keep the selection range position
    target.setSelectionRange(0, targetValue.length);

    // triggers when backspace key is clicked
    if (key !== "Backspace" || targetValue !== "") {
      return;
    }

    // when backspace key is clicked, this removes digits and focus on the input box

    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;

    target.setSelectionRange(0, target.value.length);
  };

  return (
    <div className="otp-group">
      {valueItems.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={valueLength}
          className="otp-input"
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
          onKeyDown={inputOnKeyDown}
          onFocus={inputOnFocus}
        />
      ))}
    </div>
  );
};

export default ConfirmationCodeInputBox;
