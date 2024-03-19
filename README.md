# Simple VanillaJS frontend for Vaisala XWeather data
This repo creates an AWS-based frontend stack using S3 and Cloudfront. The code also deploys the frontend code to the S3 bucket. The actual frontend is a very simple PoC VanillaJS frontend to fetch some Vaisala XWeather weather data and maps.

## How to point to your frontend and change resource names
The resource names and pointer to the frontend code are in the file [frontend-resources.ts](lib/resources/frontend-resources.ts). The most important is the pointer on line 30. Currently it deploys all the code in the path `./lib/frontend-code`.

## Vaisala XWeather API keys
- Aerisweather API (Vaisala XWeather) requires registration, see https://www.xweather.com/account.
- Once you have registered and created the API keys, insert them into the file [weatherapp.js](lib/frontend-code/weatherapp.js) on line 2 `const aeris = new AerisWeather("AERISID", "AERISSECRET");`. Fetching the data will not work without valid API keys.

## Useful commands
* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Dependencies
- AWS CLI
- AWS CDK
- Typescript
- Node and npm

## Other notes
The `cdk.json` file tells the CDK Toolkit how to execute the app.
