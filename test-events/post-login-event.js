module.exports = {
  "resource": "/v1.0/apis/auth/login",
  "path": "/v1.0/apis/auth/login",
  "httpMethod": "POST",
  "headers": {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate",
    "Cache-Control": "no-cache",
    "CloudFront-Forwarded-Proto": "https",
    "CloudFront-Is-Desktop-Viewer": "true",
    "CloudFront-Is-Mobile-Viewer": "false",
    "CloudFront-Is-SmartTV-Viewer": "false",
    "CloudFront-Is-Tablet-Viewer": "false",
    "CloudFront-Viewer-Country": "KR",
    "Host": "azr46ml5ib.execute-api.ap-northeast-2.amazonaws.com",
    "Postman-Token": "6016050a-e0cd-475a-b822-c4a4d6ec877d",
    "User-Agent": "PostmanRuntime/7.18.0",
    "Via": "1.1 fba5fc6a6f52a6a50e3f971e4a8b0d93.cloudfront.net (CloudFront)",
    "X-Amz-Cf-Id": "viLMuiXH5z7paFd8NrTFSAG2PuHlBvxSFMMr9RnhGqDMn21y3NXZTQ==",
    "X-Amzn-Trace-Id": "Root=1-5da70767-c8029f5a02145e77bb250dcd",
    "X-Forwarded-For": "112.187.193.204, 52.46.53.140",
    "X-Forwarded-Port": "443",
    "X-Forwarded-Proto": "https"
  },
  "multiValueHeaders": {
    "Accept": [
      "*/*"
    ],
    "Accept-Encoding": [
      "gzip, deflate"
    ],
    "Cache-Control": [
      "no-cache"
    ],
    "CloudFront-Forwarded-Proto": [
      "https"
    ],
    "CloudFront-Is-Desktop-Viewer": [
      "true"
    ],
    "CloudFront-Is-Mobile-Viewer": [
      "false"
    ],
    "CloudFront-Is-SmartTV-Viewer": [
      "false"
    ],
    "CloudFront-Is-Tablet-Viewer": [
      "false"
    ],
    "CloudFront-Viewer-Country": [
      "KR"
    ],
    "Host": [
      "azr46ml5ib.execute-api.ap-northeast-2.amazonaws.com"
    ],
    "Postman-Token": [
      "6016050a-e0cd-475a-b822-c4a4d6ec877d"
    ],
    "User-Agent": [
      "PostmanRuntime/7.18.0"
    ],
    "Via": [
      "1.1 fba5fc6a6f52a6a50e3f971e4a8b0d93.cloudfront.net (CloudFront)"
    ],
    "X-Amz-Cf-Id": [
      "viLMuiXH5z7paFd8NrTFSAG2PuHlBvxSFMMr9RnhGqDMn21y3NXZTQ=="
    ],
    "X-Amzn-Trace-Id": [
      "Root=1-5da70767-c8029f5a02145e77bb250dcd"
    ],
    "X-Forwarded-For": [
      "112.187.193.204, 52.46.53.140"
    ],
    "X-Forwarded-Port": [
      "443"
    ],
    "X-Forwarded-Proto": [
      "https"
    ]
  },
  "queryStringParameters": null,
  "multiValueQueryStringParameters": null,
  "pathParameters": null,
  "stageVariables": null,
  "requestContext": {
    "resourceId": "iuobxu",
    "resourcePath": "/v1.0/apis/auth/login",
    "httpMethod": "POST",
    "extendedRequestId": "Bp4YQGJSIE0Fb-Q=",
    "requestTime": "16/Oct/2019:12:04:55 +0000",
    "path": "/dev/v1.0/apis/auth/login",
    "accountId": "843815199246",
    "protocol": "HTTP/1.1",
    "stage": "dev",
    "domainPrefix": "azr46ml5ib",
    "requestTimeEpoch": 1571227495984,
    "requestId": "90ffba7d-0434-4517-8ea5-18aba1164494",
    "identity": {
      "cognitoIdentityPoolId": null,
      "accountId": null,
      "cognitoIdentityId": null,
      "caller": null,
      "sourceIp": "112.187.193.204",
      "principalOrgId": null,
      "accessKey": null,
      "cognitoAuthenticationType": null,
      "cognitoAuthenticationProvider": null,
      "userArn": null,
      "userAgent": "PostmanRuntime/7.18.0",
      "user": null
    },
    "domainName": "azr46ml5ib.execute-api.ap-northeast-2.amazonaws.com",
    "apiId": "azr46ml5ib"
  },
  "body": JSON.stringify(
      {
        user_id:'user3',
        password:'ohMy'
      }),
  "isBase64Encoded": false
};
