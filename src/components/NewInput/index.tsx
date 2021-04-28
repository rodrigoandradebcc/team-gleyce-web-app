import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const NewInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, ...rest }: InputProps,
  ref,
) => {
  // const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  // const handleInputBlur = useCallback(() => {
  //   setIsFocused(false);

  //   setIsFilled(!!inputRef.current?.value);
  // }, []);

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: 'value',
  //   });
  // }, [fieldName, registerField]);

  function handleChange(e: { target: { value: string } }): void {
    if (name === 'cpf') {
      const valueFormatted = applyMaskCPF(e.target.value);
      setValue(valueFormatted);
    } else if (name === 'phone') {
      const valueFormatted = applyMaskPhone(e.target.value);
      setValue(valueFormatted);
    } else {
      setValue(e.target.value);
    }
  }

  function applyMaskCPF(cpfValue: string): string {
    return cpfValue
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  }

  function applyMaskPhone(phoneValue: string): string {
    return phoneValue
      .replace(/\D/g, '')
      .substring(0, 11)
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
  }

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {/* {Icon && <Icon size={20} />} */}

      <input
        // onFocus={handleInputFocus}
        // onBlur={handleInputBlur}
        id={name}
        ref={ref}
        name={name}
        {...rest}
      />
    </Container>
  );
};

export const NewInput = forwardRef(NewInputBase);
