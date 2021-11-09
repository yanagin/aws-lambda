export async function lambdaHandler(event, context) {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda! Function1'),
    };
    return response;
};
