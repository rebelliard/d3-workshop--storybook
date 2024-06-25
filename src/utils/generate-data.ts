import { faker } from "@faker-js/faker";
import { DATA_DEFAULTS } from "../constants/common";

function generateEntry({
  min = DATA_DEFAULTS.min,
  max = DATA_DEFAULTS.max,
}: {
  min?: number;
  max?: number;
}) {
  return {
    label: faker.word.noun({ length: { min: 3, max: 15 } }),
    value: faker.number.int({ min, max }),
    goal: faker.number.int({ min, max }),
  };
}

export const generateData = ({
  count = DATA_DEFAULTS.count,
  min,
  max,
}: {
  count: number;
  min?: number;
  max?: number;
}) => {
  const data = faker.helpers.multiple(() => generateEntry({ min, max }), {
    count,
  });
  console.table(data);
  return data;
};
