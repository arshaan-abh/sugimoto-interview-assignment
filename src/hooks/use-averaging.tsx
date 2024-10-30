import { useMemo } from "react";

const useAveraging = (numbers: number[]) =>
  useMemo(() => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  }, [numbers]);

export default useAveraging;
