async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Welcome to the auction service!' }),
  };
}

export const handler = hello;
