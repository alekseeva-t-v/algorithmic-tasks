import { test } from "./modules/tester";

const parantesisPairs = {
  '(': ')',
  '[': ']',
};

const openingParenthesis = new Set(Object.keys(parantesisPairs));
const closingParenthesis = new Set(Object.values(parantesisPairs));

/**
 * Возвращает true или false в зависимости от того корректно ли расставлены скобки.
 *
 * @param {string} text строка с исходной последовательностью скобок.
 * @return {boolean} true или false в зависимости от того корректно ли расставлены скобки.
 */
function validateparenthesis(text) {
  const stack = [];

  for (const character of text) {
    if (openingParenthesis.has(character)) {
      stack.push(character);
    }

    if (closingParenthesis.has(character)) {
      if (!stack.length) {
        return false;
      }

      const parenthesis = stack.pop();

      if (character !== parantesisPairs[parenthesis]) {
        return false;
      }
    }
  }

  return !stack.length;
}

test(validateparenthesis('(((())()))'), true);
test(validateparenthesis('())'), false);
test(validateparenthesis(')('), false);
test(validateparenthesis('([])'), true);
test(validateparenthesis('([)]'), false);