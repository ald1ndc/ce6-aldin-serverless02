exports.hello = async (event) => {
  console.log("************logging info - aldin**************");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Go Serverless v4! Your API function Aldin has executed successfully!",
    }),
  };
};

exports.hello2 = async (event) => {
  console.log("************logging info 2 - aldin**************");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Go Serverless v4! Your S3 function Aldin has executed successfully!",
    }),
  };
};


exports.hello3 = async (event) => {
  console.log("************logging info 3 - aldin**************");
  return {
    statusCode: 200,
    body: JSON.stringify({
      message:
        "Go Serverless v4! Your SQS function Aldin has executed successfully!",
    }),
  };
};
