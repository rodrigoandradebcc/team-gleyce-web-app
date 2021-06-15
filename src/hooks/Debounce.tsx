interface DebounceProps {
  timeValue?: number;
}

interface InternalProps {
  internalFunction: (item: string) => Promise<void>;
  event?: React.ChangeEvent<HTMLInputElement>;
}

interface DebounceReturn {
  debounce({ internalFunction, event }: InternalProps): void;
}

let time: NodeJS.Timeout;
export const useDebounce = (params?: DebounceProps): DebounceReturn => {
  const debounce = (internal: InternalProps): void => {
    const { internalFunction, event } = internal;
    clearTimeout(time);
    time = setTimeout(() => {
      if (event) {
        internalFunction(event.target.value);
      }
    }, params?.timeValue || 1000);
  };
  return { debounce };
};
