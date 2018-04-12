import { $post } from './base';

const PATH = 'cal';

const add = async (value1, value2) => {
  try {
    const res = await $post(`${PATH}/add`, JSON.stringify({
      value1,
      value2,
    }));

    return res;
  } catch (error) {
    throw error;
  }
};

const minus = async (value1, value2) => {
  try {
    const res = await $post(`${PATH}/minus`, JSON.stringify({
      value1,
      value2,
    }));

    return res;
  } catch (error) {
    throw error;
  }
};

const multiply = async (value1, value2) => {
  try {
    const res = await $post(`${PATH}/multiply`, JSON.stringify({
      value1,
      value2,
    }));

    return res;
  } catch (error) {
    throw error;
  }
};

const divide = async (value1, value2) => {
  try {
    const res = await $post(`${PATH}/divide`, JSON.stringify({
      value1,
      value2,
    }));

    return res;
  } catch (error) {
    throw error;
  }
};

export {
  add,
  minus,
  multiply,
  divide,
};
