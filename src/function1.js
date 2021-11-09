export async function lambdaHandler(event, context) {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            'message': 'Hello from Lambda! Function1'
        }),
    };
    return response;
};
