import { test, expect, APIResponse } from "@playwright/test";
import Ajv from "ajv";
import apiSchema from "../shared/api-schema.json";

const ajv = new Ajv();
const base64Credentials = process.env.BASE64_CREDENTIALS || '';

const validateApiResponse = async (schema: object, response: APIResponse) => {
  const responseBody = await response.json();
  const validate = ajv.compile(schema);
  return validate(responseBody);
};

test('API response schema is valid', async ({ page }) => {
  try {
    const response = await page.request.get('https://jsonplaceholder.typicode.com/todos/1');
    expect(await validateApiResponse(apiSchema.getJsonplaceholder, response)).toBeTruthy();
  } catch (error) {
    console.error('Error:', error);
  }
});

test('Postman Echo POST', async ({ page }) => {
  try {
    const response = await page.request.post('https://jsonplaceholder.typicode.com/posts', {
      data: {
        title: 'Book Title',
        author: 'John Doe',
      }
    });
    expect(await validateApiResponse(apiSchema.postmanPost, response)).toBeTruthy();
  } catch (error) {
    console.error('Error:', error);
  }
});

test('Postman Echo GET Base Auth', async ({ page }) => {
  try {
    const response = await page.request.get('https://postman-echo.com/basic-auth', {
      headers: { Authorization: `Basic ${base64Credentials}` }
    });
    expect(await validateApiResponse(apiSchema.postmanGetBaseAuth, response)).toBeTruthy();
  } catch (error) {
    console.error('Error:', error);
  }
});
