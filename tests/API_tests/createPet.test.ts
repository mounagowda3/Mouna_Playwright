import { test, expect } from '@playwright/test';

test.describe('Create Pet API Tests', () => {
  test('Create pet with valid data', async ({ request }) => {  // Destructure `page` from `test`
    const petData = {
      id: '33',
      name: 'Mouna',
      status: 'available',
    };
    // Send the POST request
    const response = await request.post('https://petstore.swagger.io/v2/pet', {
      data: petData,
    });
    // Verify the response status
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.name).toBe(petData.name);
    console.log(responseBody);
  });

  test('Create pet with invalid data', async ({ request }) => {  // Destructure `page` from `test`
    const petData = {
      id: '3.3',
      status: 'available',

    };
    // Send the POST request
    const response = await request.post('https://petstore.swagger.io/v2/pet', {
      data: petData,
    });
     // Verify the response status
    const responseBody = await response.json();
    expect(response.status()).toBe(400 | 500);
  });
});