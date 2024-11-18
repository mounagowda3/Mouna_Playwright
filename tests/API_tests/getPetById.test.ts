import { test, expect } from '@playwright/test';

test.describe('Get Pet by ID API Tests', () => {
  test('Get a pet by valid ID', async ({ request }) => {  
    // Send the GET request
    const response = await request.get('https://petstore.swagger.io/v2/pet/33');
    // Verify the response status 200
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody)
    // Verify the Pet ID
    expect(responseBody.id).toBe(33);
  });

  test('Get a pet by Invalid ID', async ({ request }) => {  
    // Send the GET request
    const response = await request.get('https://petstore.swagger.io/v2/pet/3356');
    // Verify the response status
    expect(response.status()).toBe(404);
  });
});